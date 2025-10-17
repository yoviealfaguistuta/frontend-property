import { useEffect, useState } from "react";
import { getProperty } from "../../property-list/apis";
import { formatUangIndonesia } from "../../../utils/converter";
import TableShimmer from "../../../components/TableShimmer";
import { Link } from "react-router-dom";

const PopularProperty = () => {
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [Response, setResponse] = useState<PropertyListTypes[]>([]);

    useEffect(() => {
        handleGetData()
    }, [])

    const handleGetData = () => {
        const params = {
            popular: true
        }

        setIsLoading(true)
        getProperty(params).then(function (res) {
            const response = res.data.data
            setResponse(response)
        }).finally(function () {
            setIsLoading(false)
        })
    };

    return (
        <section className="section-padding pb-5">
            <div className="container">
                <div className="section-title">
                    <h3 className="">Properti Terpopuler</h3>
                </div>
                <div className="row">
                    {/* <div className="col-lg-3 d-none d-lg-flex">
                        <div className="banner-img style-2 wow fadeIn animated">
                            <div className="banner-text">
                                <h2 className="mb-100">Invest Smart, Live Better</h2>
                                <a href="shop-grid-right.html" className="btn btn-xs">
                                    Pesan Sekarang <i className="fi-rs-arrow-small-right" />
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12">
                        <div
                            className="row tab-content wow fadeIn animated"
                            id="myTabContent-1"
                        >
                            {
                                !IsLoading ?
                                    Response && Response.map((item: PropertyListTypes, index: number) => {

                                        if (index > 3) {
                                            return
                                        }

                                        return (
                                            <div
                                                key={index}
                                                className="col-md-3 tab-pane fade show active"
                                                id="tab-one-1"
                                                role="tabpanel"
                                                aria-labelledby="tab-one-1"
                                            >
                                                <div className="carausel-4-columns-cover arrow-center position-relative">
                                                    <div
                                                        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                                        id="carausel-4-columns-arrows"
                                                    />
                                                    <div
                                                        className="gap-2 carausel-arrow-center"
                                                        id="carausel-4-columns"
                                                    >
                                                        <div className="product-cart-wrap">
                                                            <div className="product-img-action-wrap" style={{ padding: 0, maxHeight: 230, height: 230 }}>
                                                                <div className="product-img product-img-zoom">
                                                                    <Link to={'/detail/' + item.id}>
                                                                        <img
                                                                            style={{ height: 230 }}
                                                                            className="default-img"
                                                                            src={item.foto_gallery[0]}
                                                                            alt=""
                                                                        />
                                                                        <img
                                                                            className="hover-img"
                                                                            src="/house-4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                                    <span className="hot">{item.tipe}</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-content-wrap" style={{ marginTop: 30 }}>
                                                                <h2>
                                                                    <Link to={'/detail/' + item.id}>
                                                                        {item.title}
                                                                    </Link>
                                                                </h2>
                                                                <div className="product-category">
                                                                    <Link to={'/detail/' + item.id}>{item.kabupaten_kota}, {item.provinsi}</Link>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ width: "80%" }}
                                                                    ></div>
                                                                </div>
                                                                <div className="product-price mt-10">
                                                                    <span>{formatUangIndonesia(Number(item.harga))} {item.satuan_harga}</span>
                                                                </div>
                                                                <div className="sold mt-15 mb-15">
                                                                    {/* <div className="progress mb-5">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "50%" }}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div> */}
                                                                    {/* <span className="font-xs text-heading">
                                                                    {" "}
                                                                    Terjual: 90/120
                                                                </span> */}
                                                                </div>
                                                                {/* <a href="shop-cart.html" className="btn w-100 hover-up">
                                                                <i className="fi-rs-shopping-cart mr-5" />
                                                                Selengkapnya
                                                            </a> */}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : <TableShimmer />
                            }
                            {/*End tab-pane*/}

                        </div>
                        {/*End tab-content*/}
                    </div>
                    {/*End Col-lg-9*/}
                </div>
            </div>
        </section>
    )
};
export default PopularProperty;