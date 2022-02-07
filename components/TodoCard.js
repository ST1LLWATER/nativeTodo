import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoCard = (props) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.descriptionStyle}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionStyle: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default TodoCard;
