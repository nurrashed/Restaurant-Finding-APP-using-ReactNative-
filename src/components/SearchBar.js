import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name="search" style = {styles.iconStyle} />
            <TextInput
                style = {styles.inputStyle}
                placeholder = 'Search'
                autoCapitalize = 'none'
                autoCorrect = {false}
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'lightgray',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 10, 
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
});

export default SearchBar;