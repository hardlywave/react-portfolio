import "./index.scss"
import AuctionHeader from "./AuctionHeader";
import BidComponent from "./BidComponent";

const AuctionPage = ({options}) => {
    const { auctionCreatorData, auctionCustomerData, auctionCurrentBid} = options
    return (
        <div className="auction-page">
            <AuctionHeader/>
            <div className="auction-page__content">
                <iframe title="video component" className="video-component" width="640" height="650"
                        src="https://www.youtube.com/embed/0Wa_CR0H8g4?rel=0&modestbranding=1&autohide=1&showinfo=0&loop=1&controls=0" allowFullScreen/>
                <BidComponent options={{auctionCreatorData, auctionCustomerData, auctionCurrentBid}}/>
            </div>
        </div>
    )
}
export default AuctionPage;