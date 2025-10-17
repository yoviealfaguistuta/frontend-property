import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import PropertyDetail from './property-detail';
import PropertyList from './property-list';
import AgentDetail from './agent-detail';
// import Home from './Home';
// import DasarHukum from './DasarHukum';
// import Dokumentasi from './Dokumentasi';
// import Faq from './Faq';



export const PagesRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Suspense><Home /></Suspense>} />
			<Route path="/agent-detail/:id_agent" element={<Suspense><AgentDetail /></Suspense>} />
			<Route path="/detail/:id_property" element={<Suspense><PropertyDetail /></Suspense>} />
			<Route path="/list" element={<Suspense><PropertyList /></Suspense>} />
		</Routes>
	);
};
