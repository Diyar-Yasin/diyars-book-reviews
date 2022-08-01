import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';

function App() {
  return (
    <Routes>
        <Route path="/bookreviewwebsite-v2" element={<Home />} />
        <Route path="/bookreviewwebsite-v2/:reviews" element={<Reviews />}/> 
    </Routes>
  );
}

export default App;