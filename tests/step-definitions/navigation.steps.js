import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given('the visitor opens the portfolio website', async ({ page }) => {
    await page.goto('/');
});

When('the visitor selects {string} from the main navigation', async ({ page }, pageName) => {
    await page.getByRole('navigation').getByRole('link', { name: pageName, exact: true }).click();
});

When('the visitor opens an unknown page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
});

Then('the browser URL should end with {string}', async ({ page }, path) => {
    await expect(page).toHaveURL(url => url.pathname.endsWith(path));
});

Then('the {string} navigation link should be active', async ({ page }, pageName) => {
    const navigationLink = page.getByRole('navigation').getByRole('link', { name: pageName, exact: true});

    await expect(navigationLink).toHaveAttribute('aria-current',  'page');
});