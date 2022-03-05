import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import appTheme from 'theme/appTheme';
import App from './App';
import 'swiper/css'; // core Swiper
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-image-lightbox/style.css' // css of react light box
import "swiper/css/thumbs";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}