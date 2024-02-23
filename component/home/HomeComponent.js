//rfnces
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "react-native-tailwindcss";


const HomeComponent = () => {
  const clickEvent = () => {
    Alert.alert(
      "Alert Title",
      "Button pressed!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/6073424.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.logo}>
          <ImageBackground
            source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/vecteezy_letter-wp-pw-logo-design_18965307-1.jpg")}
            style={styles.logoImage}
          ></ImageBackground>
        </View>
        <Text style={styles.title}>weather app</Text>
        <View>
          <TextInput style={styles.input} placeholder="Enter City"></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={clickEvent}>
          <Text style={{ color: "#fdf0d5", fontSize: 20 }}>search</Text>
        </TouchableOpacity>
        <View style={styles.view}>
          <View style={styles.outputs}>
            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                <ImageBackground
                  source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/location.png")}
                  style={styles.locationImage}
                ></ImageBackground>
                <Text style={styles.subTitle}>location</Text>
              </View>
              <View style={styles.gridItem}>
                <ImageBackground
                  source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/temperature.png")}
                  style={styles.temperature}
                ></ImageBackground>
                <Text style={styles.subTitle}>temperature</Text>
              </View>
              <View style={styles.gridItem}>
                <ImageBackground
                  source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/cloud.png")}
                  style={styles.description}
                ></ImageBackground>
                <Text style={styles.subTitle}>description</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 0,
    justifyContent: "center",
  },
  input: {
    width: 350,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: "#023e8a",
    borderWidth: 2,
    left: 5,
  },
  view: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 60,
    color: "#000022",
  },
  backgroundImage: {
    resizeMode: "cover",
    height: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#03045e",
    width: 200,
    borderRadius: 10,
    left: 110,
  },
  outputs: {
    marginTop: 10,
    width: 390,
    borderColor: "#03045e",
    borderWidth: 1,
    height: 300,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.5)",
    blurRadius: 10,
    padding: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "30%",
    height: 105,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  locationImage: {
    resizeMode: "cover",
    height: "70%",
    width: "70%",
    marginTop: 30,
  },
  temperature: {
    resizeMode: "cover",
    height: "75%",
    width: "75%",
    marginTop: 30,
  },
  description: {
    resizeMode: "cover",
    height: "75%",
    width: "75%",
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
  },
  logo: {
    height: 48,
    width: 48,
    top: 60,
    left: 180,
    borderRadius: 50,
  },
  logoImage: {
    resizeMode: "cover",
    height: 50,
    width: 50,
  },
});