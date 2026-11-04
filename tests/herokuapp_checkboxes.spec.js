import { test, expect } from "@playwright/test";
test("TC001 - Verify that the first checkbox is initially unchecked and can be checked", async ({
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

test("TC002 - Verify that the second checkbox is visible and checked by default", async ({
  page,
}) => {
  const pageOpen = page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxShow = page.locator("input").last();
  await pageOpen;
  await expect(checkBoxShow).toBeVisible();
  await expect(checkBoxShow).toBeChecked();
});
