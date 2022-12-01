// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/common_pages/ErrorPage';
import Footer from './components/common_pages/Footer';
import Navbar from './components/common_pages/Navbar';
import TopNotificationBar from './components/common_pages/TopNotificationBar';
import HomePage from './components/HomePage/HomePage';
import InternetPage from './components/internet_page/InternetPage';

function App() {
  return (
    <>
      <TopNotificationBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internet" element={<InternetPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
