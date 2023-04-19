import './font.css';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import axios from 'axios';
import GlobalStyle from './GlobalStyle';
import CarListPage from './pages/CarListPage';
import { CarDetail } from './components/CarDetail';
import Modal from './components/Modal';

// api base url 설정
axios.defaults.baseURL = 'http://localhost:8080';

// 라우터 URL path 설정
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
        path: '/list/:carClassId',
        element: (
          <Modal>
            <CarDetail />
          </Modal>
        ),
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
