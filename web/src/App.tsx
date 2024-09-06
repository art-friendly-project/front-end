import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import useAccessPermissions from 'hooks/useAccessPermissions';
import ShowDetail from 'pages/ShowDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetailLayout from 'layout/DetailLayout';
import MainLayout from 'layout/MainLayout';
import DetailLayoutWithoutNav from 'layout/DetailLayoutWithoutNav';

const Like = lazy(async () => await import('pages/Like'));
const Home = lazy(async () => await import('pages/Home'));
const List = lazy(async () => await import('pages/List'));
const SearchGallery = lazy(async () => await import('pages/SearchGallery'));
const Gallery = lazy(async () => await import('pages/Gallery'));
const Profile = lazy(async () => await import('pages/Profile'));
const TasteSelect = lazy(async () => await import('pages/TasteSelect'));
const TasteTestMain = lazy(async () => await import('pages/TasteTestMain'));
const TasteTest = lazy(async () => await import('pages/TasteTest'));
const TasteTestResult = lazy(async () => await import('pages/TasteTestResult'));
const Loading = lazy(async () => await import('pages/Loading'));
const PrepareService = lazy(async () => await import('pages/PrepareService'));
const Reviews = lazy(async () => await import('pages/Reviews'));
const ReviewPost = lazy(async () => await import('pages/ReviewPost'));
const Settings = lazy(async () => await import('pages/Settings'));
const AccessGuidance = lazy(async () => await import('pages/AccessGuidance'));
const TermsOfUse = lazy(async () => await import('pages/TermsOfUse'));
const ProfileEdit = lazy(async () => await import('pages/ProfileEdit'));
const OpenLoading = lazy(async () => await import('pages/OpenLoading'));
const Login = lazy(async () => await import('pages/Login'));
const KakaoLogin = lazy(async () => await import('pages/KakaoLogin'));
const WithdrawalReason = lazy(
  async () => await import('pages/WithdrawalReason'),
);
const WithdrawalConfirm = lazy(
  async () => await import('pages/WithdrawalConfirm'),
);
const AppIntroduce = lazy(async () => await import('pages/AppIntroduce'));
const TermsAndPolicy = lazy(async () => await import('pages/TermsAndPolicy'));
const ReviewEdit = lazy(async () => await import('pages/ReviewEdit'));

const queryClient = new QueryClient();

const App = () => {
  useAccessPermissions();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex w-screen h-screen bg-gray-100 md:justify-center">
          <div className="relative flex flex-col w-full h-full bg-white md:w-1/2 lg:w-1/2 xl:w-1/3">
            <Suspense fallback={<PageLoadingSpineer />}>
              <Routes>
                <Route path="/" element={<OpenLoading />} />
                <Route path="/introduce" element={<AppIntroduce />} />
                <Route path="/kakao-login" element={<KakaoLogin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/taste-select" element={<TasteSelect />} />
                <Route path="/access" element={<AccessGuidance />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/shows/:id" element={<ShowDetail />} />
                <Route path="/home/search-gallery/:id" element={<Gallery />} />

                <Route element={<MainLayout />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/shows" element={<List />} />
                  <Route path="/like" element={<Like />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<DetailLayout />}>
                  <Route path="/home/location" element={<List />} />
                  <Route
                    path="/home/search-gallery"
                    element={<SearchGallery />}
                  />
                </Route>

                <Route element={<DetailLayoutWithoutNav />}>
                  <Route path="/taste-test" element={<TasteTestMain />} />
                  <Route path="/taste-test/questions" element={<TasteTest />} />
                  <Route
                    path="/taste-test/result"
                    element={<TasteTestResult />}
                  />
                  <Route path="/prepare-service" element={<PrepareService />} />
                  <Route path="/reviews/:id" element={<Reviews />} />
                  <Route path="/review-post/:id" element={<ReviewPost />} />
                  <Route path="/review-edit/:id" element={<ReviewEdit />} />
                  <Route path="/profile-edit" element={<ProfileEdit />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route
                    path="/settings/terms-and-policy"
                    element={<TermsAndPolicy />}
                  />
                  <Route
                    path="/withdrawal/reason"
                    element={<WithdrawalReason />}
                  />
                  <Route
                    path="/withdrawal/confirm"
                    element={<WithdrawalConfirm />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
