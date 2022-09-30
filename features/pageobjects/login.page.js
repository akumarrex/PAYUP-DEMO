

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin()
    {
        return $('#Login');
    }

    get setPhone()
    {
        return $('#phone');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get txtprest()
    {
        return $('//*[contains(@text,"Verify your number")]');
    }

    get txtvalue()
    {
        return $('//*[contains(text(),"Verification failed")]');
    }

    get code1()
    {
        return $('#code-1');
    }
    get code2()
    {
        return $('#code-2');
    }
    get code3()
    {
        return $('#code-3');
    }
    get code4()
    {
        return $('#code-4');
    }
    get code5()
    {
        return $('#code-5');
    }
    get code6()
    {
        return $('#code-6');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.btnLogin.click();
        await this.setPhone.setValue("8338611619");
        await this.btnSubmit.click();

        //await this.inputUsername.setValue(username);
        //await this.inputPassword.setValue(password);
        
    }

    async wrongOTP()
    {
        await this.code1.setValue("0");
        await this.code2.setValue("0");
        await this.code3.setValue("0");
        await this.code4.setValue("0");
        await this.code5.setValue("0");
        await this.code6.setValue("0");
        console.log(await this.txtvalue.getText());
        console.log("***************");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
