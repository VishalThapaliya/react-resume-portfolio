import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

const categories = [
    "Web development",
    "Web design (UI)",
    "Application",
    "QA & Software Testing"
];

const getFilterButton = (page, category) => 
    page.locator('.filter-list').getByRole('button', { name: category, exact: true });

const getProjectCards = (page) => page.locator('.project-list .project-item');

Given('the visitor opens the Portfolio page', async ({ page }) => {
    await page.goto('/portfolio');
});

When('the visitor selects the {string} filter', async ({ page }, category ) => {
    await getFilterButton(page, category).click();
});

Then('the {string} filter should be selected', async ({ page }, category) => {
    await expect(getFilterButton(page, category)).toHaveAttribute('aria-pressed', 'true');
});

Then('only projects belonging to the {string} category should be displayed', async ({ page }, category) => {
    const projectCards = getProjectCards(page);
    
    await expect.poll(async () => {
        const displayedCategories = await projectCards.locator('.project-category').allTextContents()

        return (
            displayedCategories.length > 0 && 
            displayedCategories.every(
                (displayedCategory) => displayedCategory.trim() === category
            )
        )
    }).toBe(true)
});

Then('all portfolio projects should be displayed', async ({ page }) => {
    const projectCards = getProjectCards(page);
    const allFilter = getFilterButton(page, 'All');
    
    const allProjectsCount = await projectCards.count();
    let totalCategoryProjects = 0;

    // Calculate the expected total from the individual categories.
    for(const category of categories) {
        await getFilterButton(page, category).click();
        
        await expect(projectCards.first()).toBeVisible();

        totalCategoryProjects += await projectCards.count();
    }

    // Restore the All filter
    await allFilter.click();
    
    await expect(projectCards).toHaveCount(allProjectsCount);
    await expect(projectCards).toHaveCount(totalCategoryProjects);
});