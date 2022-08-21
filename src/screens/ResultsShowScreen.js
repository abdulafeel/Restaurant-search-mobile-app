import React, {useEffect, useState} from "react";
import { View,Text,StyleSheet,Image,FlatList,ScrollView} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen=({navigation})=>{
    const id= navigation.getParam('id');
    const [result,setResult]=useState(null);


    const getResult =async id=>{
        const response= await yelp.get(`/${id}`);
        setResult(response.data);
    }

useEffect(()=>{
getResult(id);},[]
);

if(!result){
    return null;
}
    return (<View>
        <Text style={styles.textStyle}>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.imageStyle} source={{uri:item}}/>
        }}

        
        
        
        />
    </View>);
};

const styles=StyleSheet.create({
    imageStyle:{
    height:170,
    width:300,
marginBottom:15},
    textStyle:{
        fontSize:18,
        marginBottom:15
    }
});

export default ResultsShowScreen;