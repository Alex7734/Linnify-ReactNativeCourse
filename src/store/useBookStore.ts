import { create } from 'zustand';
import { Post } from '../types/Post.interface';
import { data } from '../data/BookListData';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './zustandStorage';


export interface BookState {
    books: Post[],
    book: Post | null,
    setCurrentBooks: (book: Post) => void,
}

export const useBookStore= create(persist<BookState>((set) => ({
        books: data,
        book: null,
        setCurrentBooks: (book: Post) => set((state: BookState) => (
            { ...state, book }        
        ))
    }), 
    {
        name: 'book-storage',
        storage: createJSONStorage( () => zustandStorage)
    }
))