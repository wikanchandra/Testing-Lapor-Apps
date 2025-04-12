const { test, expect } = require('@playwright/test');


test('LoginFailed', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://lapor.folkatech.com/");
    
    await page.waitForLoadState('networkidle')
    await page.locator("//input[@placeholder='Email']").fill("admin@example.com")
    
    const password = await page.locator("//input[@id='password']")
    password.fill("pass");
    
    await page.locator("//button[normalize-space()='Sign in']").click()
    
    const ErrorMessage = await page.locator("//label[normalize-space()='Login Gagal! Kata sandi salah.']")
    await expect(ErrorMessage).toBeVisible()
    await expect(ErrorMessage).toHaveText("Login Gagal! Kata sandi salah.")

    

    await page.waitForTimeout(2000)
    
    })

test("SuccessLogin", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://lapor.folkatech.com/");
    
    await page.waitForLoadState('networkidle')
    await page.locator("//input[@placeholder='Email']").fill("admin@example.com")
    
    const password = await page.locator("//input[@id='password']")
    password.fill("password");
    await page.locator("//button[normalize-space()='Sign in']").click()

    await page.waitForTimeout(2000)
})

test("FailureTest", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://lapor.folkatech.com/");
    
    await page.waitForLoadState('networkidle')
    await page.locator("//input[@placeholder='Email']").fill("admin@example.com")
    
    const password = await page.locator("//input[@id='password']")
    password.fill("password");
    await page.screenshot({ path: 'error-screenshot.png' });
    await page.locator("//button[normalize-space()='Sign']").click()

    await page.waitForTimeout(2000)
})