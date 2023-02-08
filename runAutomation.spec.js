import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://members.liveargyll.co.uk/");
  await page.click('css=[data-bs-target="#loginModal"]');
  await page.fill("css=[id='member-email']", process.env.USERNAME);
  await page.fill("css=[id='member-password']", process.env.PASSWORD);
  await page.locator("css=button[type='submit']").filter({ hasText: "Log In" }).click();
  await page.locator("css=a[href='/members-area/book/']").filter({ hasText: "Book a Class" }).click();
  await page.click("#day-tab-7");
  await page.locator("css=.tab-pane.fade.active.show").locator("text=MetaPWR").click();
  await page.locator("css=button[type='button']").filter({ hasText: "Book Now" }).click();
  await page.locator("Class Booked").waitFor();
});
