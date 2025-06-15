import { $, expect } from '@wdio/globals';
import { Page } from './page.js';


class SwipePage extends Page {
   
    private get title() {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }

    private get description() {
        return $('//android.widget.TextView[contains(@text, "Or swipe vertical to find what")]');
    }

    private get carousel() {
        return $('//android.view.ViewGroup[@content-desc="Carousel"]');
    }

    private get carouselItems() {
        return $$('//android.view.ViewGroup[@content-desc="card"]');
    }

    
    async visitSwipe() {
        const swipeMenu = await $('//android.widget.TextView[@text="Swipe"]');
        await swipeMenu.click();
    }

    async assertTitle() {
        const titleElement = await this.title;
        await expect(titleElement).toBeDisplayed();
        const titleText = await titleElement.getText();
        await expect(titleText).toBe('Swipe horizontal');
    }

    async assertDescription() {
        const descElement = await this.description;
        await expect(descElement).toBeDisplayed();
        const descText = await descElement.getText();
        await expect(descText).toBe('Or swipe vertical to find what I\'m hiding.');
    }
    async assertCarousel(expectedCount = 6) {
        const carousel = await this.carousel;
        await expect(carousel).toBeDisplayed();
        const titles = await this.getAllCarouselCardTitles(expectedCount);
        expect(titles.size).toBe(expectedCount);
    }

    //swipe through the carousel cards and collect their titles
    async getAllCarouselCardTitles(expectedCount = 6): Promise<Set<string>> {
        const foundTitles = new Set<string>();
        let swipeCount = 0;
        const maxSwipes = 10;

        while (foundTitles.size < expectedCount && swipeCount < maxSwipes) {
            for (let i = 1; i <= 2; i++) {
                const card = await $(`(//android.view.ViewGroup[@content-desc="card"])[${i}]`);
                if (await card.isDisplayed()) {
                    const titleElem = await card.$('android.widget.TextView');
                    const title = await titleElem.getText();
                    foundTitles.add(title);
                }
            }
            if (foundTitles.size < expectedCount) {
                const carousel = await this.carousel;
                const location = await carousel.getLocation();
                const size = await carousel.getSize();
                
                const startX = location.x + size.width * 0.8;
                const endX = location.x + size.width * 0.2;
                const y = location.y + size.height / 2;

                await browser.performActions([{
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: startX, y: y },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 100 },
                        { type: 'pointerMove', duration: 600, x: endX, y: y },
                        { type: 'pointerUp', button: 0 }
                    ]
                }]);
                await browser.pause(600);
                swipeCount++;
            }
        }
        return foundTitles;
    }

    async assertEasterEgg() {
        const easterEgg = await $('//android.widget.TextView[@text="You found me!!!"]');
        await expect(easterEgg).toBeDisplayed();
        const message = await easterEgg.getText();
        await expect(message).toBe('You found me!!!');
    }

    async performVerticalSwipe() {
        const { width, height } = await browser.getWindowSize();
        const startY = height * 0.8;  // Start from bottom
        const endY = height * 0.2;    // End at top
        const x = width / 2;          // Center of screen

        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: x, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 1000, x: x, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await browser.pause(2000); // Wait longer for the animation to complete
    }
}

export default new SwipePage(); 