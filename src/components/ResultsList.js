import React from "react";
import { View,StyleSheet,Text,FlatList ,TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from 'react-navigation';



const ResultsList=({title, results, navigation})=>{

    if(!results.length){
        return null;
    }
    return(
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(result)=>result.id}
        renderItem={({item}) =>{
        return ( 
            <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}> 
        <ResultsDetail result={item}/>
        </TouchableOpacity>)
        }}
        />
        
    </View>);
};

const styles=StyleSheet.create({
    titleStyle:
    {
        fontSize:20,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
},
container:{
    marginTop:10
}});

export default withNavigation(ResultsList);