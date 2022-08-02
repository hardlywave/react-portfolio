import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './pages/Header';
import AuctionPage from "./pages/AuctionPage";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const headerData = {
    notification: [
        {
            id: '',
            from: '',
            message: '',
        },
        {
            id: '',
            from: '',
            message: '',
        }
    ],
}

const auctionData = {
    auctionCreatorData: {
        avatar: 'https://picsum.photos/200/301',
        name: {
            firstName: 'Enrico',
            secondName: 'Cole',
        },
        nftImgLink: 'https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png',
    },
    auctionCustomerData: {
        avatar: '',
        name: {
            firstName: 'Alex',
            secondName: 'Unknown',
        },
        nftImgLink: '',
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
        <Footer />
      </React.StrictMode>
);