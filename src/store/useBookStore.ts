import { create } from 'zustand';
import { Post } from '../types/Post.interface';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './zustandStorage';


export interface BookState {
    books: Post[],
    book: Post | null,
    setCurrentBooks: (book: Post) => void,
    getBooks: (arr: Post[]) => void
}

// delete <BookState> when using persist
export const useBookStore = create<BookState>(
    // persist<BookState>(
        (set) => ({
        books: [],
        book: null,
        setCurrentBooks: (book: Post) => set((state: BookState) => (
            { ...state, book }        
        )),
        getBooks: (books: Post[]) => set((state: BookState) => (
            { ...state, books }        
        ))
    }), 
    // {
        // name: 'book-storage',
        // storage: createJSONStorage( () => zustandStorage)
    // }
// )
)