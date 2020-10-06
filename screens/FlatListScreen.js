import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";

const FlatListScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((resData) => setComments(resData));
  }, [comments]);

  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <Text
            style={{
              margin: 10,
              fontSize: 14,
              backgroundColor: "lightblue",
              padding: 10,
            }}
          >
            {item.body}
          </Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default FlatListScreen;
