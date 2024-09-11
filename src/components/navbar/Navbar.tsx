import { useState } from 'react';
import cl from './styles.module.css';
import { IMovie, ISeries } from '../../interfaces/interface';
import { Menu } from '../menu/Menu';
import { SearchBox } from '../searchBox/SearchBox';
import { useDebouncedInput } from '../../helpers/hooks/debouncedInput';
import { useFindContent } from '../../helpers/hooks/findContent';

interface IProps {
    setIsLoading: (loading: boolean) => void;
    setContent: (content: (IMovie | ISeries)[]) => void;
    currentPage: number;
    contentType: 'movie' | 'series'; 
}

const Navbar = ({ setIsLoading, setContent, currentPage, contentType }: IProps) => {
    const [input, setInput] = useState<string>('');
    const debouncedInput = useDebouncedInput(input, 700);

    useFindContent(debouncedInput, setContent, setIsLoading, currentPage, contentType);

    return (
        <div className={cl.navbar}>
            <Menu />
            <SearchBox setInput={setInput} />
        </div>
    );
};

export default Navbar;