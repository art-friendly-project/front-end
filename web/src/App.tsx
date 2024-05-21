import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import useAccessPermissions from 'hooks/useAccessPermissions';
import LoadingSpineer from 'components/common/LoadingSpineer';
import OpenLoading from 'pages/OpenLoading';
import ProfileEdit from 'pages/ProfileEdit';
import Login from 'pages/Login';
import KakaoLogin from 'pages/KakaoLogin';

const NearbyAndLocationShow = lazy(
  async () => await import('pages/NearbyAndLocationShow'),
);
const TasteTestMain = lazy(async () => await import('pages/TasteTestMain'));
const DetailLayout = lazy(async () => await import('layout/DetailLayout'));
const DetailLayoutWithoutNav = lazy(
  async () => await import('layout/DetailLayoutWithoutNav'),
);
const MainLayout = lazy(async () => await import('layout/MainLayout'));
const Like = lazy(async () => await import('pages/Like'));
const Home = lazy(async () => await import('pages/Home'));
const List = lazy(async () => await import('pages/List'));
const Profile = lazy(async () => await import('pages/Profile'));
const TasteSelect = lazy(async () => await import('pages/TasteSelect'));
const TasteTest = lazy(async () => await import('pages/TasteTest'));
const TasteTestResult = lazy(async () => await import('pages/TasteTestResult'));
const Loading = lazy(async () => await import('pages/Loading'));
const PrepareService = lazy(async () => await import('pages/PrepareService'));
const ShowDetail = lazy(async () => await import('pages/ShowDetail'));
const Reviews = lazy(async () => await import('pages/Reviews'));
const ReviewPost = lazy(async () => await import('pages/ReviewPost'));
const Settings = lazy(async () => await import('pages/Settings'));
const AccessGuidance = lazy(async () => await import('pages/AccessGuidance'));
const TermsOfUse = lazy(async () => await import('pages/TermsOfUse'));

const App = () => {
  useAccessPermissions();

  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen bg-gray-100 md:justify-center">
        <div className="relative flex flex-col w-full h-full bg-white md:w-1/2 lg:w-1/2 xl:w-1/3">
          <Suspense fallback={<LoadingSpineer />}>
            <Routes>
              <Route path="/" element={<OpenLoading />} />
              <Route path="/kakao-login" element={<KakaoLogin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
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
                <Route
                  path="/home/nearby"
                  element={<NearbyAndLocationShow />}
                />
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
                <Route path="/profile-edit" element={<ProfileEdit />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
