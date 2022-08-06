import './index.scss'
import i18n from "../../i18n";

const CountDownTimer = ({ hours, minutes, seconds, completed}) => {
    const { t } = i18n;
    return completed
        ? (
            <div className="current-bid-timer-expired">
                <span className="current-bid-timer-min">{t('auction.bid.auction_closed')}</span>
            </div>
        )
        : (
            <div className="current-bid-timer">
                <div className="current-bid-timer-title">
                    {t('auction.bid.auction_ending_in')}
                </div>
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

export default CountDownTimer;