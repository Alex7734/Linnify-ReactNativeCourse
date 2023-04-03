import { LayoutChangeEvent, StyleSheet, View } from "react-native"

export const MyViews = () => {

    const onLayout = (e: LayoutChangeEvent) => {
        console.log(e.nativeEvent)
    }

    return (
        <View onLayout={onLayout} style={styles.containerFlexColumn}>

        </View>
  
    )
}

const styles = StyleSheet.create({
    containerFlexColumn: {
        flex: 1,
        flexDirection: 'column',
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
      },

      containerFlexRow: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
      },

})