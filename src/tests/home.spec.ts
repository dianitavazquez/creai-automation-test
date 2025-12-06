import { test, expect } from "@playwright/test";
import { HomeData } from "../fixtures/home.data";
import { HomePage } from "../pages/home.page";
import { AboutPage } from "../pages/about.page";
import { validateStatus200 } from "../utils/api.utils";
import { listenConsoleErrors } from "../utils/console.utils";
import { setMobileViewport } from "../utils/viewport.utils";

test.describe("Smoke Test – Homepage CREAI", () => {

  test("TC001 - Validar que la carga de la página retorne un status 200", async ({ request }) => {
    const status = await validateStatus200(request, HomeData.baseURL);
    expect(status).toBe(200);
  });

  test("TC002 - Validar que no haya errores en la consola", async ({ page }) => {
    const errors = await listenConsoleErrors(page);
    await page.goto(HomeData.baseURL);
    expect(errors.length).toBe(0);
  });

  test("TC003 - Validar que el logo sea visible", async ({ page }) => {
    const home = new HomePage(page, expect);
    await home.navigate(HomeData.baseURL);
    await home.allowCookies();
    await home.validateLogoVisible();
  });

  test("TC004 - Validar que exista un botón de contacto o CTA visible", async ({ page }) => {
    const home = new HomePage(page, expect);
    await home.navigate(HomeData.baseURL);
    await home.allowCookies();
    await home.validateCTAVisible();
  });

  test("TC005 - Verificar que 3 secciones o más sean visibles", async ({ page }) => {
    const home = new HomePage(page, expect);
    await home.navigate(HomeData.baseURL);
    await home.allowCookies();

    await home.validateNavContainerVisible();
    await home.validateNavMenuButtonsVisible();
    await home.validateFooterVisible();
  });

  test("TC006 - Validar que al dar click en 'About us' redirija correctamente", async ({ page }) => {
    const home = new HomePage(page, expect);
    const about = new AboutPage(page, expect);
    await home.navigate(HomeData.baseURL);
    await home.allowCookies();
    await home.goToAboutUsPage();

    await expect(page).toHaveURL(HomeData.aboutURL);
  });

  test("TC007 - Validar Mobile View - elementos clave visibles", async ({ page }) => {
    await page.setViewportSize(HomeData.mobileViewport);

    const home = new HomePage(page, expect);
    await home.navigate(HomeData.baseURL);
    await home.allowCookies();

    await home.validateLogoVisible();
    await home.validateCTAAnimationVisible();
    await home.validateMobileMenuIconVisible();
  });

});
