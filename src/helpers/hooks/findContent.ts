import { useEffect } from "react";
import { fetchContent, findFunction } from "../../api/fetchData";
import { IMovie, ISeries } from "../../interfaces/interface";

export const useFindContent = (
    debouncedInput: string,
    setContent: (content: (IMovie | ISeries)[]) => void,
    setIsLoading: (loading: boolean) => void,
    currentPage: number,
    contentType: 'movie' | 'series') => {
    useEffect(() => {

        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                if (debouncedInput) {
                    const searchResults = await findFunction(debouncedInput, contentType);
                    const filteredMovies = searchResults.filter(res =>
                        contentType === 'movie'
                            ? (res as IMovie).backdrop?.url
                            : (res as ISeries).poster?.url
                    );
                    setContent(filteredMovies);
                } else {
                    const originalMovies = await fetchContent<IMovie | ISeries>(currentPage, contentType);
                    setContent(originalMovies);
                }
            } catch (error) {
                console.error(`Failed to fetch ${contentType}`, error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [debouncedInput, setContent, setIsLoading, currentPage, contentType]);
};