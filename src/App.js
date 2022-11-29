// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
      <Routes>
        <Route path="/internet" element={<InternetPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
