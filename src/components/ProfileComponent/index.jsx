import './index.scss'

const ProfileComponent = ({avatar, topName, topNameStyle, bottomName, bottomNameStyle}) => {
    if (typeof topNameStyle !== 'object') topNameStyle = {}
    if (typeof bottomNameStyle !== 'object') bottomNameStyle = {}
    return (
        <div className="profile-info">
            {avatar
                ? <img
                    className="profile-info__avatar"
                    src={avatar}
                    alt="avatar"
                />
                : <span className="profile-info__avatar name">
                    {topName[0].toUpperCase()}
                </span>
            }
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: "10px"}}>
                <div className="profile-info__name" style={topNameStyle}>{topName}</div>
                <div className="bottom-info__text" style={bottomNameStyle}>
                    {bottomName}
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;