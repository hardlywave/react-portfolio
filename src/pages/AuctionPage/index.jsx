import "./index.scss"
import AuctionHeader from "./AuctionHeader";
import BidComponent from "./BidComponent";
import leftArrowSvg from "../../assets/auction-left-arrow.svg";
import rightArrowSvg from "../../assets/auction-right-arrow.svg";
import Button from "../../components/Button";

const AuctionPage = ({options}) => {
    const { auctionCreatorData, auctionCustomerData, auctionCurrentBid} = options
    return (
        <div className="auction-page">
            <AuctionHeader/>
            <div className="auction-page__content">
                <img className="nft-image" src={auctionCreatorData.nftImgLink} alt="nft image"/>
                <div className="bid-component">
                    <BidComponent options={{auctionCreatorData, auctionCustomerData, auctionCurrentBid}}/>
                    <div className="swipe-container">
                        <Button
                            buttonLabel={<img src={leftArrowSvg} className="left-arrow-svg" alt="left arrow"/>}
                            style={{
                                borderRadius: '100%',
                                padding: '5px',
                                height: '20px',
                                width: '20px',
                            }}
                        />
                        <Button
                            buttonLabel={<img src={rightArrowSvg} className="right-arrow-svg" alt="right arrow" />}
                            style={{
                                borderRadius: '100%',
                                padding: '5px',
                                height: '20px',
                                width: '20px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuctionPage;