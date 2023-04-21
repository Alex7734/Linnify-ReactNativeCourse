export enum TabRoutes {
    Home = 'Top-Home',
    Login = 'Top-Login',
}

export type TabRouteProps = {
    [TabRoutes.Login]: undefined;
    [TabRoutes.Home]: undefined;    
}