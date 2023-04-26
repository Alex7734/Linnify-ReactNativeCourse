export enum HomeworkRoutes {
    App = 'App',
    BookList = 'Home',
    BookDetail = "Detail"
}

export type HomeworkRouteProps = {
    [HomeworkRoutes.BookList]: undefined;
    [HomeworkRoutes.BookDetail]: undefined;
    [HomeworkRoutes.App]: undefined;
}