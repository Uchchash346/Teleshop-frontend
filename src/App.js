// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/common_pages/ErrorPage';
import Footer from './components/common_pages/Footer';
import Navbar from './components/common_pages/Navbar';
import TopNotificationBar from './components/common_pages/TopNotificationBar';
import Contact from './components/contact_page/Contact';
import CustomerSupport from './components/customer_support/CustomerSupport';
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
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
