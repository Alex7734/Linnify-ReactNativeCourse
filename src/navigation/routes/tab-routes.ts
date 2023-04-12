export enum TabRoutes {
    Home = 'Tab-Home',
    Login = 'Tab-Login',
    Books = 'Books',
}

export type TabRouteProps = {
    [TabRoutes.Login]: undefined;
    [TabRoutes.Home]: undefined;    
    [TabRoutes.Books]: undefined;
}