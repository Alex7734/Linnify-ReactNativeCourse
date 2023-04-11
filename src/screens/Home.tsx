import BookList from "../components/BookList"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRouteProps, AppRoutes } from "../navigation/routes/app-routes"


export const Home = (props: StackScreenProps<AppRouteProps, AppRoutes.Home>) => {
    return (
        <BookList></BookList>
    )
}

