import './index.scss'
import Countdown from 'react-countdown';
import i18n from "../../../i18n";
import ProfileComponent from "../../../components/ProfileComponent";
import CountDownTimer from "../../../components/CountDownTimer";

const BidComponent = ({options}) => {
    const {auctionCreatorData: creator, auctionCustomerData: customer, auctionCurrentBid: bid, isMedia} = options;
    const { t } = i18n;

    return (
        <div className="bid-component">
            <h3 className="bid-component__title">{creator.nftName}</h3>
            <div className="bid-component__creator-price-info">
                <div className="left-content">
                    <ProfileComponent
                        avatar={creator.avatar}
                        topName={`${creator.name.firstName} ${creator.name.secondName}`}
                        bottomName={'Creator'}
                    />
                </div>
                <div className="right-content">
                    <ProfileComponent
                        avatar={customer.avatar}
                        topName={'Instant Price'}
                        topNameStyle={{fontSize: '12px', color: '#777E90'}}
                        bottomName={`${customer.instantPrice || ''} ETH`}
                        bottomNameStyle={{fontSize: '20px', color: 'white'}}
                    />
                </div>
            </div>
            <div className="bid-component__current-bid">
                <div className="current-bid-container-money">
                    <h3 className="current-bid-title">{t('auction.bid.current_bid')}</h3>
                    <div className="current-bid-number">
                        {bid.currentBid.toFixed(2)} ETH
                    </div>
                    <div className="current-bid-total">
                        ${bid.total.toLocaleString()}
                    </div>
                </div>
                <div className="current-bid-container-timer">
                    <Countdown
                        date={Date.now() + 10000000}
                        renderer={ CountDownTimer }
                    />
                </div>
            </div>
            <div className="bid-component__button">
                <button className="bid-component__button__place">{t('auction.bid.place_a_bid')}</button>
                <button className="bid-component__button__view">{t('auction.bid.view_item')}</button>
            </div>
        </div>
    )
}

export default BidComponent;