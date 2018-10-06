const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  jest.setTimeout(15000);

  page = await Page.build();
  await page.goto("localhost:3000/surveys");
});

afterEach(async () => {
  await page.close();
});

test("the header has the correct text", async () => {
  const text = await page.$eval("a.brand-logo", el => el.innerHTML);

  expect(text).toEqual("Emaily");
});

test("clicking login starts oauth flow", async () => {
  await page.click(".right a");

  const url = await page.url();

  expect(url).toMatch("/accounts.google.com");
});

test("When signed in, shows logout button", async () => {
  await page.login();
  const text = await page.$eval('a[href="/api/logout"]', el => el.innerHTML);

  expect(text).toEqual("Logout");
});