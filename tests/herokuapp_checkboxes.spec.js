import { test, expect } from "@playwright/test";
test("TC001 - Herokuapp/checkboxes elso checkbox mukodese", async ({
  page,
}) => {
  const pageOpen = page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxShow = page.locator("input").first();
  await pageOpen;
  await expect(checkBoxShow).toBeVisible();
  await expect(checkBoxShow).not.toBeChecked();
  await checkBoxShow.click();
  await expect(checkBoxShow).toBeChecked();
});

test("TC002 - Herokuapp/checkboxes masodik checkbox mukodese", async ({
  page,
}) => {
  const pageOpen = page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxShow = page.locator("input").last();
  await pageOpen;
  await expect(checkBoxShow).toBeVisible();
  await expect(checkBoxShow).toBeChecked();
});
