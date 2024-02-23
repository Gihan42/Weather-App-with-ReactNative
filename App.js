import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeComponent from './component/home/HomeComponent';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>
    //     Open up App.js to start working on wheather app!!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
<HomeComponent/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(2,0,36)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
