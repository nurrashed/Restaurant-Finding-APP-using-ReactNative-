import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
//import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    //console.log(results);
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    

    /* const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) =>{
        console.log('Hi there')
        try{
            const response = await  yelp.get('/search', {
                params: {
                    limit: 50,
                    term : searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }
        catch (err) {
            setErrorMessage('Something went wrong')
            
        }
    };


    // Call searchApi when component is first rendered. This is bad code. 
    //searchApi('pasta') 

    useEffect(() => {
        searchApi('pasta')
    }, []); */

    return (
        <>
            <SearchBar 
                term = {term}
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {/* <Text style = {styles.textStyle}>I am Search Screen</Text> */}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text style = {{marginLeft: 15}}>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList results = {filterResultsByPrice('$')} title = 'Cost Effective'/>
                <ResultsList results = {filterResultsByPrice('$$')} title = 'Bit Pricier'/>
                <ResultsList results = {filterResultsByPrice('$$$')} title = 'Big Spender'/>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
    }
});

export default SearchScreen;