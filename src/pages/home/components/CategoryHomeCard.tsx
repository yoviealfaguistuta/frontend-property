import { Link } from "react-router-dom";

type Props = {
    Category: CategoryTypes[]
}

const CategoryHomeCard = (props: Props) => {
    const { Category } = props

    return (
        <section className="popular-categories section-padding">
            <div className="container wow fadeIn animated">
                <div className="section-title">
                    <div className="title">
                        <h3>Kategori </h3>
                    </div>
                    <div
                        className="slider-arrow slider-arrow-2 flex-right carausel-8-columns-arrow"
                        id="carausel-8-columns-arrows"
                    />
                </div>
                <div className="carausel-8-columns-cover position-relative">
                    <div className="row carausel-8-columns" id="carausel-8-columns">
                        {
                            Category && Category.map((item: CategoryTypes, index: number) => {
                                return (
                                    <Link key={index} to={'/list?category_id=' + item.id} className="card-1" style={{ minHeight: '100px', width: 200 }}>
                                        <figure className=" img-hover-scale overflow-hidden">
                                            <a href="">
                                                <img src={item.gambar} alt="" />
                                            </a>
                                        </figure>
                                        <h6>
                                            <a href="">
                                                <p style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{item.nama_kategori}</p>
                                            </a>
                                        </h6>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};
export default CategoryHomeCard;