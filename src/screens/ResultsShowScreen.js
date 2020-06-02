import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    //console.log(id);
    console.log(result);      


    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    }; 
    useEffect(() =>{
        getResult(id);
    },[]);

    return <View>
        <Text>I am Results Show Screen!</Text>
    </View>
    
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;


// test