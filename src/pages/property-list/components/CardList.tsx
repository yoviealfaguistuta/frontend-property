import { Link } from "react-router-dom";
import { formatUangIndonesia } from "../../../utils/converter";

type Props = {
    item: PropertyListTypes
}

const CardPropertyList = (props: Props) => {
    const { item } = props
    return (
        <div className="col-lg-1-3 col-md-4 col-12 col-sm-6">
            <div className="product-cart-wrap wow fadeIn animated mb-30">
                <div className="product-img-action-wrap" style={{ padding: 0 }}>
                    <div className="product-img product-img-zoom">
                        <Link to={'/detail/' + item.id} >
                            {
                                item.foto_gallery.map((item: string, index: number) => {
                                    return (
                                        <img
                                            key={index}
                                            className="default-img css-ak-gwkg-w3g3"
                                            src={item}
                                            alt=""
                                        />
                                    )
                                })
                            }
                        </Link>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">{item.tipe}</span>
                    </div>
                </div>
                <div className="product-content-wrap mt-20">
                    <h2>
                        <Link to={'/detail/' + item.id}>
                            {item.title}
                        </Link>
                    </h2>
                    <p>
                        {item.kabupaten_kota}, {item.provinsi}
                    </p>
                    <p className="mt-3">
                        {item.deskripsi}
                    </p>
                    <div className="css-awkfw-gew">
                        <div className="css-owf--wegk--2g-w3">
                            <svg color="#000" width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path></svg>
                            <span className="bold text-black">{item.kamar_tidur}</span>
                        </div>
                        <div className="css-owf--wegk--2g-w3">
                            <svg color="#000" width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"></path></svg>
                            <span className="bold text-black">{item.sumber_air}</span>
                        </div>
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
                        <div className="product-price">
                            <span>{formatUangIndonesia(Number(item.harga))} {item.satuan_harga}</span>
                        </div>
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
};
export default CardPropertyList;