import './index.scss'
import ProfileComponent from "../../../components/ProfileComponent";
import Countdown from 'react-countdown';

const BidComponent = ({options}) => {
    const {auctionCreatorData: creator, auctionCustomerData: customer, auctionCurrentBid: bid} = options;

    const CountDownTimer = ({ hours, minutes, seconds}) => {
        return (
            <div className="current-bid-timer">
                <div className="current-bid-timer-number">
                    <span className="current-bid-timer-hr">{hours}</span>
                    <span className="current-bid-timer-min">{minutes}</span>
                    <span className="current-bid-timer-sec">{seconds}</span>
                </div>
                <div className="current-bid-timer-text">
                    <span className="current-bid-timer-hr">Hrs</span>
                    <span className="current-bid-timer-min">Mins</span>
                    <span className="current-bid-timer-min">Secs</span>
                </div>
            </div>
        )
    };
    return (
        <div className="bid-component">
            <h3 className="bid-component__title">The creator network<span className="title-r">®</span></h3>
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
                    <h3 className="current-bid-title">Current Bid</h3>
                    <div className="current-bid-number">
                        {bid.currentBid.toFixed(2)} ETH
                    </div>
                    <div className="current-bid-total">
                        ${bid.total.toLocaleString()}
                    </div>
                </div>
                <div className="current-bid-container-timer">
                    <div className="current-bid-title timer">
                        Auction ending in
                    </div>
                    <Countdown
                        date={Date.now() + 10000000}
                        renderer={ CountDownTimer }
                    />
                </div>
            </div>
            <div className="bid-component__button">
                <button className="bid-component__button__place">Place a bid</button>
                <button className="bid-component__button__view">View item</button>
            </div>
        </div>
    )
}

export default BidComponent;