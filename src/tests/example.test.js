import { step } from 'mocha-steps'
import Page from '../builder'
import { expect } from 'chai'

describe('Mocha steps demo', () => {
    let page

    before(async () => {
        page = await Page.build("Desktop")
    })

    after(async () => {
        await page.close()
    })

    step('should load google homepage', async () => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        const signInButton = await page.isElementVisible('#signin_button')
        expect(signInButton).to.be.true
    })

    step('should display login form', async () => {
        await page.waitAndClick('#signin_button')
        const loginForm = await page.isElementVisible('#login_form')
        expect(loginForm).to.be.true
        const signInButton = await page.isElementVisible('#signin_button')
        expect(signInButton).to.be.false
    })

    step('should login to application', async () => {
        await page.waitAndType('#user_login', 'username')
        await page.waitAndType('#user_password', 'password')
        await page.waitAndClick('.btn-primary')
        const navbar = await page.isElementVisible(".nav-tabs")
        // expect(navbar).to.be.true
        expect(navbar).to.be.false

    })
})