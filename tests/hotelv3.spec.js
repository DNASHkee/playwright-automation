// - - - - - - - - TC001 - - - - - - - - - -
import { test, expect } from "@playwright/test";

test("TC001 - Verify that the 'View Full List' button is visible and clickable", async ({
  page,
}) => {
  await page.goto("http://hotel-v3.progmasters.hu/");
  const buttonShow = page.getByRole("button", {
    name: "Megnézem a teljes listát",
  });
  await expect(buttonShow).toBeVisible();
  await buttonShow.click();
});

// - - - - - - - - TC002 - - - - - - - - - -
test("TC002 - Verify navigation to the hotel list page after clicking the 'View Full List' button", async ({
  page,
}) => {
  await page.goto("http://hotel-v3.progmasters.hu");
  const buttonShow = page.getByRole("button", {
    name: "Megnézem a teljes listát",
  });
  await expect(buttonShow).toBeVisible();
  await buttonShow.click();
  await expect(page).toHaveURL("http://hotel-v3.progmasters.hu/hotel");
});
