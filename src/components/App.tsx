import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@GeneralComponents/SharedLayout';
import { usePromotions } from '@/hooks';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ServiceUnavailablePage = lazy(
  () => import('@/pages/ServiceUnavailablePage')
);
const MainPage = lazy(() => import('@/pages/MainPage'));
const CabinetPage = lazy(() => import('@/pages/CabinetPage'));
const PromotionsPage = lazy(() => import('@/pages/PromotionsPage'));
const PromotionDetailsPage = lazy(() => import('@/pages/PromotionDetailsPage'));
const RegisterCodePage = lazy(() => import('@/pages/RegisterCodePage'));

const App: FC = () => {
  usePromotions();

  return (
    <Routes>
      <Route path={PagePaths.root} element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path={PagePaths.root} element={<MainPage />} />
        <Route path={PagePaths.cabinet} element={<CabinetPage />} />
        <Route path={PagePaths.promotions} element={<PromotionsPage />} />
        <Route
          path={`${PagePaths.promotions}/:${PagePaths.dynamicParam}`}
          element={<PromotionDetailsPage />}
        />
        <Route
          path={`${PagePaths.code}/:${PagePaths.dynamicParam}`}
          element={<RegisterCodePage />}
        />
        <Route
          path={PagePaths.serviceUnavailable}
          element={<ServiceUnavailablePage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
