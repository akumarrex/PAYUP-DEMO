import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with phonenumber$/, async () => {
    await LoginPage.login()
});

Then(/^I should get OTP$/, async () => {

   // await  expect (LoginPage.btnSubmit).toBePresent();
   await loginPage.wrongOTP();
   await expect (loginPage.txtvalue).toBeDisplayed;
   console.log("Verfication Failed Present");
   /*const fetch = require('node-fetch');
   const URL = 'https://eof34jj1ka8o67.m.pipedream.net';
   
   fetch(URL)
   .Then(Response=> Response.json())
   .Then(json=>console.log(json))
   .catch(err=>console.error(err));*/
    /*(async () => {
        const res = await fetch()
        const answer = await res.json()
        console.log(answer); 
        console.log("***********************************");
        console.log("helllloooooo");
      })()*/

    
    await expect(LoginPage.txtprest).toBeDisplayed; 
    //await expect(SecurePage.flashAlert).toBeExisting();
    //await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

