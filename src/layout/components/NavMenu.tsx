import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../pages/home/apis";
import MegaMenu from "./MegaMenu";

const NavMenu = () => {
    const [ResponseCategory, setResponseCategory] = useState<CategoryTypes[]>([]);

    useEffect(() => {
        handleGetCategoryData()
    }, [])

    const handleGetCategoryData = () => {
        getCategory().then(function (res) {
            const response = res.data.data
            setResponseCategory(response)
        }).finally(function () {

        })
    };

    return (
        <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
            <nav>
                <ul>
                    <li className="hot-deals">
                        <img
                            src="/imgs/theme/icons/icon-hot.svg"
                            alt="hot deals"
                        />
                        <Link to={'/list'}>Terpopuler</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Halaman Utama</Link>
                    </li>
                    <li className="position-static">
                        <a href="#">
                            Dijual <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="mega-menu">
                            <MegaMenu
                                Category={ResponseCategory}
                                Image={"https://img.freepik.com/free-photo/housing-crisis-concept-illustrated_23-2151879985.jpg?t=st=1760507319~exp=1760510919~hmac=a3d05d37cbd8a692ade3abaa30733721394e6ef955a29676c56a4ed814e1f54d&w=1480"}
                            />
                        </ul>
                    </li>
                    <li className="position-static">
                        <a href="#">
                            Disewa <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="mega-menu">
                            <MegaMenu
                                Category={ResponseCategory}
                                Image={"https://img.freepik.com/premium-photo/real-estate-sign-front-new-house-sale_488220-64734.jpg?w=1480"}
                            />
                        </ul>
                    </li>
                    <li className="position-static">
                        <a href="#">
                            Property Baru <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="mega-menu">
                            <MegaMenu
                                Category={ResponseCategory}
                                Image={"https://img.freepik.com/free-photo/young-happy-asian-couple-presenting-symbols-house_1150-15923.jpg?t=st=1760507014~exp=1760510614~hmac=82790bc4d180bea1f96176df0126d168924c3fe0b8d21d037bedad50e7af53b4&w=1480"}
                            />
                        </ul>
                    </li>
                    <li>
                        <Link to={'/list'}>Hubungi Kami</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default NavMenu;