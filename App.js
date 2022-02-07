import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <View style={{ padding: 50 }}>
      <Text style={{ fontSize: 25, marginBottom: 30 }}>
        Your Everyday Todo List
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 30,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Add Todo"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "70%",
          }}
        />
        <View style={{ width: "20%" }}>
          <Button
            onPress={() => {
              setTodos([
                ...todos,
                {
                  title: "New Todo",
                  description: "New Description",
                },
              ]);
            }}
            title="ADD"
          />
        </View>
      </View>
      {todos.map((val, index) => (
        <TodoCard key={index} title={val.title} description={val.description} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
