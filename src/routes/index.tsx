
import { useRoutes } from 'react-router-dom';
import { PagesRoutes } from '../pages';
import { publicRoutes } from './public';


const AppRoutes = () => {
	const commonRoutes = [
		{ path: '*', element: <PagesRoutes /> }
	];
	const routes = publicRoutes;
	const element = useRoutes([...routes, ...commonRoutes]);

	return <>{element}</>;
};

export default AppRoutes