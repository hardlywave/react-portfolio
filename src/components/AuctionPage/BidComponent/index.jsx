import './index.scss'

const BidComponent = ({options}) => {
    return (
        <div className="bid-component">
            <h3 className="bid-component__title">the creator network®</h3>
            <div className="bid-component__creator-price-info">
                <div className="creator-info">
                    { options?.avatar
                        ? <img
                            className="creator-info__avatar"
                            src={options.avatar}
                            alt="avatar"
                        />
                        : <span className="creator-info__avatar name">
                            {options.name.firstName[0].toUpperCase()}
                        </span>
                    }
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{
                            fontSize: '12px',
                            height: '100%',
                            color: '#777E90'
                        }}>
                            Creator
                        </div>
                        <div className="creator-info__name">
                            {`${options.name.firstName} ${options.name.secondName}`}
                        </div>
                    </div>
                </div>
                <div className="instant-price">

                </div>
            </div>
        </div>
    )
}

export default BidComponent;