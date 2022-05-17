import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import WithSubnavigation from './components/Navbar';
import AllProjectsPage from './pages/AllProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import DetailPage from './pages/DetailPage';
import NewProject from './pages/NewProject';
import EditPage from './pages/EditPage';

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/all" element={<AllProjectsPage />} />
        <Route path='/project/:id' element={<DetailPage />} />
        <Route path='/new' element={<NewProject />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
