import {Image, Keyboard, StyleSheet, Text, TextInput, View } from "react-native"

const handle = (e: string) => {
    console.log(e)
}

export const MyInputs = () => {

    return (
        <View style={styles.container}>

                <TextInput 
                    style={styles.input}                    
                    placeholder="**********"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handle}
                    secureTextEntry>
                </TextInput>
                <Image source={{ uri: 'https://fastly.picsum.photos/id/878/200/300.jpg?hmac=nSy0W5kdisSxfmRdWV95EFyG0HgfqQzD9D2IkWG76ho' }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 50
    },



    input: {
        flex: 3.5,
        fontSize: 16,
        borderColor: 'black',
        borderRadius: 5,
        borderBottomWidth: 1,
        margin: 5,
        textAlign:'center'
    },

    image: {
        flex: 1,
        maxWidth: 50,
        maxHeight: 50,
        resizeMode: 'contain',
    },

})