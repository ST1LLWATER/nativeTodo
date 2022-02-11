import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoCard = (props) => {
  return (
    <View style={styles.todoContainerStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.descriptionStyle}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainerStyle: {
    borderBottomWidth: 1,
    borderColor: "white",
    marginBottom: 20,
    color: "white",
  },
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  descriptionStyle: {
    fontSize: 15,
    color: "white",
    fontWeight: "900",
    marginBottom: 10,
  },
});

export default TodoCard;
