import { Navigate, RouteObject } from 'react-router-dom';
import HomeScreen from '../pages/Home';
import PaletteScreen from '../pages/Palette';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/palette',
    element: <PaletteScreen />
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  },
];

export default routes;