import { useState, type JSX } from "react";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { Link } from "react-router-dom";

type Props = {
    children: JSX.Element | JSX.Element[],
};

const Layout = ({ children }: Props) => {
    const [SearchValue, setSearchValue] = useState<string>();
    return (
        <>
            <Header />
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
                        <strong>3 days</strong> left
                    </span>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a href="">
                                    {/* <img src="/imgs/theme/logo.svg" alt="logo" /> */}
                                    <img style={{ width: '5px !important', minWidth: 5 }} src="/logo.png" alt="logo" />
                                </a>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <form action="#">
                                        {/* <select className="select-active">
                                            <option>All Categories</option>
                                            <option>Milks and Dairies</option>
                                            <option>Wines &amp; Alcohol</option>
                                            <option>Clothing &amp; Beauty</option>
                                            <option>Pet Foods &amp; Toy</option>
                                            <option>Fast food</option>
                                            <option>Baking material</option>
                                            <option>Vegetables</option>
                                            <option>Fresh Seafood</option>
                                            <option>Noodles &amp; Rice </option>
                                            <option>Ice cream</option>
                                        </select> */}
                                        <input onChange={(e) => {
                                            setSearchValue(e.target.value)
                                        }} type="text" placeholder="Cari nama, daerah atau agent" />
                                        <div className="css-ak-wak-wakwg">
                                            <Link to={'/list?search=' + SearchValue}>Telusuri</Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        {/* <div className="search-location">
                                            <form action="#">
                                                <select className="select-active">
                                                    <option>Your Location</option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizona</option>
                                                    <option>Delaware</option>
                                                    <option>Florida</option>
                                                    <option>Georgia</option>
                                                    <option>Hawaii</option>
                                                    <option>Indiana</option>
                                                    <option>Maryland</option>
                                                    <option>Nevada</option>
                                                    <option>New Jersey</option>
                                                    <option>New Mexico</option>
                                                    <option>New York</option>
                                                </select>
                                            </form>
                                        </div> */}
                                        {/* <div className="header-action-icon-2">
                                            <a href="page-account.html">
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/imgs/theme/icons/icon-user.svg"
                                                />
                                            </a>
                                            <span className="lable ml-0">Account</span>
                                        </div> */}
                                        <div className="header-action-icon-2">
                                            <div className="hotline d-none d-lg-flex">
                                                <img
                                                    src="/imgs/theme/icons/icon-headphone.svg"
                                                    alt="hotline"
                                                />
                                                <p>
                                                    0721 4812 482<span>24/7 Support Center</span>
                                                </p>
                                            </div>
                                            {/* <a href="shop-wishlist.html">
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count blue">6</span>
                                            </a>
                                            <span className="lable">Wishlist</span> */}
                                        </div>
                                        <div className="header-action-icon-2">
                                            {/* <a className="mini-cart-icon" href="shop-cart.html">
                                                <img
                                                    alt="Nest"
                                                    src="/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count blue">2</span>
                                            </a>
                                            <span className="lable">Cart</span> */}
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                                <ul>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <a href="shop-product-right.html">
                                                                <img
                                                                    alt="Nest"
                                                                    src="/imgs/shop/thumbnail-3.jpg"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4>
                                                                <a href="shop-product-right.html">
                                                                    Daisy Casual Bag
                                                                </a>
                                                            </h4>
                                                            <h4>
                                                                <span>1 × </span>$800.00
                                                            </h4>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="#">
                                                                <i className="fi-rs-cross-small" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-img">
                                                            <a href="shop-product-right.html">
                                                                <img
                                                                    alt="Nest"
                                                                    src="/imgs/shop/thumbnail-2.jpg"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4>
                                                                <a href="shop-product-right.html">
                                                                    Corduroy Shirts
                                                                </a>
                                                            </h4>
                                                            <h4>
                                                                <span>1 × </span>$3200.00
                                                            </h4>
                                                        </div>
                                                        <div className="shopping-cart-delete">
                                                            <a href="#">
                                                                <i className="fi-rs-cross-small" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-footer">
                                                    <div className="shopping-cart-total">
                                                        <h4>
                                                            Total <span>$4000.00</span>
                                                        </h4>
                                                    </div>
                                                    <div className="shopping-cart-button">
                                                        <a href="shop-cart.html" className="outline">
                                                            View cart
                                                        </a>
                                                        <a href="shop-checkout.html">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <a href="index.html">
                                    <img src="/imgs/theme/logo.svg" alt="logo" />
                                </a>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active " href="#">
                                        <span className="fi-rs-apps" />{" "}
                                        <span className="et">Semua</span> Kategori
                                        <i className="fi-rs-angle-down" />
                                    </a>
                                    <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-1.svg"
                                                            alt=""
                                                        />
                                                        Milks and Dairies
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-2.svg"
                                                            alt=""
                                                        />
                                                        Clothing &amp; beauty
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-3.svg"
                                                            alt=""
                                                        />
                                                        Pet Foods &amp; Toy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-4.svg"
                                                            alt=""
                                                        />
                                                        Baking material
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-5.svg"
                                                            alt=""
                                                        />
                                                        Fresh Fruit
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-6.svg"
                                                            alt=""
                                                        />
                                                        Wines &amp; Drinks
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-7.svg"
                                                            alt=""
                                                        />
                                                        Fresh Seafood
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-8.svg"
                                                            alt=""
                                                        />
                                                        Fast food
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-9.svg"
                                                            alt=""
                                                        />
                                                        Vegetables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html">
                                                        {" "}
                                                        <img
                                                            src="/imgs/theme/icons/category-10.svg"
                                                            alt=""
                                                        />
                                                        Bread and Juice
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="more_slide_open" style={{ display: "none" }}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <a href="shop-grid-right.html">
                                                            {" "}
                                                            <img
                                                                src="/imgs/theme/icons/icon-1.svg"
                                                                alt=""
                                                            />
                                                            Milks and Dairies
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html">
                                                            {" "}
                                                            <img
                                                                src="/imgs/theme/icons/icon-2.svg"
                                                                alt=""
                                                            />
                                                            Clothing &amp; beauty
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <a href="shop-grid-right.html">
                                                            {" "}
                                                            <img
                                                                src="/imgs/theme/icons/icon-3.svg"
                                                                alt=""
                                                            />
                                                            Wines &amp; Drinks
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right.html">
                                                            {" "}
                                                            <img
                                                                src="/imgs/theme/icons/icon-4.svg"
                                                                alt=""
                                                            />
                                                            Fresh Seafood
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            {" "}
                                            <span className="icon" />{" "}
                                            <span className="heading-sm-1">Show more...</span>
                                        </div>
                                    </div>
                                </div>
                                <NavMenu />
                            </div>
                            {/* <div className="hotline d-none d-lg-flex">
                                <img
                                    src="/imgs/theme/icons/icon-headphone.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 888<span>24/7 Support Center</span>
                                </p>
                            </div> */}
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href="shop-wishlist.html">
                                            <img
                                                alt="Nest"
                                                src="/imgs/theme/icons/icon-heart.svg"
                                            />
                                            <span className="pro-count white">4</span>
                                        </a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="shop-cart.html">
                                            <img alt="Nest" src="/imgs/theme/icons/icon-cart.svg" />
                                            <span className="pro-count white">2</span>
                                        </a>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                alt="Nest"
                                                                src="/imgs/shop/thumbnail-3.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <a href="shop-product-right.html">
                                                                Plain Striola Shirts
                                                            </a>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>$800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="#">
                                                            <i className="fi-rs-cross-small" />
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="shop-product-right.html">
                                                            <img
                                                                alt="Nest"
                                                                src="/imgs/shop/thumbnail-4.jpg"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <a href="shop-product-right.html">Macbook Pro 2022</a>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>$3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="#">
                                                            <i className="fi-rs-cross-small" />
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <a href="shop-cart.html">View cart</a>
                                                    <a href="shop-checkout.html">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {children}

            <footer className="main">
                <section className="newsletter wow fadeIn animated mb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20 text-white">
                                            Find Your Dream  <br /> Home Easily
                                        </h2>
                                        {/* <p className="mb-45">
                                            Start Your Property Journey with {" "}
                                            <span className="text-brand">Real Estate App</span>
                                        </p> */}
                                        {/* <form className="form-subcriber d-flex">
                                            <input onChange={(e) => {
                                                setSearchValue(e.target.value)
                                            }} type="text" placeholder="Cari nama, daerah atau agent" />
                                            <div className="css-ak-wak-wakwg">
                                                <Link to={'/list?search=' + SearchValue}>Telusuri</Link>
                                            </div>
                                        </form> */}
                                    </div>
                                    {/* <img src="/imgs/banner/banner-9.png" alt="newsletter" /> */}
                                    {/* <img src="/logo.png" alt="newsletter" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured wow fadeIn animated section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-1.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Aman & Mudah</h3>
                                        {/* <p>Orders $50 or more</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-2.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Jual Properti Cepat</h3>
                                        {/* <p>24/7 amazing services</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-3.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Harga Terjangkau</h3>
                                        {/* <p>When you sign up</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-4.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Mitra Terbaik</h3>
                                        {/* <p>Mega Discounts</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-5.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Bantuan Cepat</h3>
                                        {/* <p>Within 30 days</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                                    <div className="banner-icon">
                                        <img src="/imgs/theme/icons/icon-6.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Safe delivery</h3>
                                        {/* <p>Within 30 days</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                                    <div className="logo wow fadeIn animated mb-30">
                                        <a href="index.html" className="mb-15">
                                            <img style={{ width: 110 }} src="/logo.png" alt="logo" />
                                        </a>
                                        <p className="font-lg text-heading">
                                            Rumah Property adalah situs teknologi jual beli dan sewa properti terdepan di Indonesia
                                        </p>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img src="/imgs/theme/icons/icon-location.svg" alt="" />
                                            <strong>Address: </strong>{" "}
                                            <span>
                                                5171 W Campbell Ave undefined Kent, Utah 53127 United States
                                            </span>
                                        </li>
                                        <li>
                                            <img src="/imgs/theme/icons/icon-contact.svg" alt="" />
                                            <strong>Call Us:</strong>
                                            <span>(+91) - 540-025-124553</span>
                                        </li>
                                        <li>
                                            <img src="/imgs/theme/icons/icon-email-2.svg" alt="" />
                                            <strong>Email:</strong>
                                            <span>
                                                <a
                                                    href="https://demosc.chinaz.net/cdn-cgi/l/email-protection"
                                                    className="__cf_email__"
                                                    data-cfemail="fd8e9c9198bdb3988e89d39e9290"
                                                >
                                                    [email&nbsp;protected]
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <img src="/imgs/theme/icons/icon-clock.svg" alt="" />
                                            <strong>Hours:</strong>
                                            <span>10:00 - 18:00, Mon - Sat</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-link-widget col">
                                <h4 className="widget-title wow fadeIn animated">Company</h4>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Tentang Kami</a>
                                    </li>
                                    <li>
                                        <a href="#">Produk & Layanan</a>
                                    </li>
                                    <li>
                                        <a href="#">Partner</a>
                                    </li>
                                    <li>
                                        <a href="#">Karir</a>
                                    </li>
                                    <li>
                                        <a href="#">Pressroom</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-widget col">
                                <h4 className="widget-title wow fadeIn animated">Layanan</h4>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Iklankan Properti</a>
                                    </li>
                                    <li>
                                        <a href="#">KPR</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-widget col">
                                <h4 className="widget-title wow fadeIn animated">Dukungan</h4>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Kebijakan Privasi</a>
                                    </li>
                                    <li>
                                        <a href="#">Syarat Penggunaan</a>
                                    </li>
                                    <li>
                                        <a href="#">Syarat Penggunaan Agen</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-widget col">
                                <h4 className="widget-title wow fadeIn animated">Hubungi Kami</h4>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">info@rumah123.com</a>
                                    </li>
                                    <li>
                                        <a href="#">+62 21 30496123</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-widget widget-install-app col">
                                <h4 className="widget-title wow fadeIn animated">Install App</h4>
                                <p className="wow fadeIn animated">From App Store or Google Play</p>
                                <div className="download-app wow fadeIn animated">
                                    <a href="#" className="hover-up mb-sm-2 mb-lg-0">
                                        <img
                                            className="active"
                                            src="/imgs/theme/app-store.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="#" className="hover-up mb-sm-2">
                                        <img src="/imgs/theme/google-play.jpg" alt="" />
                                    </a>
                                </div>
                                <p className="mb-20 wow fadeIn animated">
                                    Secured Payment Gateways
                                </p>
                                <img
                                    className="wow fadeIn animated"
                                    src="/imgs/theme/payment-method.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="container pb-30 wow fadeIn animated">
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom" />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                Copyright © 2021.Company name All rights reserved.
                                <a target="_blank" href="https://sc.chinaz.com/moban/">
                                    网页模板
                                </a>
                            </p>
                        </div>
                        <div className="col-xl-4  col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img src="/imgs/theme/icons/phone-call.svg" alt="hotline" />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img src="/imgs/theme/icons/phone-call.svg" alt="hotline" />
                                <p>
                                    1900 - 8888<span>24/7 Support Center</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-6  col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us </h6>
                                <a href="#">
                                    <img
                                        src="/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
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
                                    <img
                                        src="/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>
                </div> */}
            </footer>
        </>
    )
};
export default Layout;