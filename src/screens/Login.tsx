import { LoginForm } from "../components/LoginForm"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRouteProps, AppRoutes } from "../navigation/routes/app-routes"

export const Login = (props: StackScreenProps<AppRouteProps, AppRoutes.Login>) => {

    const hanleNavigation = () => {
        props.navigation.navigate(AppRoutes.Home, {title: 'Homeish'})
    }

    return(
        <LoginForm handleNavigation={hanleNavigation} ></LoginForm>
    )
}

