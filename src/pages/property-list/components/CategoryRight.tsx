import { useEffect, useState } from "react";
import { getCategory } from "../../home/apis";
import { Link } from "react-router-dom";

const CategoryRight = () => {
    const [Response, setResponse] = useState<CategoryTypes[]>([]);

    useEffect(() => {
        handleGetData()
    }, [])

    const handleGetData = () => {
        getCategory().then(function (res) {
            const response = res.data.data
            setResponse(response)
        }).finally(function () {
            
        })
    };

    return (
        <div className="sidebar-widget widget-category-2 mb-30">
            <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                Category
            </h5>
            <ul>
                {
                    Response && Response.map((item: CategoryTypes, index: number) => {
                        return (
                            <li>
                                <Link to={'/list?category_id=' + item.id} key={index}>
                                    {" "}
                                    <img src={item.gambar} alt="" />
                                    {item.nama_kategori}
                                </Link>
                                <span className="count">{item.total_property}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};
export default CategoryRight;