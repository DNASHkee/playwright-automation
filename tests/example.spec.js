// @ts-check
// Bekapcsolja a TypeScript alapú típusellenőrzést a JavaScript fájlban.
// Segít észrevenni bizonyos programozási hibákat már kódírás közben.
// Importáljuk a Playwright teszteléshez szükséges eszközeit.
// test: tesztesetek létrehozására szolgál.
// expect: az elvárt eredmények ellenőrzésére szolgál.
import { test, expect } from "@playwright/test";
// ==================== 1. TESZT ====================
// Létrehozunk egy tesztesetet "has title" néven.
// async: lehetővé teszi az await használatát a függvényen belül.
// page: a böngésző egy lapját képviseli, amelyet a Playwright biztosít.
test("has title", async ({ page }) => {
  // Megnyitjuk a Playwright hivatalos weboldalát.
  // Az await megvárja a navigációs művelet befejezését.
  await page.goto("https://playwright.dev/");
  // Ellenőrizzük, hogy a weboldal címe tartalmazza-e a "Playwright" szót.
  // expect(): megadjuk, hogy mit szeretnénk ellenőrizni.
  // toHaveTitle(): ellenőrzi a weboldal címét.
  // /Playwright/: reguláris kifejezés, amely a címen belül keresi a szöveget.
  // Ha megtalálja: PASS (sikeres teszt).
  // Ha nem találja: FAIL (sikertelen teszt).
  await expect(page).toHaveTitle(/Playwright/);
  // Lezárjuk az első tesztesetet.
});
// ==================== 2. TESZT ====================
// Létrehozunk egy második tesztesetet "get started link" néven.
// async: lehetővé teszi az aszinkron műveletek végrehajtását.
// page: a böngésző lapja, amelyen a tesztet végrehajtjuk.
test("get started link", async ({ page }) => {
  // Megnyitjuk a Playwright hivatalos weboldalát.
  await page.goto("https://playwright.dev/");
  // Megkeressük a "Get started" nevű hivatkozást.
  // getByRole('link'): olyan elemet keres, amelynek szerepe hivatkozás.
  // { name: 'Get started' }: a hivatkozás hozzáférhető neve.
  // click(): rákattint a megtalált elemre.
  // await: megvárja a kattintási művelet befejezését.
  await page.getByRole("link", { name: "Get started" }).click();
  // Ellenőrizzük, hogy a navigáció után megjelenik-e az "Installation" címsor.
  // getByRole('heading'): címsor szerepű elemet keres (például h1, h2, h3).
  // { name: 'Installation' }: a címsor hozzáférhető neve.
  // expect(): megadja az ellenőrizendő elemet.
  // toBeVisible(): ellenőrzi, hogy az elem látható-e az oldalon.
  // Ha látható: PASS.
  // Ha nem látható a megadott időn belül: FAIL.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
  // Lezárjuk a második tesztesetet.
});
