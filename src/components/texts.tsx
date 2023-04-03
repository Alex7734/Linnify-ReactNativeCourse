import { LayoutChangeEvent, Linking, StyleSheet, Text, View, Image } from "react-native"

export const MyTexts = () => {
    
    const LoremIpsum = () => {
        return (
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </Text>
        );
    };
      
    const handlePress = () => {
        Linking.openURL('https://www.google.com/');
    };
    

    const onLayout = (e: LayoutChangeEvent) => {
        console.log(e.nativeEvent)
    }


    const photo = require('../assets/photo.jpg')

    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: 'https://fastly.picsum.photos/id/878/200/300.jpg?hmac=nSy0W5kdisSxfmRdWV95EFyG0HgfqQzD9D2IkWG76ho' }} style={styles.image} /> */}
            <Image source={photo} style={styles.image}></Image>
        </View>
  

        // <View onLayout={onLayout} style={styles.containerFlexColumn}>
        //     {/* <Text onPress={handlePress}>Read more...</Text> */}
        //     {/* <Text style={styles.text}>Hello World!</Text> */}
        //     {/* <Text style={styles.text}>
        //         Hello <Text style={styles.redItalic}>World</Text>!
        //     </Text> */}
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
      image: {
        maxWidth: 400,
        maxHeight: 400,
        resizeMode: 'contain',
    },
   
   
    containerFlexColumn: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },


    redItalic: {
        color: 'red',
        fontStyle: 'italic',
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
    },

    // text: {
    //     color: 'green',
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // },
})