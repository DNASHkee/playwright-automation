/*
1. Teszteset létrehozása
    * Adj nevet a tesztnek.
    * Készítsd elő a Playwright környezetet.
2. Weboldal megnyitása
    * Nyisd meg a Broken Images oldalt.
3. Képek megkeresése
    * Keresd meg az összes img elemet.
    * Számold meg, hány képet találtál.
4. Képek feldolgozása
    * Egy ciklus segítségével haladj végig a képeken.
    * Mindegyik képnél kérd le a src attribútum értékét.
5. Képek elérhetőségének ellenőrzése
    * Állítsd elő a kép teljes URL-jét.
    * Küldj HTTP-kérést a kép címére.
    * Kérd le a kapott válasz státuszkódját.
6. Eredmények ellenőrzése
    * Ellenőrizd, hogy a HTTP-válasz sikeres-e.
    * A hibás képeket azonosítsd.
    * A sikeres HTTP-válasz mellett azt is érdemes ellenőrizni, hogy a böngésző valóban be tudta-e tölteni a képet.
7. Teszt futtatása
    * Futtasd Chromium böngészőben.
    * Nézd meg a Playwright riportját. */
//=====================TC001========================
import { test, expect } from "@playwright/test";
import { log } from "console";
test("TC001 - Herokuapp/brokenimages kepek eleresi utjanak ellenorzese", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  const imgFinder = page.locator("img");
  const imgCount = await imgFinder.count();
  console.log("Ennyi kepet talalt: " + imgCount);
});

//=====================TC002========================
test("TC002 - Herokuapp/brokenimages kepek eleresi utjanak ellenorzese example classra szukitve", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  const imgFinder = page.locator(".example img");
  const imgCount = await imgFinder.count();
  console.log("Ennyi kepet talalt: " + imgCount);
  await expect(imgCount).toBe(3);
});

//=====================TC003========================
test("TC003 - Herokuapp/brokenimages kepek eleresi utjanak ellenorzese example classra szukitve, for ciklussal bejarva ", async ({
  page,
  request,
}) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  const imgFinder = page.locator(".example img");
  const imgCount = await imgFinder.count();
  console.log("Ennyi kepet talalt: " + imgCount);
  expect(imgCount).toBe(3);
  for (let i = 0; i < imgCount; i++) {
    console.log(i);
    const currentImage = imgFinder.nth(i); //.nth() → kiválaszt egy képet az indexe alapján
    const imageSrc = await currentImage.getAttribute("src");
    console.log(imageSrc);
    const imgUrl = "https://the-internet.herokuapp.com/" + imageSrc;
    console.log(imgUrl);
    const response = await request.get(imgUrl);
    const responseCheck = response.status();
    console.log(responseCheck);
    expect.soft(responseCheck).toBe(200); // a .soft tovabb engedi a tesztet akkor is ha elbukik az elejen
  }
});
