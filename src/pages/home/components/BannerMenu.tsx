const BannerMenu = () => {
    return (
        <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow fadeIn animated">
                            <img src="/imgs/banner/banner-1.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    Berbagai properti <br />
                                    yang bisa kamu pilih
                                    <br /> Dimanapun
                                </h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">
                                    Cari Properti <i className="fi-rs-arrow-small-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow fadeIn animated">
                            <img src="/imgs/banner/banner-2.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    Jelajahi Agent
                                    <br /> Terbaik Kami
                                </h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">
                                    Shop Now <i className="fi-rs-arrow-small-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div className="banner-img wow fadeIn animated  mb-sm-0">
                            <img src="/imgs/banner/banner-3.png" alt="" />
                            <div className="banner-text">
                                <h4>
                                    The best Organic <br />
                                    Products Online
                                </h4>
                                <a href="shop-grid-right.html" className="btn btn-xs">
                                    Shop Now <i className="fi-rs-arrow-small-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default BannerMenu;