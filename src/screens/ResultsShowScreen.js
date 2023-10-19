import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import { useEffect, useState } from "react";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return result ? (
    <View>
      <Text>ResultsShowScreen</Text>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    // borderRadius: 4,
    // marginBottom: 10,
  },
});
