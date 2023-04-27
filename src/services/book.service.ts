import { Post } from "../types/Post.interface";

export const getBooks = async (page: number) => {
    try{
    const response = await fetch(`https://6448d351e7eb3378ca36d040.mockapi.io/api/movies?limit=5&page=${page}`);
    console.log(response.status)
    const data = await response.json();
    console.log(page);
    console.log({data});
    return data
}catch(e) {
    console.log(e);
}
}