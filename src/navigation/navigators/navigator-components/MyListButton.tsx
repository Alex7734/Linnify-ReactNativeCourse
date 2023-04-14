import { Pressable, StyleSheet } from "react-native";
import { ListIcon } from "../../../assets/icons";

export const MyListButton = ({ onPress }: any) => {
    return( 
        <Pressable style={styles.pressableContainer} onPress={onPress}>   
            <ListIcon style={styles.icon} ></ListIcon>   
        </Pressable>
    );  
}

const styles = StyleSheet.create({
    pressableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        width: 30, 
        height: 30
    }
})
