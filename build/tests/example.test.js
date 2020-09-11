'use strict';

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mocha steps demo', function () {
    var page = void 0;

    before(async function () {
        page = await _builder2.default.build("Desktop");
    });

    after(async function () {
        await page.close();
    });

    (0, _mochaSteps.step)('should load google homepage', async function () {
        await page.goto("http://zero.webappsecurity.com/index.html");
        var signInButton = await page.isElementVisible('#signin_button');
        (0, _chai.expect)(signInButton).to.be.true;
    });

    (0, _mochaSteps.step)('should display login form', async function () {
        await page.waitAndClick('#signin_button');
        var loginForm = await page.isElementVisible('#login_form');
        (0, _chai.expect)(loginForm).to.be.true;
        var signInButton = await page.isElementVisible('#signin_button');
        (0, _chai.expect)(signInButton).to.be.false;
    });

    (0, _mochaSteps.step)('should login to application', async function () {
        await page.waitAndType('#user_login', 'username');
        await page.waitAndType('#user_password', 'password');
        await page.waitAndClick('.btn-primary');
        var navbar = await page.isElementVisible(".nav-tabs");
        (0, _chai.expect)(navbar).to.be.false;
    });
});