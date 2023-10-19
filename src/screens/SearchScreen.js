import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { errorMessage, results, searchApi } = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title={"Cost effective"} />
        <ResultsList results={filterResultsByPrice("$$")} title={"Bit pricer"} />
        <ResultsList results={filterResultsByPrice("$$$")} title={"big expensive"} />
        <ResultsList results={filterResultsByPrice("$$$")} title={"big expensive"} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 10,
    flex: 1,
  },
});

export default SearchScreen;
