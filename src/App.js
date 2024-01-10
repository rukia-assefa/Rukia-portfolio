import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Contact from './components/Contact';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (<>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>} />

        {/* Add more routes as needed */}
      </Routes>
      </>
  );
}

export default App;
