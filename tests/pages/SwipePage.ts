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
    async assertCarousel() {
        const carousel = await this.carousel;
        await expect(carousel).toBeDisplayed();
        
        const items = await this.carouselItems;
        await expect(items).toHaveLength(6);
    }
}

export default new SwipePage(); 