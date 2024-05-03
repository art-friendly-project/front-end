import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NearbyAndLocationShow from 'pages/NearbyAndLocationShow';
import TasteTestMain from 'pages/TasteTestMain';
import DetailLayout from 'layout/DetailLayout';
import DetailLayoutWithoutNav from 'layout/DetailLayoutWithoutNav';
import MainLayout from 'layout/MainLayout';
import Like from 'pages/Like';
import Home from 'pages/Home';
import List from 'pages/List';
import OpenLoading from 'pages/OpenLoading';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import TasteSelect from 'pages/TasteSelect';
import TasteTest from 'pages/TasteTest';
import TasteTestResult from 'pages/TasteTestResult';
import Loading from 'pages/Loading';
import PrepareService from 'pages/PrepareService';
import ShowDetail from 'pages/ShowDetail';
import Reviews from 'pages/Reviews';
import ReviewPost from 'pages/ReviewPost';
import Settings from 'pages/Settings';
import AccessGuidance from 'pages/AccessGuidance';
import useAccessPermissions from 'hooks/useAccessPermissions';

const App = () => {
  useAccessPermissions();

  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen bg-gray-100 md:justify-center">
        <div className="relative flex flex-col w-full h-full bg-white md:w-1/2 lg:w-1/2 xl:w-1/3">
          <Routes>
            <Route path="/" element={<OpenLoading />} />
            <Route path="/login" element={<Login />} />
            <Route path="/taste-select" element={<TasteSelect />} />
            <Route path="/access" element={<AccessGuidance />} />
            <Route path="/shows/:id" element={<ShowDetail />} />
            <Route path="/loading" element={<Loading />} />

            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/List" element={<List />} />
              <Route path="/like" element={<Like />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<Profile />} />
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
              <Route path="/prepare-service" element={<PrepareService />} />
              <Route path="/shows/:id/reviews/:id" element={<Reviews />} />
              <Route path="/shows/:id/review-post" element={<ReviewPost />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
