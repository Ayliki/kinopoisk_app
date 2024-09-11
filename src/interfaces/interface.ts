export interface IMovie{
    id: number;
    url: string;
    name: string;
    backdrop?: {
        url: string
    }
    genres: {
        name: string
    }[];
    rating: {
        kp: number;
    };
    shortDescription: string;
    year: number;
    type: string;
}

export interface ISeries extends IMovie{
    seasonsCount: number;
    poster?: {
        url: string
    };
}

export interface IProps {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void
    currentPage: number;
    setCurrentPage: (page: number) => void;
    content: (IMovie | ISeries)[];
    setContent: (content: (IMovie | ISeries)[]) => void;
    contentType: 'movie' | 'series'; 
  }