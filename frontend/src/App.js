import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import NotePage from './pages/NotePage';

function App() {
  return (
      <div className="container dark">
        <div className="app">
          <Router>
            <Header />
            <Routes>
              <Route path='/' exact element={<NotesListPage />} />
              <Route path='/notes/:noteId' element={<NotePage />} />
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
