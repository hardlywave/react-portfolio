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
        avatar: 'https://picsum.photos/200/301',
        name: {
            firstName: 'Enrico',
            secondName: 'Cole',
        },
    },
    auctionCustomerData: {
        avatar: '',
        name: {
            firstName: 'Alex',
            secondName: 'Unknown',
        },
        instantPrice: 3.5,
    },
    auctionCurrentBid: {
        currentBid: 1.00,
        total: 3618.36,
    },
}

root.render(
  <React.StrictMode>
    <Header options={headerData}/>
    <AuctionPage options={auctionData}/>
  </React.StrictMode>
);