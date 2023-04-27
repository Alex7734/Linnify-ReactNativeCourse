import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDebounce } from "../hooks/use-debounce.hook";
import { useSearch } from "../hooks/use-search.hook";
import { data } from "../data/BookListData";

export const SearchBar = (search: string) => {
    // TODO: Main issue (the crash) -> You are not sending this search param. So the default value is {}.
    //  Therefore you'll send the {} to the useSearch. And you are trying to call .toLowerCase on an empty object.
    const [state, setState] = useState<string>(typeof search === 'string' ? search : '')
    const debounce = useDebounce(state, 500);
    const searchResults = useSearch(data, debounce, 'name');
    // TODO: You will have to move the useSearch hook in the book list component so you can actually filter the given data

    useEffect(() => {
    }, [debounce]);

    const setSearch = (text: string) => {
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
