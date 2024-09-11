import cl from './styles.module.css'
import { IMovie, ISeries } from '../../interfaces/interface'
import { Popup } from '../popup/Popup';
import { usePopup } from '../../helpers/hooks/usePopup';
import { ContentList } from '../contentList/ContentList';
interface IProps {
    isLoading: boolean;
    content:  (IMovie | ISeries)[];
    title: string;
}

export const MainList = ({ isLoading, content, title }: IProps) => {
    const {
        isPopupOpen,
        selectedContent,
        popupRef,
        handleOpenPopup,
        handleClosePopup,
        handleClickOutside
    } = usePopup();

    return (
        <div className={cl.mainList}>
            <h1>{title} Collection</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (<ContentList
                content={content}
                handleOpenPopup={handleOpenPopup}
            />)}

            {isPopupOpen && selectedContent &&
                <Popup
                    popupRef={popupRef}
                    handleClickOutside={handleClickOutside}
                    handleClosePopup={handleClosePopup}
                    selectedContent={selectedContent}
                />
            }
        </div>
    );
} 
