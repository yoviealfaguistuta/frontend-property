import { useEffect, useState } from "react";
import { getCategoryPropertyList } from "../apis";
import { Link } from "react-router-dom";
import { formatUangIndonesia } from "../../../utils/converter";
import TableShimmer from "../../../components/TableShimmer";

const CategoryWithProperty = () => {
    const [Response, setResponse] = useState<CategoryPropertyTypes[]>([]);
    const [IsLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        handleGetCategoryProperty()
    }, [])

    const handleGetCategoryProperty = () => {
        setIsLoading(true)
        getCategoryPropertyList().then(function (res) {
            const response = res.data.data
            setResponse(response)
        }).finally(function () {
            setIsLoading(false)
        })
    };

    return (
        <section className="section-padding mb-30">
            <div className="container">
                <div className="row">
                    {
                        !IsLoading ?
                        Response && Response.map((item: CategoryPropertyTypes, index: number) => {
                            return (
                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0">
                                    <h4 className="section-title style-1 mb-30 wow fadeIn animated animated animated">
                                        {item.nama_kategori}
                                    </h4>
                                    <div className="product-list-small wow fadeIn animated animated animated">
                                        {
                                            item.property.map((item: CategoryPropertyDetailTypes, index: number) => {
                                                return (
                                                    <article key={index} className="row align-items-center hover-up">
                                                        <figure className="col-md-4 mb-0">
                                                            <Link to={'/detail/' + item.id}>
                                                                <img className="cssa-w0ewgk0we03g" src={item.foto_gallery[1]} alt="" />
                                                            </Link>
                                                        </figure>
                                                        <div className="col-md-8 mb-0">
                                                            <h6>
                                                            <Link to={'/detail/' + item.id}>
                                                                    {item.title}
                                                                </Link>
                                                            </h6>
                                                            {/* <div className="product-rate-cover">
                                                                <div className="product-rate d-inline-block">
                                                                    <div
                                                                        className="product-rating"
                                                                        style={{ width: "90%" }}
                                                                    ></div>
                                                                </div>
                                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                            </div> */}
                                                            <div className="product-price">
                                                                <span>{formatUangIndonesia(Number(item.harga))} {item.satuan_harga}</span>
                                                            </div>
                                                        </div>
                                                    </article>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }) : <TableShimmer />
                    }
                </div>
            </div>
        </section>
    )
};
export default CategoryWithProperty;