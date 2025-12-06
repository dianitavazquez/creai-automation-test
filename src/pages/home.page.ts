import { BasePage } from "./base.page";
import { GeneralData } from "../fixtures/general.data";

export class HomePage extends BasePage {
  readonly denyCookiesButton = this.page.locator(GeneralData.cybotCookiebotDialogDenyButton);
  readonly allowCookiesButton = this.page.locator(GeneralData.cybotCookiesDiaglogAllowSelectionButton);
  readonly logo = this.page.locator(GeneralData.logoSelector);
  readonly ctaButton = this.page.locator(GeneralData.ctaSelector);
  readonly ctaAnimationButton = this.page.locator(GeneralData.ctaAnimationSelector);
  readonly navContainer = this.page.locator(GeneralData.navContainerSelector);
  readonly navMenuButtons  = this.page.locator(GeneralData.navMenuButtonsSelector);
  readonly footerComponent = this.page.locator(GeneralData.footerComponentSelector);
  readonly aboutLink = this.page.getByRole('navigation').getByRole('link', { name: GeneralData.aboutUsLinkText});
  readonly mobileMenuIcon = this.page.locator(GeneralData.mobileMenuIcon);

  async denyCookies() {
    await this.expect(this.footerComponent).toBeVisible();
    await this.denyCookiesButton.click();
  }

  async allowCookies() {
    await this.allowCookiesButton.click();
  }

  async validateLogoVisible() {
    await this.expect(this.logo).toBeVisible();
  }

  async validateCTAVisible() {
    await this.expect(this.ctaButton).toBeVisible();
  }

  async validateCTAAnimationVisible() {
    await this.expect(this.ctaAnimationButton).toBeVisible();
  }

  async validateNavContainerVisible() {
    await this.expect(this.navContainer).toBeVisible();
  }

  async validateNavMenuButtonsVisible() {
    await this.expect(this.navMenuButtons).toBeVisible();
  }

  async validateFooterVisible() {
    await this.expect(this.footerComponent).toBeVisible();
  }

  async goToAboutUsPage() {
    await this.aboutLink.click();
  }

  async validateMobileMenuIconVisible() {
    await this.expect(this.mobileMenuIcon).toBeVisible();
  }
}
