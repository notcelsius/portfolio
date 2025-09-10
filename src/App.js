import './App.scss';  
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
    <>
    <Routes>
      {/* when the url is path is / load in Layout*/}
      <Route path="/" element={<Layout />} /> 
    </Routes>
    </>
  );
}

export default App;
