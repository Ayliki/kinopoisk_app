import { MainList } from '../../components/mainList/MainList'
import Navbar from '../../components/navbar/Navbar'
import { Pagination } from '../../components/pagination/Pagination';
import { IProps } from '../../interfaces/interface'

const Main = ({setIsLoading, setContent, isLoading, content, currentPage, setCurrentPage, contentType}: IProps) =>{

    return(
        <div>
            <Navbar 
                setIsLoading={setIsLoading} 
                currentPage={currentPage} 
                setContent={setContent}
                contentType={contentType}
            />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}>
                <MainList  isLoading={isLoading} content={content} title={'Our'}/>
            </Pagination>
        </div>
    )
}

export default Main