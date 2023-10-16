import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { errorMessage, results, searchApi } = useResults();

  const filterResultsByPrice = (price) => {
    
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      <Text>Search Screen</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title={'Cost effective'}/>
      <ResultsList results={filterResultsByPrice('$$')} title={'Bit pricer'}/>
      <ResultsList results={filterResultsByPrice('$$$')} title={'big expensive'}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
