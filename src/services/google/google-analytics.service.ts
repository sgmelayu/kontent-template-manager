import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { environment } from '../../environments/environment';


declare var document: any;
declare var gtag: any;
declare var window: any;

/**
 * Docs: https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
@Injectable({
    providedIn: 'root',
})
export class GoogleAnalyticsService {

    /**
     * Name of script tag in DOM
     */
    protected readonly sourceScriptElemId = 'google-analytics-source';

    /**
     * Name of script tag in DOM
     */
    protected readonly executionSriptElemId = 'google-analytics-script';

    private renderer2: Renderer2;

    constructor(
        rendererFactory2: RendererFactory2
    ) {
        this.renderer2 = rendererFactory2.createRenderer(null, null);
    }

    /**
     * Tracks given page in google analytics
     * @param data Page data to track
     */
    trackPageview(data: {
        /**
         * The page's title.
         */
        pageTitle: string,
        /**
         * The page's URL.
         */
        pageLocation?: string,
        /**
         * The path portion of location. This value must start with a slash (/) character.
         */
        pagePath?: string,
    }): void {
        if (!environment.google.enableTracking) {
            // tracking is disabled
            return;
        }

        // make sure script is registered
        this.ensureGoogleAnalyticsScript();

        if (window['gtag']) {
            // source: https://developers.google.com/analytics/devguides/collection/gtagjs/pages
            gtag('config', environment.google.googleAnalyticsTrackingId, {
                page_title: data.pageTitle,
                page_location: data.pageLocation,
                page_path: data.pagePath,
            });
        } else {
            throw Error(`gtag is not available and cannot log page`);
        }

    }

    private ensureGoogleAnalyticsScript(): void {
        if (!environment.google.googleAnalyticsTrackingId) {
            throw Error('Cannot init google analytics because tracking id is not configured');
        }

        if (document.getElementById(this.sourceScriptElemId) || document.getElementById(this.executionSriptElemId)) {
            return;
        }

        const sourceScriptElem = this.renderer2.createElement('script');
        sourceScriptElem.type = 'text/javascript';
        sourceScriptElem.id = this.sourceScriptElemId;
        sourceScriptElem.async = true;
        sourceScriptElem.src = `https://www.googletagmanager.com/gtag/js?id=${environment.google.googleAnalyticsTrackingId}`;

        document.getElementsByTagName('head')[0].appendChild(sourceScriptElem);

        const executionScriptElem = this.renderer2.createElement('script');
        executionScriptElem.type = 'text/javascript';
        executionScriptElem.id = this.executionSriptElemId;
        executionScriptElem.innerText = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        `;

        document.getElementsByTagName('head')[0].appendChild(executionScriptElem);
    }
}