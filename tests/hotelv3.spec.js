// - - - - - - - - ELSO TESZT - - - - - - - - - -
import { test, expect } from "@playwright/test";

test("TC001 - Ellenorzom a megnezem a teljes listat gomb letezik-e es mukodik e a kattintas", async ({
  page,
}) => {
  await page.goto("http://hotel-v3.progmasters.hu/");
  const buttonShow = page.getByRole("button", {
    name: "Megnézem a teljes listát",
  });
  await expect(buttonShow).toBeVisible();
  await buttonShow.click();
});

// - - - - - - - - MASODIK TESZT - - - - - - - - - -
test("TC002 - Vizsgalom a megnezem a teljes listat gom kattintasra at navigal e", async ({
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
