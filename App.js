import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: 0,
  });

  // useEffect(() => {
  //   storeData();
  // }, [todos]);  ENABLE IN PRODUCTION

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("todos", todos);
    } catch (e) {
      console.log(e);
    }
  };

  const bg = {
    uri: "https://wallpaperaccess.com/full/797202.jpg",
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground resizeMode="cover" source={bg} style={styles.image}>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Your Everyday Todo List
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 25,
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="Add Todo"
            value={todo.title}
            onChangeText={(text) => setTodo({ ...todo, title: text })}
            placeholderTextColor="white"
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
              width: "70%",
              color: "white",
            }}
          />

          <View style={{ width: "20%" }}>
            <Button
              onPress={() => {
                if (!todo.title) return alert("Please enter a todo");
                setTodos((todos) => [
                  ...todos,
                  {
                    id: Date.now().toString(),
                    title: todo.title,
                    description: `Dont forget ${todo.title}`,
                  },
                ]);
                setTodo({ title: "", description: "", priority: 0 });
              }}
              title="ADD"
            />
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <TodoCard title={item.title} description={item.description} />
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
