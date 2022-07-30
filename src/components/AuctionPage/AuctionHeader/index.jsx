import "./index.scss"

const AuctionHeader = ({options}) => {
    return (
        <div className="auction-page__header">
            <p className="header-paragraph">
                {options.paragraphName}
            </p>
            <h3 className="header-title">
                {options.titleName}
            </h3>
            <button className="header-button">
                {options.buttonName}
            </button>
        </div>
    )
}

export default AuctionHeader;