import './font.css';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import axios from 'axios';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalStyle from './GlobalStyle';
import PokeListPage from './pages/PokeListPage';
import { PokeDetail } from './components/PokeDetail';
import Modal from './components/Modal';
import PokeDetailSkeleton from './components/PokeDetail/PokeDetailSkeleton';
import CommonErrorFallback from './components/common/Error/PokeErrorFallback';
import RootBoundary from './pages/Error/RootErrorBoundary';

// api base url 설정
axios.defaults.baseURL = 'http://localhost:8080';

// 라우터 URL path 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" />,
    ErrorBoundary: RootBoundary,
  },
  {
    path: '/list',
    element: <PokeListPage />,
    children: [
      {
        path: '/list/:pokeClassId',
        element: (
          <Modal>
            <ErrorBoundary FallbackComponent={CommonErrorFallback}>
              <Suspense fallback={<PokeDetailSkeleton />}>
                <PokeDetail />
              </Suspense>
            </ErrorBoundary>
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
