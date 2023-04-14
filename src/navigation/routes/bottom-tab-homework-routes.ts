export enum TabRoutes {
    Home = 'Tab-Home',
    Profile = 'Tab-Profile',
    Settings = 'Tab-Settings',
}

export type TabRouteProps = {
    [TabRoutes.Profile]: undefined;
    [TabRoutes.Home]: undefined;    
    [TabRoutes.Settings]: undefined;
}