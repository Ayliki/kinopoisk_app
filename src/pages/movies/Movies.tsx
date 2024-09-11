import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar"
import { IMovie, IProps } from "../../interfaces/interface";
import { fetchContent } from "../../api/fetchData";
import { Pagination } from "../../components/pagination/Pagination";
import { MainList } from "../../components/mainList/MainList";

const Movies = ({ setIsLoading, setContent, isLoading, content, currentPage, setCurrentPage, contentType }: IProps) => {

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchContent<IMovie>(currentPage, contentType);
        setContent(res);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [currentPage, contentType, setIsLoading, setContent]);

  return (
    <div>
      <Navbar 
        setIsLoading={setIsLoading} 
        currentPage={currentPage} 
        setContent={setContent}
        contentType='movie'
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <MainList  isLoading={isLoading} content={content} title={'Movies'}/>
      </Pagination>
    </div>
  )
}

export default Movies
