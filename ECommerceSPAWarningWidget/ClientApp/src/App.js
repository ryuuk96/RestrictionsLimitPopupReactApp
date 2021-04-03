import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import React, { Component } from 'react';
import translations from '@shopify/polaris/locales/en.json';
import { BrowserRouter } from 'react-router-dom';
import ApplicationLayout from './components/ApplicationLayout';
import './custom.css'
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
require("dotenv").config();

export default class App extends Component {
    static displayName = App.name;

    getShopOriginFromUrl() {
        var url = new URL(window.location.href);
        console.log(process.env.REACT_APP_SHOPIFY_API_KEY);
        console.log(url.searchParams.get('shop'));
        return url.searchParams.get('shop');
    }

    appConfig = {
        apiKey: process.env.REACT_APP_SHOPIFY_API_KEY,
        shopOrigin: this.getShopOriginFromUrl()
    };

    render() {
        return (
            <BrowserRouter basename={baseUrl}>
                <Provider config={this.appConfig}>
                    <AppProvider i18n={translations}>
                        <ApplicationLayout />
                    </AppProvider>
                </Provider>
            </BrowserRouter>
        );
    }
}
