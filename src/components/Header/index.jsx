import './index.scss';
import logoSvg from "../../assets/logo.svg";
import notificationSvg from "../../assets/notification.svg";
import searchIconSvg from "../../assets/search-icon.svg";
import i18n from "../../i18n";

const Header = ({ options }) => {
    const { t } = i18n;
    return (
        <div className="header">
            <div className="header__left-content">
                <img src={logoSvg} className="logo-svg" alt="logo" />
                <span className="logo-name">{t('header.logo_name')}</span>
                <div className="vertical-line"/>
                <button className="header__button discover">{t('header.discover')}</button>
                <button className="header__button work-info">{t('header.work_info')}</button>
            </div>
            <div className="header__right-content">
                <div className="header__input-container">
                    <input
                        className="input__search"
                        maxLength={20}
                        placeholder={t('header.search')}
                    />
                    <button className="header__button">
                        <img src={searchIconSvg} className="search-svg" alt="search" />
                    </button>
                </div>
                <button className="header__button notification">
                    { options.notification.length !== 0 && <div className="notification-status"/> }
                    <img src={notificationSvg} className="notification-svg" alt="notification" />
                </button>
                <button className="header__button upload">{t('header.upload')}</button>
                <button className="header__button wallet">{t('header.wallet')}</button>
            </div>
        </div>
    );
}

export default Header;
