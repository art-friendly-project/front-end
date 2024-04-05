import MainLayout from 'layout/MainLayout';
import Calendar from 'pages/Calendar';
import Home from 'pages/Home';
import List from 'pages/List';
import Loading from 'pages/Loading';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import TasteSelect from 'pages/TasteSelect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen bg-gray-100 md:justify-center">
        <div className="w-full h-full bg-white md:w-1/2 lg:w-1/2 xl:w-1/3">
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/login" element={<Login />} />
            <Route path="/taste-select" element={<TasteSelect />} />
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/list" element={<List />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
