import { $, expect } from '@wdio/globals';

export class LoginPage {
    get emailInput() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }
    get passwordInput() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }
    get loginButton() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }
    async login(email: string, password: string) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    async visitLogin() {
        const loginTab = await $('//android.widget.TextView[@text="Login"]');
        await loginTab.click();
    }
    async submitPopup() {
        const title = await $("//android.widget.TextView[@resource-id='android:id/alertTitle']");
        const message = await $("//android.widget.TextView[@resource-id='android:id/message']");
        const titleText = await title.getText();
        expect(titleText).toBe('Success');
        const messageText = await message.getText();
        expect(messageText).toContain('You are logged in!');

        const okButton = await $('//android.widget.Button[@resource-id="android:id/button1"]');
        await okButton.click();
    }
    async assertUserProfile() {
        await expect($('~Profile')).toBeDisplayed();
    }
}

export const loginPage = new LoginPage(); 