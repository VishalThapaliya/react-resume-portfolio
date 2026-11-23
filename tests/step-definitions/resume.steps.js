import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, Then } = createBdd();

const getResumeSection = (page, section) => {
    return page.getByRole('heading', { name: section, exact: true });
}

Given('the visitor opens the Resume page', async ({ page }) => {
    await page.goto('/resume');
});

Then('the {string} section should be visible', async ({ page }, section) => {
    await expect(getResumeSection(page, section)).toBeVisible();
});

Then('the {string} position should be visible', async ({ page }, position) => {
    await expect(page.getByText(position, { exact: true })).toBeVisible();
});

Then('the {string} company should be visible', async ({ page }, company) => {
    await expect(page.getByText(company, { exact: true })).toBeVisible();
});

Then('the {string} skill should be listed in Technical Skills', async ({ page }, skill) => {
    const skillItem = page.locator('.skills-list').getByText(skill, { exact: true });

    await expect(skillItem).toHaveCount(1);
});