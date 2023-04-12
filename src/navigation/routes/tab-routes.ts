export enum TabRoutes {
    Home = 'Home',
    Login = 'Login',
    Books = 'Books',
}

export type TabRouteProps = {
    [TabRoutes.Login]: undefined;
    [TabRoutes.Home]: undefined;    
    [TabRoutes.Books]: undefined;
}