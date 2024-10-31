// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,useLocation  } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ContextTheme';
import './App.css';
import Footer from "./components/footer"
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReputationMontiring from './pages/Listen-Services/ReputationMontiring';
import Competitive from './pages/Listen-Services/Competitive';
import MarketingCampaign from './pages/Listen-Services/MarketingCampaign';
import Risk from './pages/Listen-Services/Risk';
import Influencer from './pages/Listen-Services/Influencer';
import Authenticity from './pages/Listen-Services/Authenticity';
import Amplification from './pages/Responsive-solutions/Amplification';
import Reputation from './pages/Responsive-solutions/Reputation';
import Tactical from './pages/Responsive-solutions/Tactical';
import Marketing from './pages/Responsive-solutions/Marketing';
import LargeScale from './pages/Responsive-solutions/LargeScale';
import Success from './pages/Success-Stories/Success';
import MarketsCryptocurrency from './pages/Success-Stories/MarketsCryptocurrency';
import Banking from './pages/Success-Stories/BankingInsurance';
import Education from './pages/Success-Stories/Education';
import Airlines from './pages/Success-Stories/Airlines';
import Mass from './pages/Success-Stories/MassRetail';
import Telco from './pages/Success-Stories/Telco';
import Oil from './pages/Success-Stories/OilGas';
import Theme from './pages/Success-Stories/Theme';
import FMCG from './pages/Success-Stories/FMCG';
import Luxury from './pages/Success-Stories/Luxury';
import Ministries from './pages/Success-Stories/MinistriesDepartments';
import Fashion from './pages/Success-Stories/Fashion';
import HooTalk from './pages/Special-Marketing/HooTalk';
import MassAnalytics from './pages/Special-Marketing/Mass';
import ScrollToTop from './components/ScrollToTop';





const App = () => {
  return (
    <ThemeProvider>
      <Router>
      <ScrollToTop />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} className="nav-i" />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reputition-montiring" element={<ReputationMontiring />} />
            <Route path="/competitive" element={<Competitive />} />
            <Route path="/market-campaign" element={<MarketingCampaign />} />
            <Route path="/risk" element={<Risk />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/authenticity" element={<Authenticity />} />
            <Route path="/amplification" element={<Amplification />} />
            <Route path="/reputation" element={<Reputation />} />
            <Route path="/tactical" element={<Tactical />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/large-scale" element={<LargeScale />} />
            <Route path="/success" element={<Success />} />
            <Route path="/markets-cryptocurrency" element={<MarketsCryptocurrency />} />
            <Route path="/banking-insurance" element={<Banking />} />
            <Route path="/education" element={<Education />} />
            <Route path="/airlines" element={<Airlines />} />
            <Route path="/mass-retail" element={<Mass />} />
            <Route path="/telco" element={<Telco />} />
            <Route path="/oil-gas" element={<Oil />} />
            <Route path="/theme-amusement-parks" element={<Theme />} />
            <Route path="/FMCG" element={<FMCG />} />
            <Route path="/luxury" element={<Luxury />} />
            <Route path="/ministries-departments" element={<Ministries />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/hoo-talk" element={<HooTalk />} />
            <Route path="/mass-analytics" element={<MassAnalytics />} />

          </Routes>
          <Footer />
          

        </div>
      </Router>
    </ThemeProvider>
  );
};
export default App;
