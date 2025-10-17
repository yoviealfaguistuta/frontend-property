import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TableShimmer from "../../components/TableShimmer";
import Layout from "../../layout";
import { getProperty } from "./apis";
import CardPropertyList from "./components/CardList";
import CategoryRight from "./components/CategoryRight";

const PropertyList = () => {
    const [searchParams] = useSearchParams();
    const [Response, setResponse] = useState<PropertyListTypes[]>([]);
    const [IsLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        handleGetProperty()
    }, [searchParams])

    const handleGetProperty = () => {
        // const categoryId = searchParams.get("category_id")
        const params = {
            id_kategori: searchParams.get("category_id"),
            search: searchParams.get("search"),
            agent_id: searchParams.get("agent_id")
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
        <Layout>
            <main className="main">
                {/* <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">Snack</h1>
                                    <div className="breadcrumb">
                                        <a href="index.html" rel="nofollow">
                                            <i className="fi-rs-home mr-5" />
                                            Home
                                        </a>
                                        <span /> Shop
                                        <span /> Snack
                                    </div>
                                </div>
                                <div className="col-xl-9 text-end d-none d-xl-block">
                                    <ul className="tags-list">
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html">
                                                <i className="fi-rs-cross mr-10" />
                                                Cabbage
                                            </a>
                                        </li>
                                        <li className="hover-up active">
                                            <a href="blog-category-grid.html">
                                                <i className="fi-rs-cross mr-10" />
                                                Broccoli
                                            </a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html">
                                                <i className="fi-rs-cross mr-10" />
                                                Artichoke
                                            </a>
                                        </li>
                                        <li className="hover-up">
                                            <a href="blog-category-grid.html">
                                                <i className="fi-rs-cross mr-10" />
                                                Celery
                                            </a>
                                        </li>
                                        <li className="hover-up mr-0">
                                            <a href="blog-category-grid.html">
                                                <i className="fi-rs-cross mr-10" />
                                                Spinach
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container mb-30 mt-10">
                    <div className="row">
                        <div className="col-lg-4-5">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>
                                        We found <strong className="text-brand">29</strong> items for you!
                                    </p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div className="sort-by-cover mr-10">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span>
                                                    <i className="fi-rs-apps" />
                                                    Show:
                                                </span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span>
                                                    {" "}
                                                    50 <i className="fi-rs-angle-small-down" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li>
                                                    <a className="active" href="#">
                                                        50
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">100</a>
                                                </li>
                                                <li>
                                                    <a href="#">150</a>
                                                </li>
                                                <li>
                                                    <a href="#">200</a>
                                                </li>
                                                <li>
                                                    <a href="#">All</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sort-by-cover">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span>
                                                    <i className="fi-rs-apps-sort" />
                                                    Sort by:
                                                </span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span>
                                                    {" "}
                                                    Featured <i className="fi-rs-angle-small-down" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li>
                                                    <a className="active" href="#">
                                                        Featured
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Price: Low to High</a>
                                                </li>
                                                <li>
                                                    <a href="#">Price: High to Low</a>
                                                </li>
                                                <li>
                                                    <a href="#">Release Date</a>
                                                </li>
                                                <li>
                                                    <a href="#">Avg. Rating</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                !IsLoading ?
                                    <div className="row product-grid">
                                        {
                                            Response && Response.map((item: PropertyListTypes, index: number) => {
                                                return (
                                                    <CardPropertyList item={item} key={index} />
                                                )
                                            })
                                        }
                                    </div> : <TableShimmer />
                            }

                            {/*product grid*/}
                            <div className="pagination-area mt-20 mb-20">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fi-rs-arrow-small-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link dot" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                6
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fi-rs-arrow-small-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1-5 primary-sidebar sticky-element">
                            <CategoryRight />
                            {/* Fillter By Price */}
                            {/* Product sidebar Widget */}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
};
export default PropertyList;