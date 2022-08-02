import "./index.scss"
import i18n from "../../../i18n";

const AuctionHeader = () => {
    const { t } = i18n;
    return (
        <div className="auction-page__header">
            <p className="header-paragraph">
                {t('auction.creative_agency')}
            </p>
            <h3 className="header-title">
                {t('auction.creative_economy')}
            </h3>
            <button className="header-button">
                {t('auction.start_your_search')}
            </button>
        </div>
    )
}

export default AuctionHeader;