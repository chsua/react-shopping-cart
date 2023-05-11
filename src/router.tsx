import { createHashRouter } from 'react-router-dom';

import ProductListPage from '@Pages/ProductListPage';

import App from './App';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'product-list',
        element: <ProductListPage />,
      },
    ],
  },
]);

export default router;
