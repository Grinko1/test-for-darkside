import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ArticlesDetail from './pages/ArticlesDetail/ArticlesDetail';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/article/:id" element={<ArticlesDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
