import { useRef, useState } from "react";
import { IMovie } from "../../interfaces/interface";

export const usePopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null)

    const handleOpenPopup = (movie: IMovie) => {
        setSelectedMovie(movie);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setSelectedMovie(null);
        setIsPopupOpen(false);
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            setSelectedMovie(null);
            setIsPopupOpen(false)
        }
    };

    return {
        isPopupOpen,
        selectedMovie,
        popupRef,
        handleOpenPopup,
        handleClosePopup,
        handleClickOutside
    }
}