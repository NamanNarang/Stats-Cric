import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Find from './Find';
import ComparePlayers from './ComparePlayers';
import News from './News';
import Home from './Home';
import About from './About';
import IPL from './components/leagues/IPL';
import BBL from './components/leagues/BBL';
import T20Blast from './components/leagues/T20Blast';
import PSL from './components/leagues/PSL';
import CPL from './components/leagues/CPL';
import LPL from './components/leagues/LPL';
import WT20WC from './components/leagues/WT20WC';

import UAEVsNam from './components/leagues/UAEVsNam';
import EngWVsRSAW from './components/leagues/EngWVsRSAW';
import NzVsEng from './components/leagues/NZVsEng';
import INDVsAus from './components/leagues/IndVsAus';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-matches" element={<Find />} />
        <Route path="/compare-players" element={<ComparePlayers />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/ipl/:match_id" element={<IPL />} />
        <Route path="/bbl" element={<BBL />} />
        <Route path="/t20-blast" element={<T20Blast />} />
        <Route path="/psl" element={<PSL />} />
        <Route path="/cpl" element={<CPL />} />
        <Route path="/lpl" element={<LPL />} />
        <Route path="/nz-vs-eng" element={<NzVsEng />} />
        <Route path="/ind-vs-auS" element={< INDVsAus />} />
        <Route path="/wt20" element={<WT20WC />} />
        <Route path="/uae-vs-nam" element={<UAEVsNam />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />


        {/* articles from here

        <Route path="news/ashes-squad-2024" element={<Austeam />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} />
        <Route path="/eng-w-vs-rsa-w" element={<EngWVsRSAW />} /> */}

      </Routes>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-center py-4">
        <div className="container mx-auto">
          <p className="text-gray-400">STATS-CRIC © 2024</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400">Facebook</a>
            <a href="#" className="text-gray-400">Twitter</a>
            <a href="#" className="text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
