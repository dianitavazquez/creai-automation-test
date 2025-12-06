import { Page, Expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly expect: Expect;

  constructor(page: Page, expect: Expect) {
    this.page = page;
    this.expect = expect;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
