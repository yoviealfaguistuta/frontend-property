import { Link } from "react-router-dom";
import { getProperty } from "../../property-list/apis";
import { useEffect, useState } from "react";
import { formatUangIndonesia } from "../../../utils/converter";
import TableShimmer from "../../../components/TableShimmer";

type Props = {
    Category: CategoryTypes[]
}

const RecomendationProperty = (props: Props) => {
    const { Category } = props
    const [Response, setResponse] = useState<PropertyListTypes[]>([]);
    const [IsLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        handleGetData()
    }, [])

    const handleGetData = () => {
        const params = {
            recomndation: true,
            limit: 10
        }

        setIsLoading(true)
        getProperty(params).then(function (res) {
            console.log('res', res)
            const response = res.data.data
            setResponse(response)
        }).finally(function () {
            setIsLoading(false)
        })
    };

    return (
        <section className="product-tabs section-padding position-relative wow fadeIn animated">
            <div className="container">
                <div className="section-title style-2">
                    <h3>Rekomendasi Sesuai Pencarianmu</h3>
                    <ul className="nav nav-tabs links" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="nav-tab-one"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-one"
                                type="button"
                                role="tab"
                                aria-controls="tab-one"
                                aria-selected="true"
                            >
                                Semua
                            </button>
                        </li>
                        {
                            Category.map((item: CategoryTypes, index: number) => {
                                return (
                                    <li key={index} className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="nav-tab-two"
                                            data-bs-toggle="tab"
                                            data-bs-target="#tab-two"
                                            type="button"
                                            role="tab"
                                            aria-controls="tab-two"
                                            aria-selected="false"
                                        >
                                            {item.nama_kategori}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*End nav-tabs*/}
                <div className="tab-content wow fadeIn animated" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="tab-one"
                        role="tabpanel"
                        aria-labelledby="tab-one"
                    >
                        <div className="row product-grid-4">
                            {
                                !IsLoading ?
                                    Response && Response.map((item: PropertyListTypes, index: number) => {
                                        return (
                                            <div key={index} className="col-lg-1-5 col-md-6 col-12 col-sm-6">
                                                <div className="product-cart-wrap mb-30">
                                                    <div className="product-img-action-wrap" style={{ padding: 0 }}>
                                                        <div className="product-img product-img-zoom">
                                                            <Link to={'/detail/' + item.id} >
                                                                <img
                                                                    className="default-img css-kf-kg-w3-gk2w"
                                                                    src={item.foto_gallery[0]}
                                                                    alt=""
                                                                />
                                                                {
                                                                    item.foto_gallery.length > 0 ?
                                                                        <img
                                                                            className="hover-img css-kf-kg-w3-gk2w"
                                                                            src={item.foto_gallery[1]}
                                                                            alt=""
                                                                        /> : null
                                                                }

                                                            </Link>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">{item.tipe}</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap" style={{ marginTop: 20 }}>
                                                        <div className="product-category">
                                                            {/* <a href="shop-grid-right.html">Snack</a> */}
                                                        </div>
                                                        <div className="product-price mb-2">
                                                            <span>{formatUangIndonesia(Number(item.harga))} {item.satuan_harga}</span>
                                                            {/* <span className="old-price">$32.8</span> */}
                                                        </div>
                                                        <h2>
                                                            <Link to={'/detail/' + item.id} >
                                                                {item.title}
                                                            </Link>
                                                        </h2>
                                                        <div className="product-rate-cover">
                                                            <div className="product-rate d-inline-block">
                                                                <div
                                                                    className="product-rating"
                                                                    style={{ width: "90%" }}
                                                                ></div>
                                                            </div>
                                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-small text-muted">{item.kabupaten_kota}, {item.provinsi}</span>
                                                        </div>
                                                        <div className="css-awkfw-gew">
                                                            <div className="css-owf--wegk--2g-w3">
                                                                <svg color="#000" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path></svg>
                                                                <span className="bold text-black">{item.kamar_tidur}</span>
                                                            </div>
                                                            {/* <div className="css-owf--wegk--2g-w3">
                                                            <svg color="#000" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"></path></svg>
                                                            <span className="bold text-black">{item.sumber_air}</span>
                                                        </div> */}
                                                            <div className="css-owf--wegk--2g-w3">
                                                                <svg color="#000" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 18L2 6H4L4 18H2ZM9.44975 7.05025L4.5 12L9.44727 16.9473L10.8615 15.5331L8.32843 13H15.6708L13.1358 15.535L14.55 16.9492L19.5 11.9995L14.5503 7.04976L13.136 8.46398L15.6721 11H8.32843L10.864 8.46447L9.44975 7.05025ZM20 6H22V18H20V6Z"></path></svg>
                                                                <span className="bold text-black">{item.luas_tanah} m2</span>
                                                            </div>
                                                            <div className="css-owf--wegk--2g-w3">
                                                                <svg color="#000" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z"></path></svg>
                                                                <span className="bold text-black">{item.jumlah_lantai}</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-card-bottom">

                                                            <div className="add-cart">
                                                                <Link to={'/detail/' + item.id} className="add">
                                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                                    Detail{" "}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : <TableShimmer />
                            }
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab one*/}
                    <div
                        className="tab-pane fade"
                        id="tab-two"
                        role="tabpanel"
                        aria-labelledby="tab-two"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-12-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-12-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-13-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-13-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-14-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-14-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-15-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-15-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-16-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-16-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab two*/}
                    <div
                        className="tab-pane fade"
                        id="tab-three"
                        role="tabpanel"
                        aria-labelledby="tab-three"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-6-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-6-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-5-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-5-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-4-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-4-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-3-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-3-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-2-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-2-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-1-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-1-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab three*/}
                    <div
                        className="tab-pane fade"
                        id="tab-four"
                        role="tabpanel"
                        aria-labelledby="tab-four"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-6-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-6-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-4-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-4-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-3-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-3-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-2-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-2-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-1-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-1-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-11-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-11-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-12-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-12-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab four*/}
                    <div
                        className="tab-pane fade"
                        id="tab-five"
                        role="tabpanel"
                        aria-labelledby="tab-five"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-12-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-12-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-13-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-13-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-14-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-14-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-15-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-15-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-16-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-16-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-5-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-5-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab five*/}
                    <div
                        className="tab-pane fade"
                        id="tab-six"
                        role="tabpanel"
                        aria-labelledby="tab-six"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-4-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-4-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-6-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-6-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-5-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-5-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-6-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-6-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab six*/}
                    <div
                        className="tab-pane fade"
                        id="tab-seven"
                        role="tabpanel"
                        aria-labelledby="tab-seven"
                    >
                        <div className="row product-grid-4">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-5-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-5-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$28.85</span>
                                                <span className="old-price">$32.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-3-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-3-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                All Natural Italian-Style Chicken Meatballs
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.5)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">60g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$52.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="new">New</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "85%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">70g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$48.85</span>
                                                <span className="old-price">$52.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Foster Farms Takeout Crispy Classic Buffalo Wings
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$17.85</span>
                                                <span className="old-price">$19.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="best">-14%</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Blue Diamond Almonds Lightly Salted Vegetables
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-16-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-16-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Chobani Complete Vanilla Greek Yogurt
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$54.85</span>
                                                <span className="old-price">$55.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-7-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-7-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-8-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-8-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Encore Seafoods Stuffed Alaskan Salmon
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">500g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$35.85</span>
                                                <span className="old-price">$37.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-9-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-9-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Gorton’s Beer Battered Fish Fillets with soft paper
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">400g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$23.85</span>
                                                <span className="old-price">$25.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div className="product-cart-wrap">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img
                                                    className="default-img"
                                                    src="/imgs/shop/product-10-1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="hover-img"
                                                    src="/imgs/shop/product-10-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a
                                                aria-label="Add To Wishlist"
                                                className="action-btn"
                                                href="shop-wishlist.html"
                                            >
                                                <i className="fi-rs-heart" />
                                            </a>
                                            <a
                                                aria-label="Compare"
                                                className="action-btn"
                                                href="shop-compare.html"
                                            >
                                                <i className="fi-rs-shuffle" />
                                            </a>
                                            <a
                                                aria-label="Quick view"
                                                className="action-btn"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i className="fi-rs-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2>
                                            <a href="shop-product-right.html">
                                                Haagen-Dazs Caramel Cone Ice Cream Ketchup
                                            </a>
                                        </h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "50%" }}
                                                ></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (2.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">100g</span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$22.85</span>
                                                <span className="old-price">$24.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html">
                                                    <i className="fi-rs-shopping-cart mr-5" />
                                                    Add{" "}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end product card*/}
                        </div>
                        {/*End product-grid-4*/}
                    </div>
                    {/*En tab seven*/}
                </div>
                {/*End tab-content*/}
            </div>
        </section>
    )
};
export default RecomendationProperty;