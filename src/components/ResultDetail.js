import { Image, StyleSheet, Text, View } from "react-native";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom:10
  },
  name: {
    fontWeight: "bold",
  },
});
