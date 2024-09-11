import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Pagination } from '../../components/pagination/Pagination';
import { IProps, ISeries } from '../../interfaces/interface';
import { fetchContent } from '../../api/fetchData';
import { MainList } from '../../components/mainList/MainList';

export const Series = ({ isLoading, setIsLoading, setCurrentPage, currentPage, content, setContent, contentType }: IProps) => {
  useEffect(() => {
    const loadSeries = async () => {
      setIsLoading(true);
      try {
        const res = await fetchContent<ISeries>(currentPage, contentType);
        setContent(res);
      } catch (error) {
        console.error('Failed to fetch series', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSeries();
  }, [currentPage]);

  return (
    <div>
      <Navbar 
        setIsLoading={setIsLoading} 
        currentPage={currentPage} 
        setContent={setContent}
        contentType='series'
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <MainList  isLoading={isLoading} content={content} title={'Series'}/>
      </Pagination>
    </div>
  )
}

export default Series