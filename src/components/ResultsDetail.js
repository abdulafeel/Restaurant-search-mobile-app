import React from "react";
import { View,Image, StyleSheet,Text } from "react-native";

const ResultsDetail=({result})=>{
    return(<View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri:result.image_url}}/>
        <Text style={styles.nameStyle}> {result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>);
};

const styles=StyleSheet.create({
    imageStyle:{
        height:120,
        width:250,
        borderRadius:4,
        marginBottom:5
    },
    nameStyle:{
        fontWeight:"bold",
        fontSize:15
    },
    container:{
        marginLeft:15
    }
});

export default ResultsDetail;