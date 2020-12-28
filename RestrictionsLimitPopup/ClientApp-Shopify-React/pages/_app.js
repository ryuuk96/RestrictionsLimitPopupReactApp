import App from 'next/app';
import React, { Component } from 'react'

import Head from 'next/head';

import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';

// import { Provider } from "@shopify/app-bridge-react";

/**
 * This will be used to setup the Polaris accross the application
 * And also to setup translations
 */
class MyApp extends App {
    langjson = require("../assets/language/english.json")

    brandName = this.langjson.Application.Brand;

    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>{this.brandName}</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvider i18n={translations}>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;