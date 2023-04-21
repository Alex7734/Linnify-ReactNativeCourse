import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDebounce } from "../hooks/use-debounce.hook";

export const SearchBar = (search: string) => {
    const [state, setState] = useState<string>(search);
    const debounce = useDebounce(state, 500);

    useEffect(() => {
        console.log('debounce', debounce)
    }, [debounce]);

    const setSearch = (text: string) => {
        console.log('text',text)
        setState(text)
    }

    return(
        <TextInput value={state} style={styles.searchBar} onChangeText={setSearch} placeholder='Search...'/>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        height: 40, 
        width: '100%', 
        paddingHorizontal: 3,
        marginVertical: 10, 
        borderWidth: 2 , 
        backgroundColor: '#fffffa'
    }
})