import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultDetail from "./ResultDetail";

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return <ResultDetail result={item}/>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
