import { IMovie, ISeries } from "../../interfaces/interface";
import { ContentItem } from "../contentItem/ContentItem"; 
import cl from "./styles.module.css";

interface IProps {
    content: (IMovie | ISeries)[]; 
    handleOpenPopup: (item: IMovie | ISeries) => void; 
}

export const ContentList = ({ content, handleOpenPopup }: IProps) => {
    return (
        <div className={cl.list}>
            {content.length > 0 ? (
                content.map((item) => (
                    <ContentItem
                        key={item.id}
                        item={item}
                        handleOpenPopup={handleOpenPopup}
                    />
                ))
            ) : (
                <div>No content available</div>
            )}
        </div>
    );
};