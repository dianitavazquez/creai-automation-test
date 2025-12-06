import { BasePage } from "./base.page";
import { GeneralData } from "../fixtures/general.data";

export class AboutPage extends BasePage {
  readonly aboutHeader = this.page.getByText(GeneralData.aboutUsHeader);

  async validateToAboutUsPageTitle() {
    await this.expect(this.aboutHeader).toBeVisible();
  }
}