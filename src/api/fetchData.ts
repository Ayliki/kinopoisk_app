import axios from 'axios';
import { IMovie, ISeries } from '../interfaces/interface';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

interface IApiResponse<T> {
    docs: T[];
}

export async function fetchContent<T extends IMovie | ISeries>(
    page: number,
    type: 'movie' | 'series'
): Promise<T[]> {
    try {
        const params = {
            page: page.toString(),
            limit: '12',
            'rating.imdb': '7.2-10',
            ...(type === 'series'
                ? { type: 'tv-series', 'budget.value': '10000000-1000000000' }
                : { lists: 'top250' }),
        };

        const response = await axios.get<IApiResponse<T>>(`${BASE_URL}movie`, {
            params,
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        });

        return response.data.docs;
    } catch (error) {
        throw new Error(`Failed to fetch ${type}: ${(error as Error)}`);
    }
}

export async function findFunction<T extends IMovie | ISeries>(
    input: string,
    contentType: 'movie' | 'series'
  ): Promise<T[]> {
    try {
      const response = await axios.get<IApiResponse<T>>(`${BASE_URL}movie/search`, {
        params: {
          page: '1',
          limit: '12',
          query: input,
        },
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
      });
  
      const content = response.data.docs;
  
      return content;
    } catch (error) {
      throw new Error(`Failed to fetch ${contentType}`);
    }
  }