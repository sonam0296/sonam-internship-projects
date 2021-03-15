
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  Image,
} from 'react-native';
import {OPDScreen} from "./src/opd/OPDScreen";
import {PatientDetailScreen} from "./src/opd/PaitentDetailScreen";
import { OPDRadiationTheraphy } from './src/opd/sonam/OPDRadiationTheraphy';
import {TestComponent} from "./src/opd/TestComponent";

export default function App() {
  return (
      <>
        <StatusBar
            barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
            backgroundColor="#000"
        />
        <SafeAreaView >

            {/*<OPDScreen/>*/}
            {/*<PatientDetailScreen/>*/}
            {/*<View>*/}
            {/*    <Image source={require("./assets/profile_pic.png")}/>*/}
            {/*</View>*/}
            {/* <TestComponent/> */}
            <OPDRadiationTheraphy/>

        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
