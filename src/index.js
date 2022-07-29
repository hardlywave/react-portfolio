import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let headerData = {
    id: Date.now(),
    logoName: 'crypter',
    discoverButton: 'Discover',
    workInfoButton: 'How it works',
    uploadButton: 'Upload',
    walletButton: 'Connect Wallet',
    searchHolder: 'Search',
    notification: [
        {
            id: 1,
        }
    ],
}

root.render(
  <React.StrictMode>
    <Header options={headerData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
