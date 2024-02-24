import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  Text,
  StatusBar,
} from "react-native";
import HomeComponent from "./component/home/HomeComponent";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
     setTimeout(() => {
       setLoading(false); 
     }, 2000); 
     }, []);
    
;

  return (
    <View style={styles.container}>
      {loading ? (
        // Show loading indicator while loading is true
        <View style={styles.container}>
          <ImageBackground
            source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/vecteezy_letter-wp-pw-logo-design_18965307-1.jpg")}
            style={styles.logo}
          ></ImageBackground>
          <Text style={styles.title}>weather app</Text>
          <StatusBar hidden />
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" color="#9e2a2b" />
        </View>
      ) : (
        // Render HomeComponent when loading is false
        <HomeComponent />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(2, 0, 36)",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  progressBar: {
    width: "70%",
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  progress: {
    height: "100%",
    backgroundColor: "#023047",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  logo: {
    resizeMode: "cover",
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 50,
    marginTop: 0,
    color: "#000022",
  },
});
