import "./index.scss"
import AuctionHeader from "./AuctionHeader";
import BidComponent from "./BidComponent";
import leftArrowSvg from "../../assets/auction-left-arrow.svg";
import rightArrowSvg from "../../assets/auction-right-arrow.svg";
import Button from "../../components/Button";
import { useMediaQuery } from 'react-responsive';

const AuctionPage = ({options}) => {
    const { auctionCreatorData, auctionCustomerData, auctionCurrentBid} = options

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const IsMobileChecker = (status) =>{
        const laptopStyle = {
            flexDirection: 'row',
        }
        const mobileStyle = {
            flexDirection: 'column',
            margin: '60px 30px 60px 30px',
        }

        return status ? mobileStyle : laptopStyle
    }
    return (
        <div className="auction-page">
            <AuctionHeader/>
            <div className="auction-page__content" style={IsMobileChecker(isMobile)}>
                <img className="nft-image" src={auctionCreatorData.nftImgLink} style={isMobile ? { width: 'auto'} : {marginRight: "30px"}} alt="nft"/>
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