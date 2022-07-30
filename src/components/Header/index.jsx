import './index.scss';
import logoSvg from "../../assets/logo.svg";
import notificationSvg from "../../assets/notification.svg";
import searchIconSvg from "../../assets/search-icon.svg";

const Header = ({options}) => {
    return (
        <div className="header">
            <div className="header__left-content">
                <img src={logoSvg} className="logo-svg" alt="logo" />
                <span className="logo-name">{options.logoName}</span>
                <div className="vertical-line"/>
                <button className="header__button discover">{options.discoverButton}</button>
                <button className="header__button work-info">{options.workInfoButton}</button>
            </div>
            <div className="header__right-content">
                <div className="header__input-container">
                    <input
                        className="input__search"
                        maxLength={20}
                        placeholder={options.searchHolder}
                    />
                    <button className="header__button">
                        <img src={searchIconSvg} className="search-svg" alt="search" />
                    </button>
                </div>
                <button className="header__button notification">
                    { options.notification.length !== 0 && <div className="notification-status"/> }
                    <img src={notificationSvg} className="notification-svg" alt="notification" />
                </button>
                <button className="header__button upload">{options.uploadButton}</button>
                <button className="header__button wallet">{options.walletButton}</button>
            </div>
        </div>
    );
}

export default Header;
