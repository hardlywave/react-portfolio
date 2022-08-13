import './index.scss'
import i18n from "../../i18n";
import logoSvg from "../../assets/logo.svg";
import rightArrowSvg from "../../assets/auction-right-arrow.svg";
import { useMediaQuery } from 'react-responsive';


const Footer = () => {
    const { t } = i18n;
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return(
        <div className="footer-component">
            <div className="footer-component-container">
                <div className="footer-component-container-top" style={ isMobile ? {flexDirection: "column"} : {}}>
                    <div className="container-logo">
                        <div className="logo-description-top">
                            <img src={logoSvg} className="logo-svg" alt="logo" />
                            <span className="logo-name">{t('header.logo_name')}</span>
                        </div>
                        <div className="logo-description-bottom">
                            {t('auction.creative_economy')}
                        </div>
                    </div>
                    <div className="container-stacks" style={ isMobile ? {marginBottom: "30px", paddingBottom: "10px", borderBottom: "#353945 solid 1px"} : {}}>
                        <h5 className="stacks title">
                            {t('footer.stacks.title')}
                        </h5>
                        <button className="stacks-button discover">
                            {t('footer.stacks.discover')}
                        </button>
                        <button className="stacks-button connector">
                            {t('footer.stacks.connect_wallet')}
                        </button>
                        <button className="stacks-button creator">
                            {t('footer.stacks.create_item')}
                        </button>
                    </div>
                    <div className="container-info"
                         style={ isMobile ? {marginBottom: "30px", paddingBottom: "10px", borderBottom: "#353945 solid 1px"} : {}}
                    >
                        <h5 className="info title">
                            {t('footer.info.title')}
                        </h5>
                        <button className="info-button download">
                            {t('footer.info.download')}
                        </button>
                        <button className="info-button demos">
                            {t('footer.info.demos')}
                        </button>
                        <button className="info-button support">
                            {t('footer.info.support')}
                        </button>
                    </div>
                    <div className="container-subscribing">
                        <h5 className="subscribing title">
                            {t('footer.subscribing.title')}
                        </h5>
                        <div className="subscribing-description">
                            {t('footer.subscribing.description')}
                        </div>
                        <div className="subscribing-input-container">
                            <input
                                className="input-subscribing"
                                type="email"
                                maxLength={40}
                                placeholder={t('footer.subscribing.input_placeholder')}
                            />
                            <button className="subscribing-button">
                                <img src={rightArrowSvg} className="search-svg" alt="search" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer-component-container-bottom" style={isMobile ? {flexDirection: "column"} : {}}>
                    <div className="bottom-copyright-description" style={isMobile ? {marginBottom: "20px"} : {}}>
                        {t('footer.copyright')}
                    </div>
                    <div className="bottom-cookies-description">
                        <div className="bottom-cookies-text">
                            {t('footer.cookies_service')}
                        </div>
                        <button className="bottom-button-accept">
                            {t('footer.accept')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;