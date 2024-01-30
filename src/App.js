import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';

function App() {
  return (
    <Routes>
        <Route path="/diyars-book-reviews" element={<Home />} />
        <Route path="/diyars-book-reviews/:reviews" element={<Reviews />}/> 
    </Routes>
  );
}

export default App;