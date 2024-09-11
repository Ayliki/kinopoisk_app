import { IMovie, ISeries } from '../../interfaces/interface';
import cl from './styles.module.css';

interface IProps {
    item: IMovie | ISeries; 
    handleOpenPopup: (item: IMovie | ISeries) => void;
}

export const ContentItem = ({ item, handleOpenPopup }: IProps) => {
    const getRatingClass = (rating: number) => {
        if (rating > 7.5) {
            return cl['rating-high'];
        } else if (rating < 5) {
            return cl['rating-low'];
        } else {
            return cl['rating-medium'];
        }
    };

    const isMovie = (item: IMovie | ISeries): item is IMovie => {
        return (item as IMovie).backdrop !== undefined;
    };

    const imageUrl = isMovie(item) ? item.backdrop?.url : (item as ISeries).poster?.url;

    return (
        <div className={cl.item} onClick={() => handleOpenPopup(item)}>
            <span className={`${cl.rating} ${getRatingClass(item.rating.kp)}`}>
                {item.rating.kp.toFixed(1)}
            </span>
            <img
                src={imageUrl} 
                alt={item.name}
                className={cl.poster}
            />
            <div className={cl.titleWrapper}>
                <span>{item.name}</span>
            </div>
        </div>
    );
};