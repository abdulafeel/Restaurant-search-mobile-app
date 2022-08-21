import React from "react";  
import { View,TextInput,StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onTermSubmit}) =>{
    return (<View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.featherStyle}/>
        <TextInput 
        style={styles.inputStyle} 
        placeholder='Search for your favorite food'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}/>
    </View>);
};

const styles= StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#e0e0e0',
        height:50,
        margin:15,
        borderRadius:5,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18

    },
    featherStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15
}
});

export default SearchBar;