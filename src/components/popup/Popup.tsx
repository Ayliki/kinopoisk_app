import { IMovie, ISeries } from "../../interfaces/interface";
import cl from './styles.module.css'

interface IProps{
    handleClickOutside: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleClosePopup: ()=>void;
    selectedContent: (IMovie | ISeries);
    popupRef: React.RefObject<HTMLDivElement>;
}

export const Popup = ({popupRef, handleClickOutside, handleClosePopup, selectedContent}: IProps) => {
  return (
    <div className={cl.popup} onClick={handleClickOutside}>
        <div className={cl.popupContent} ref={popupRef}>
            <button onClick={handleClosePopup} className={cl.closeBtn}>X</button>
            <h2 className={cl.title}>{selectedContent.name}</h2>
            <img className={cl.popupPoster} src={selectedContent.backdrop?.url} alt={selectedContent.name}/>
            <p><strong>Rating:</strong> {selectedContent.rating.kp.toFixed(1)}</p>
            <p><strong>Year:</strong> {selectedContent.year}</p>
            <p><strong>Genres:</strong> {selectedContent.genres.map(genre=>genre.name).join(', ')}</p>
            <p><strong>Description:</strong> {selectedContent.shortDescription}</p>
        </div>
    </div>
  )
}
