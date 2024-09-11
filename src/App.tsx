import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import { useState } from 'react';
import { IMovie, ISeries } from './interfaces/interface';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [content, setContent] = useState<(IMovie | ISeries)[]>([]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Main 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            content={content}
            setContent={setContent}
            contentType='movie'
          />} 
        />
        <Route path="/movies" element={
          <Movies 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            content={content}
            setContent={setContent}
            contentType='movie'
          />} 
        />
        <Route path="/series" element={
          <Series 
            isLoading={isLoading} 
            setIsLoading={setIsLoading} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            content={content}
            setContent={setContent}
            contentType='series'
          />} 
        />
      </Routes>
    </Router>
  )
}

export default App
