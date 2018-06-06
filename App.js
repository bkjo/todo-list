import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions,
  Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ToDo from './ToDo';

const { height, width} = Dimensions.get("window"); // 전체 PAGE SIZE

export default class App extends React.Component {
  state = {
    newToDo: ""
  }
  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> To Do List </Text>
        <View style={styles.card}>
          <TextInput 
              style={styles.input} 
              placeholder={"New To Do"} 
              value={newToDo}
              onChangeText={this._crontolNewToDo}
              placeholderTextColor={"#999"}
              returnKeyType={"done"}
              autoCorrect={false}
            />
            <ScrollView contentContainerStyle={styles.toDos}>
              <ToDo />
            </ScrollView>
        </View>
      </View>
    );
  }

  _crontolNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "400",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width -25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: .5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3,
        
      }
    })
  },
  input: {
    padding: 20,
    // borderBottomColor: "#bbb",
    // borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
