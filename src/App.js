// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/common_pages/Navbar';
import TopNotificationBar from './components/common_pages/TopNotificationBar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <TopNotificationBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
