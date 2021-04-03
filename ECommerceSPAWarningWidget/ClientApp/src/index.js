import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/dist/styles.css';
import Cookies from 'js-cookie';

const rootElement = document.getElementById('root');

function getShopFromUrl() {
  var url = new URL(window.location.href);
  console.log(`Index: ${window.location.href}`);
  return url.searchParams.get('shop');
}

Cookies.set('shopOrigin', getShopFromUrl(), {
  httpOnly: false,
  secure: true,
  sameSite: 'none'
});

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  rootElement);

registerServiceWorker();

