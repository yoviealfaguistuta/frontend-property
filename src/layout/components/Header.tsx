import MobileMenu from "./MobileMenu";

const Header = () => {
    return (
        <div className="mobile-header-active mobile-header-wrapper-style">
            <div className="mobile-header-wrapper-inner">
                <div className="mobile-header-top">
                    <div className="mobile-header-logo">
                        <a href="index.html">
                            <img src="/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                        <button className="close-style search-close">
                            <i className="icon-top" />
                            <i className="icon-bottom" />
                        </button>
                    </div>
                </div>
                <div className="mobile-header-content-area">
                    <div className="mobile-search search-style-3 mobile-header-border">
                        <form action="#">
                            <input type="text" placeholder="Search for items…" />
                            <button type="submit">
                                <i className="fi-rs-search" />
                            </button>
                        </form>
                    </div>
                    <MobileMenu />
                    <div className="mobile-header-info-wrap">
                        {/* <div className="single-mobile-header-info">
                            <a href="page-contact.html">
                                <i className="fi-rs-marker" /> Our location{" "}
                            </a>
                        </div> */}
                        <div className="single-mobile-header-info">
                            <a href="page-login.html">
                                <i className="fi-rs-user" />
                                Log In / Sign Up{" "}
                            </a>
                        </div>
                        <div className="single-mobile-header-info">
                            <a href="#">
                                <i className="fi-rs-headphones" />
                                (+01) - 2345 - 6789{" "}
                            </a>
                        </div>
                    </div>
                    <div className="mobile-social-icon mb-50">
                        <h6 className="mb-15">Follow Us</h6>
                        <a href="#">
                            <img src="/imgs/theme/icons/icon-facebook-white.svg" alt="" />
                        </a>
                        <a href="#">
                            <img src="/imgs/theme/icons/icon-twitter-white.svg" alt="" />
                        </a>
                        <a href="#">
                            <img
                                src="/imgs/theme/icons/icon-instagram-white.svg"
                                alt=""
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/imgs/theme/icons/icon-pinterest-white.svg"
                                alt=""
                            />
                        </a>
                        <a href="#">
                            <img src="/imgs/theme/icons/icon-youtube-white.svg" alt="" />
                        </a>
                    </div>
                    <div className="site-copyright">
                        {" "}
                        Copyright 2021 © Nest. All rights reserved. Powered by AliThemes.
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;