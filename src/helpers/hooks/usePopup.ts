import { useRef, useState } from "react";
import { IMovie, ISeries } from "../../interfaces/interface";

export const usePopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [selectedContent, setSelectedContent] = useState<IMovie | ISeries | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null)

    const handleOpenPopup = (content: (IMovie | ISeries)) => {
        setSelectedContent(content);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setSelectedContent(null);
        setIsPopupOpen(false);
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            setSelectedContent(null);
            setIsPopupOpen(false)
        }
    };

    return {
        isPopupOpen,
        selectedContent,
        popupRef,
        handleOpenPopup,
        handleClosePopup,
        handleClickOutside
    }
}