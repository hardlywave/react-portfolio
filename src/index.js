import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header';
import AuctionPage from "./components/AuctionPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const headerData = {
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

const auctionData = {
    auctionHeaderData: {
        paragraphName: 'A creative agency that lead and inspire',
        titleName: 'The new creative economy',
        buttonName: 'Start your search',
    },
    auctionCreatorData: {
        avatar: "https://picsum.photos/200/301",
        name: {
            firstName: 'Enrico',
            secondName: 'Cole',
        },
    }
}

root.render(
  <React.StrictMode>
    <Header options={headerData}/>
    <AuctionPage options={auctionData}/>
  </React.StrictMode>
);