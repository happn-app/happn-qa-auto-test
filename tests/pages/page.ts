export class Tabbar {
    get webdriver () { return $('~Webview') }

    async openWebdriver() {
        await this.webdriver.click()
    }
}

export class Page {
    tabbar = new Tabbar()

    async ensureExists(selectors: any[]): Promise<boolean> {
        throw new Error('Method not implemented')
    }
}
