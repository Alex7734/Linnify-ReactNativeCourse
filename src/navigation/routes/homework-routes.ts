import { Post } from "../../types/Post.interface";

export enum HomeworkRoutes {
    App = 'App',
    BookList = 'Home',
    BookDetail = "Detail"
}

export type HomeworkRouteProps = {
    [HomeworkRoutes.BookList]: undefined;
    [HomeworkRoutes.BookDetail]: Post;
    [HomeworkRoutes.App]: undefined;
}