import App from 'next/app';
import React, { Component } from 'react'

import Head from 'next/head';

import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import { Provider } from "@shopify/app-bridge-react";

import Cookies from 'js-cookie';



/**
 * This will be used to setup the Polaris accross the application
 * And also to setup translations
 */
class MyApp extends App {
    langjson = require("../public/assets/language/english.json")

    brandName = this.langjson.Application.Brand;

    render() {
        const { Component, pageProps, shopOrigin } = this.props;
        console.log(`_app.js => ${shopOrigin}`);
        const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true };
        
        return (
            <React.Fragment>
                <Head>
                    <title>{this.brandName}</title>
                    <meta charSet="utf-8" />
                    <script src="../node_modules/tinymce/tinymce.min.js"></script>
                </Head>
                <Provider config={config}>
                    <AppProvider i18n={translations}>
                        <Component {...pageProps} />
                    </AppProvider>
                </Provider>
            </React.Fragment>
        );
    }
}

MyApp.getInitialProps = async ({ ctx }) => {
    return {
        shopOrigin: ctx.query.shop,
    }
}

export default MyApp;