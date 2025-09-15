import './App.scss';  
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';


function App() {
  return (
    <>
    <Routes>
      {/* when the url is path is / load in Layout*/}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default child route of parent */}
        <Route path="about" element={<About />} />
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
