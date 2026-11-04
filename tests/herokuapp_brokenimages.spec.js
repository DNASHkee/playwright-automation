import { test, expect } from "@playwright/test";

// ===================== TC001 =====================

test("TC001 - Verify the total number of images on the page", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  const imgFinder = page.locator("img"); // Összes img elem keresése
  const imgCount = await imgFinder.count(); // Találatok száma

  expect(imgCount).toBe(4); // Pontosan 4 képet várunk
});

// ===================== TC002 =====================

test("TC002 - Verify the number of images in the example section", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  const imgFinder = page.locator(".example img"); // Csak az .example képei
  const imgCount = await imgFinder.count();

  expect(imgCount).toBe(3);
});

// ===================== TC003 =====================

test("TC003 - Verify HTTP status codes of all images in the example section", async ({
  page,
  request,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  const imgFinder = page.locator(".example img");
  const imgCount = await imgFinder.count();

  expect(imgCount).toBe(3);

  // Végigmegyünk az összes képen
  for (let i = 0; i < imgCount; i++) {
    const currentImage = imgFinder.nth(i); // Kép kiválasztása index alapján
    const imageSrc = await currentImage.getAttribute("src"); // src attribútum lekérése

    const imgUrl = "https://the-internet.herokuapp.com/" + imageSrc;

    const response = await request.get(imgUrl); // HTTP GET-kérés
    const responseCheck = response.status(); // HTTP-státuszkód (200, 404 stb.)

    expect.soft(responseCheck).toBe(200); // Hiba esetén is folytatja az ellenőrzéseket
  }
});
