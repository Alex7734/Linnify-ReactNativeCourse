import { StackScreenProps } from "@react-navigation/stack"
import { TabRouteProps, TabRoutes } from "../../navigation/routes/bottom-tab-homework-routes"
import { StyleSheet, Text, View } from "react-native"


export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})