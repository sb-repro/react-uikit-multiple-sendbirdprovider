import './App.css';
import '@sendbird/uikit-react/dist/index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoutePage from './components/RoutePage';
import Team from './pages/Team';
import Private from './pages/Private';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Chat List</h1>
        <div className='RoutePage'>
          <RoutePage />
        </div>
        <Routes>
          <Route path='/team' element={<Team />} />
          <Route path='/private' element={<Private />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
