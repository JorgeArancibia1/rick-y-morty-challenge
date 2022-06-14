import { Navbar } from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { DetailCharacter } from '../screens/DetailCharacter';
import { DetailLocation } from '../screens/DetailLocation';
import { DetailEpisode } from '../screens/DetailEpisode';
import { Home } from '../screens/Home';

export const HomeRoutes = () => {

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/detail-character" element={<DetailCharacter />} />
          <Route path="/detail-location" element={<DetailLocation />} />
          <Route path="/detail-episode" element={<DetailEpisode />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}