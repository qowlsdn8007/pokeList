import './font.css';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import CarListPage from './pages/CarListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" />,
  },
  {
    path: '/list',
    element: <CarListPage />,
    children: [
      {
        path: 'list/:carClassId',
        element: null,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
