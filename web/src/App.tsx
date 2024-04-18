import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NearbyAndLocationShow from 'components/home/detail/nearbyAndLocationShow/NearbyAndLocationShow';
import TasteTestMain from 'components/home/detail/tasteTest/questions/TasteTestMain';
import DetailLayout from 'layout/DetailLayout';
import DetailLayoutWithoutNav from 'layout/DetailLayoutWithoutNav';
import MainLayout from 'layout/MainLayout';
import Calendar from 'pages/Calendar';
import Home from 'pages/Home';
import List from 'pages/List';
import OpenLoading from 'pages/OpenLoading';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import TasteSelect from 'pages/TasteSelect';
import TasteTest from 'components/home/detail/tasteTest/questions/TasteTest';
import TasteTestResult from 'components/home/detail/tasteTest/result/TasteTestResult';
import Loading from 'components/home/detail/tasteTest/loading/Loading';
import PrepareService from 'components/prepareService/PrepareService';
import ShowDetail from 'components/showDetail/ShowDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen bg-gray-100 md:justify-center">
        <div className="relative w-full h-full bg-white md:w-1/2 lg:w-1/2 xl:w-1/3">
          <Routes>
            <Route path="/" element={<OpenLoading />} />
            <Route path="/login" element={<Login />} />
            <Route path="/taste-select" element={<TasteSelect />} />
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/list" element={<List />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<DetailLayout />}>
              <Route path="/home/nearby" element={<NearbyAndLocationShow />} />
            </Route>
            <Route element={<DetailLayoutWithoutNav />}>
              <Route path="/home/taste-test" element={<TasteTestMain />} />
              <Route
                path="/home/taste-test/questions"
                element={<TasteTest />}
              />
              <Route
                path="/home/taste-test/result"
                element={<TasteTestResult />}
              />
              <Route path="/shows/:id" element={<ShowDetail />} />
              <Route path="/prepare-service" element={<PrepareService />} />
            </Route>
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
