import './App.scss';  
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'


function App() {
  return (
    <>
    <Routes>
      {/* when the url is path is / load in Layout*/}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default child route of parent */}
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
