
import { useEffect, useState } from 'react'
import Layout from '../../layout/index'
import { getCategory } from './apis'
import ListAgents from './components/Agents'
import BannerHome from './components/Banner'
import CategoryHomeCard from './components/CategoryHomeCard'
import CategoryWithProperty from './components/CategoryWithProperty'
import PopularProperty from './components/PopularProperty'
import RecomendationProperty from './components/RecomendationProperty'


function Home() {

	// const kategori: CategoryTypes[] = [
	// 	{
	// 		title: 'Rumah',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/602/602271.png'
	// 	},
	// 	{
	// 		title: 'Tanah',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/8055/8055560.png'
	// 	},
	// 	{
	// 		title: 'Apartemen',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/602/602211.png'
	// 	},
	// 	{
	// 		title: 'Ruko',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/869/869636.png'
	// 	},
	// 	{
	// 		title: 'Perkantoran',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/2703/2703312.png'
	// 	},
	// 	{
	// 		title: 'Gudang',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/1350/1350237.png'
	// 	},
	// 	{
	// 		title: 'Ruang Usaha',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/2275/2275973.png'
	// 	},
	// 	{
	// 		title: 'Pabrik',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/1293/1293447.png'
	// 	},
	// 	{
	// 		title: 'Hotel',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/422/422920.png'
	// 	},
	// 	{
	// 		title: 'Kost',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/12218/12218356.png'
	// 	},
	// 	{
	// 		title: 'Villa',
	// 		image: 'https://cdn-icons-png.flaticon.com/512/4614/4614737.png'
	// 	},
	// ]
	const [CategoryLoading, setCategoryLoading] = useState<boolean>(false);
	const [ResponseCategory, setResponseCategory] = useState<CategoryTypes[]>([]);

	useEffect(() => {
		window.scrollTo(0, 0)
		handleGetCategoryData()
	}, [])

	const handleGetCategoryData = () => {
		setCategoryLoading(true)
		getCategory().then(function (res) {
			const response = res.data.data
			setResponseCategory(response)
		}).finally(function () {
			setCategoryLoading(false)
		})
	};

	return (
		<>
			<>
				<div
					className="modal fade custom-modal"
					id="quickViewModal"
					tabIndex={-1}
					aria-labelledby="quickViewModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
							<div className="modal-body">
								<div className="row">
									<div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
										<div className="detail-gallery">
											<span className="zoom-icon">
												<i className="fi-rs-search" />
											</span>
											{/* MAIN SLIDES */}
											<div className="product-image-slider">
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-2.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-1.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-3.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-4.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-5.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-6.jpg"
														alt="product image"
													/>
												</figure>
												<figure className="border-radius-10">
													<img
														src="/imgs/shop/product-16-7.jpg"
														alt="product image"
													/>
												</figure>
											</div>
											{/* THUMBNAILS */}
											<div className="slider-nav-thumbnails">
												<div>
													<img
														src="/imgs/shop/thumbnail-3.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-4.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-5.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-6.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-7.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-8.jpg"
														alt="product image"
													/>
												</div>
												<div>
													<img
														src="/imgs/shop/thumbnail-9.jpg"
														alt="product image"
													/>
												</div>
											</div>
										</div>
										{/* End Gallery */}
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="detail-info pr-30 pl-30">
											<span className="stock-status out-stock">Sale Off</span>
											<h3 className="title-detail">
												<a href="shop-product-right.html" className="text-heading">
													Seeds of Change Organic Quinoa, Brown
												</a>
											</h3>
											<div className="product-detail-rating">
												<div className="product-rate-cover text-end">
													<div className="product-rate d-inline-block">
														<div
															className="product-rating"
															style={{ width: "90%" }}
														></div>
													</div>
													<span className="font-small ml-5 text-muted">
														{" "}
														(32 reviews)
													</span>
												</div>
											</div>
											<div className="clearfix product-price-cover">
												<div className="product-price primary-color float-left">
													<span className="current-price text-brand">$38</span>
													<span>
														<span className="save-price  font-md color3 ml-15">
															26% Off
														</span>
														<span className="old-price font-md ml-15">$52</span>
													</span>
												</div>
											</div>
											<div className="detail-extralink mb-30">
												<div className="detail-qty border radius">
													<a href="#" className="qty-down">
														<i className="fi-rs-angle-small-down" />
													</a>
													<span className="qty-val">1</span>
													<a href="#" className="qty-up">
														<i className="fi-rs-angle-small-up" />
													</a>
												</div>
												<div className="product-extra-link2">
													<button type="submit" className="button button-add-to-cart">
														<i className="fi-rs-shopping-cart" />
														Add to cart
													</button>
												</div>
											</div>
											<div className="font-xs">
												<ul>
													<li className="mb-5">
														Vendor: <span className="text-brand">Nest</span>
													</li>
													<li className="mb-5">
														MFG:<span className="text-brand"> Jun 4.2021</span>
													</li>
												</ul>
											</div>
										</div>
										{/* Detail Info */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Layout>

					{/*End header*/}
					<main className="main">
						<BannerHome />
						{/*End hero slider*/}
						{
							!CategoryLoading && ResponseCategory != null ?
								<CategoryHomeCard Category={ResponseCategory} /> :
								<div className="container">
									<div className="row container" style={{ height: 250 }}>
										<div className="col-md-3 mb-3" style={{ marginBottom: 500 }}>
											<div className="animate-pulse" style={{ height: 90, width: '100%', borderRadius: 7 }}>
												<div className="animate" style={{ height: 200, width: '100%', borderRadius: 7 }}></div>
											</div>
										</div>
										<div className="col-md-3 mb-3" style={{ marginBottom: 500 }}>
											<div className="animate-pulse" style={{ height: 90, width: '100%', borderRadius: 7 }}>
												<div className="animate" style={{ height: 200, width: '100%', borderRadius: 7 }}></div>
											</div>
										</div>
										<div className="col-md-3 mb-3" style={{ marginBottom: 500 }}>
											<div className="animate-pulse" style={{ height: 90, width: '100%', borderRadius: 7 }}>
												<div className="animate" style={{ height: 200, width: '100%', borderRadius: 7 }}></div>
											</div>
										</div>
										<div className="col-md-3 mb-3" style={{ marginBottom: 500 }}>
											<div className="animate-pulse" style={{ height: 90, width: '100%', borderRadius: 7 }}>
												<div className="animate" style={{ height: 200, width: '100%', borderRadius: 7 }}></div>
											</div>
										</div>
									</div>
								</div>

						}
						{/*End category slider*/}
						{/* <BannerMenu /> */}
						<div className="container">
							<div className="row">
								<div className="col-4">
									<img className='css-akf-gk-w3egw' src="https://tzuchi.sch.id/wp-content/uploads/2025/09/Website-Banner-Welcome-PIK-1.png" alt="" />
								</div>
								<div className="col-4">
									<img className='css-akf-gk-w3egw' src="https://www.ktc.co.th/pub/media/Promotion/Hotel-Resorts/Wedding/Grand-Mercure-Bangkok-Atrium/AW_JUN24-314_-_HOTELS_-_Brief_Promo_Page_Wedding_Promotion_Grand_Mercure_Bangkok_Atrium_PROMO_BANNER_MOBILE_789x296px_EN.webp" alt="" />
								</div>
								<div className="col-4">
									<img className='css-akf-gk-w3egw' src="https://tpc.googlesyndication.com/simgad/11336536401242556805?" alt="" />
								</div>
							</div>
						</div>

						{/*End banners*/}
						<RecomendationProperty Category={ResponseCategory} />
						{/*Products Tabs*/}
						<PopularProperty />
						{/*End Best Sales*/}
						<ListAgents />
						{/*End Deals*/}
						<CategoryWithProperty />
						{/*End 4 columns*/}
					</main>
				</Layout>
			</>

		</>
	)
}

export default Home
