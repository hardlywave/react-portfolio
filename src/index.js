import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header';
import AuctionPage from "./pages/AuctionPage";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const headerData = {
    notification: [
        {
            id: 1,
            from: {
                personalId: 293949391,
                name: {
                    firstName: 'Denis',
                    secondName: 'Tsimafeyenka',
                },
                hashKey: 'Denis293949391Tsimafeyenka',
            },
            message: 'I love you baby :з',
        },
        {
            id: '2',
            from: {
                personalId: 94949392,
                name: {
                    firstName: 'Hardly',
                    secondName: 'Wave',
                },
                hashKey: 'Hardly94949392Wave',
            },
            message: 'I love you baby :з v2.0 ;з',
        }
    ]
}


const auctionData = {
    auctionCreatorData: {
        avatar: 'https://picsum.photos/200/301',
        name: {
            firstName: 'Enrico',
            secondName: 'Cole',
        },
        nftName: "The creator network",
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