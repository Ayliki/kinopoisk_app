import { IMovie } from "../../interfaces/interface";
import cl from './styles.module.css'

interface IProps{
    handleClickOutside: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleClosePopup: ()=>void;
    selectedMovie: IMovie;
    popupRef: React.RefObject<HTMLDivElement>;
}

export const Popup = ({popupRef, handleClickOutside, handleClosePopup, selectedMovie}: IProps) => {
  return (
    <div className={cl.popup} onClick={handleClickOutside}>
        <div className={cl.popupContent} ref={popupRef}>
            <button onClick={handleClosePopup} className={cl.closeBtn}>X</button>
            <h2 className={cl.title}>{selectedMovie.name}</h2>
            <img className={cl.popupPoster} src={selectedMovie.backdrop.url} alt={selectedMovie.name}/>
            <p><strong>Rating:</strong> {selectedMovie.rating.kp.toFixed(1)}</p>
            <p><strong>Year:</strong> {selectedMovie.year}</p>
            <p><strong>Genres:</strong> {selectedMovie.genres.map(genre=>genre.name).join(', ')}</p>
            <p><strong>Description:</strong> {selectedMovie.shortDescription}</p>
        </div>
    </div>
  )
}
