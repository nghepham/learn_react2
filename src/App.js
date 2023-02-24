import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import News from './News';
import PageNotFound from './PageNotFound';


function App() {

  return (
    <div className='container'>
      <Router>
        <Header />
        <main id='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
