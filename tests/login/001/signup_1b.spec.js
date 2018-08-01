/*

testing Funnel 1B's Log-In/Sign-Up page

FIRST PAGE FOR FUNNEL 1B: https://www.kidguard.com/funnel/form/001/b?lander=home&
Description: Including "first name," "last name," "email," "phone," "state,"
and "zip code"

SECOND PAGE FOR FUNNEL 1B
includes passowrd,verify password, and security question/answer

*/

"use strict";
var myModule = require('../login.library.js');

const form = { 
                  "name": "input[name='first_name']",
                  "last": 'input[name="last_name"]',
                  "zipcode": "input[id='zipcode']", 
                  "email": 'input[name="email"]',
                  "phone": 'input[name="phone"]',
                  "exp": "0", 
                  "expmonth": "input[name='expiration_month']", 
                  "expyear": "input[name='expiration_year']",
                  "zipcode": 'input[id="zipcode"]',
                  "state": 'select[id="state"] option:contains("TX")',
                  "password": 'input[id="password"]', 
                  "verify": 'input[id="password_verify"]',
                  "secret_q": 'select[id="secret_question"] option:contains("color")',
                  "secret_answer": 'input[id="secret_question_answer"]',
                  "password_submit": 'button.submit_button'

}

const Nightmare = require( "nightmare" ),
    expect = require( "chai" ).expect,
    BASE_URL = "https://www.kidguard.com/funnel/form/001/b?lander=home&",
    onError = ( err ) => {
        console.error( "Test-runner failed:", err );
    },
    browser = new Nightmare({
        height: 678,
        width: 1024,
        show: true,
        typeInterval: 20,
        pollInterval: 5000,
        waitTimeout: 30000,
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

const base = {'selectors': form, 'page': browser};

    describe("Testing Funnel 1B Sign-Up/Log-in Page", function() {

        beforeEach(function(done) {
            browser
                .goto(BASE_URL)
                .evaluate(() => {
                    localStorage.clear();
                    return window.location.href;
                })
                .then((url) => {
                    console.log('Entering ' + url);
                    done();
                })
                .catch((error) => {
                    console.log('error')
                    done(error)
                });
        });

        // afterEach( function(done) {
        //     browser.end().then(() => {
        //         done()
        //     });

        // });

        it("Landing page 1B Sign-Up/Log-in test", async function () {

            await myModule.name(base);
            await myModule.phone(base);
            await myModule.location(base);

            await myModule.password(base);
        });
    });