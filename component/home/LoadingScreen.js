import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate progress
      setProgress((prevProgress) =>
        prevProgress >= 1 ? 1 : prevProgress + 0.1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 1) {
      // Wait for 1 second before navigating to Home
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    }
  }, [progress, navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/home/gihan/Documents/workingPlace/GDSE/4sem/react native/whether app/weather-app/assets/vecteezy_letter-wp-pw-logo-design_18965307-1.jpg")}
        style={styles.logoImage}
      ></ImageBackground>
      <Text style={styles.title}>weather app</Text>
      <StatusBar hidden />
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" color="#9e2a2b" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  logoImage: {
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

export default LoadingScreen;
