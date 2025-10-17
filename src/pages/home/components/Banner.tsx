import { useState } from "react";
import { Link } from "react-router-dom";

const BannerHome = () => {
    const [FormSearch, setFormSearch] = useState<string>('');

    return (
        <section className="home-slider position-relative mb-30">
            <div className="containesr">
                <div className="home-slide-cover">
                    <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                        <div
                            className="single-hero-slider single-hero-slider-transparant single-animation-wrap"
                            style={{
                                backgroundImage: "url(../banner-bt.jpg)"
                                // backgroundImage: "url(/imgs/slider/slider-1.png)"
                            }}
                        >
                            <div className="slider-content">
                                <h1 className="display-2 mb-10 text-white">
                                    Your Next Home Awaits You
                                </h1>
                                <p className="mb-65 text-white">Start Finding Perfect Property with Ease and Confidence</p>
                                <form className="form-subcriber d-flex">
                                    <input type="text" onChange={(e) => {
                                        setFormSearch(e.target.value)
                                    }} placeholder="Cari nama, daerah atau agent" />
                                    <Link to={'/list?search=' + FormSearch} className="btn css--wfk-gkwg3we" type="submit">
                                        Telusuri
                                    </Link>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="slider-arrow hero-slider-1-arrow" />
                </div>
            </div>
        </section>
    )
};
export default BannerHome;