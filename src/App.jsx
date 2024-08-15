import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Navigate to="/dashboard"/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
