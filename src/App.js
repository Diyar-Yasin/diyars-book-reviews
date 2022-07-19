import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:reviews" element={<Reviews />}/>
    </Routes>
  );
}

export default App;
