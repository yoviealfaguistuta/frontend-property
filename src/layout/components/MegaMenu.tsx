import { Link } from "react-router-dom";

type Props = {
    Category: CategoryTypes[]
    Image: string
}
const MegaMenu = (props: Props) => {
    const { Category, Image } = props

    return (
        <div className="row">
            <div className="col-8">
                <div className="row">
                    {
                        Category && Category.map((item: CategoryTypes, index: number) => {
                            return (
                                <div key={index} className="col-3">
                                    <div className="css-awkf-wfkw3t3-3">
                                        <Link to={'/list?category_id=' + item.id} className="css-wfk-w-kw-3g3">
                                            {" "}
                                            <img width={32} src={item.gambar} alt="" />
                                            <p>{item.nama_kategori}</p>
                                        </Link>
                                        {/* <span className="count">{index}</span> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-4">
                <li className="sub-mega-menu">
                    <div className="menu-banner-wrap">
                        <a href="shop-product-right.html">
                            <img
                                src={Image}
                                alt="Nest"
                                className="css-awf-kw-g3g"
                            />
                        </a>
                        {/* <div className="menu-banner-content">
                                                <h4>Hot deals</h4>
                                                <h3>
                                                    Don't miss
                                                    <br /> Trending
                                                </h3>
                                                <div className="menu-banner-price">
                                                    <span className="new-price text-success">
                                                        Save to 50%
                                                    </span>
                                                </div>
                                                <div className="menu-banner-btn">
                                                    <a href="shop-product-right.html">Shop now</a>
                                                </div>
                                            </div> */}
                        <div className="menu-banner-discount">
                            <h3>
                                <span>25%</span>
                                off
                            </h3>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    )
};
export default MegaMenu;