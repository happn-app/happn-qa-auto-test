import { Then } from '@cucumber/cucumber';
import { $, expect } from '@wdio/globals';
import { Page } from './page.js';

class HomePage extends Page {
    // Define the tabbar menu items with their Android selectors
    private get tabbarMenus() {
        return [
            {
                name: "Login",
                selector: '//android.widget.TextView[@text="Login"]'
            },
            {
                name: "Home",
                selector: '//android.widget.TextView[@text="Home"]'
            },
            {
                name: "Swipe",
                selector: '//android.widget.TextView[@text="Swipe"]'
            },
            {
                name: "Drag",
                selector: '//android.widget.TextView[@text="Drag"]'
            },
            {
                name: "WebView",
                selector: '//android.widget.TextView[@text="Webview"]'
            },
            {
                name: "Forms",
                selector: '//android.widget.TextView[@text="Forms"]'
            }
        ];
    }

    // Method to verify all tabbar menus exist
    async assertMenuTabs() {
        for (const menu of this.tabbarMenus) {
            const element = await $(menu.selector);
            await expect(element).toBeDisplayed();
        }
    }

    // Method to verify if a specific menu is selected
    async assertMenuSelected(menu: string) {
        const menuItem = this.tabbarMenus.find((item) => item.name === menu);
    if (!menuItem) {
        throw new Error(`Menu "${menu}" not found in tabbar menus`);
    }

    // Mise à jour : on cible l'élément parent de type android.view.View avec content-desc
    const element = await $(`//android.view.View[@content-desc="${menuItem.name}"]`);

    // Assertion sur l'attribut selected
    const selectedAttr = await element.getAttribute('selected');
    if (selectedAttr !== 'true') {
        throw new Error(`Menu "${menu}" is not selected. Got selected="${selectedAttr}"`);
    }

    // ou en version expect si tu utilises expect-webdriverio :
    // await expect(element).toHaveAttribute('selected', 'true');
    }
}

export default new HomePage(); 