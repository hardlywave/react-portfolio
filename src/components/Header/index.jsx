import './index.scss';
import logoSvg from "../../assets/logo.svg";
import notificationSvg from "../../assets/notification.svg";
import searchIconSvg from "../../assets/search-icon.svg";
import i18n from "../../i18n";
import { useMediaQuery } from 'react-responsive';

const Header = ({ options }) => {
    const { t } = i18n;
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const headerMainMobileStyle = {
        height: "100%",
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
        width: "unset",
    }

    const isSmallWindow = useMediaQuery({ query: `(max-width: 1080px)` });

    return (
        <div className="header" style={isMobile ? headerMainMobileStyle : {}}>
            <div className="header__left-content" style={isMobile ? {justifyContent: "unset",} : {}}>
                <img src={logoSvg} className="logo-svg" alt="logo" />
                <span className="logo-name">{t('header.logo_name')}</span>
                {
                    !isMobile && !isSmallWindow ?
                        (
                            <>
                                <div className="vertical-line"/>
                                <button className="header__button discover">{t('header.discover')}</button>
                                <button className="header__button work-info">{t('header.work_info')}</button>
                            </>
                        )
                    : ""
                }
            </div>
            <div className="header__right-content" style={isMobile ? {flexDirection: "column", margin: 0, alignItems: "unset",} : {}}>
                <div className="header__input-container" style={isMobile ? {margin: "15px 0 15px 0"} : {}}>
                    <input
                        className="input__search"
                        maxLength={20}
                        placeholder={t('header.search')}
                    />
                    <button className="header__button" style={{margin: 0}}>
                        <img src={searchIconSvg} className="search-svg" alt="search" />
                    </button>
                    <button className="header__button notification" style={{marginLeft: "50px", position: "relative", top: "-5px"}}>
                        { options.notification.length !== 0 && <div className="notification-status"/> }
                        <img src={notificationSvg} className="notification-svg" alt="notification" />
                    </button>
                </div>
                <button className="header__button upload" style={isMobile ? {flexDirection: "row",margin: "0 0 20px 0", alignItems: "unset",} : {}}>{t('header.upload')}</button>
                <button className="header__button wallet" style={isMobile ? {flexDirection: "row", margin: 0, alignItems: "unset",} : {}}>{t('header.wallet')}</button>
            </div>
        </div>
    );
}

export default Header;
