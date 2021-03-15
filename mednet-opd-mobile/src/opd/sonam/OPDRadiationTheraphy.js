// import { ScrollView } from "react-native"

import {Text, View,Image,TextInput,ScrollView, Button, StyleSheet} from "react-native";
import React from 'react';

export const OPDRadiationTheraphy = () => {
    return(
        <ScrollView>
            {/*radtion type*/}
            <View style={{marginLeft:10,marginRight:10, marginTop:40}}>
                <Text>Radiation Type</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            {/*site type*/}
                <Text>Site</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            
            {/*radiation used*/}
                <Text>Radiation Used</Text>
                <TextInput
                    style={[styles.textInput]}
                />
          
            {/*No of Fx*/}
            
                <Text>No of Fx</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            
            {/*Total dosage*/}
            
                <Text>Total dosage</Text>
                <TextInput
                   style={[styles.textInput]}
                />
            
             {/*Date*/}
             
                <Text>Date</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            
             {/*Facility*/}
             
                <Text>Facility</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            
            {/*Notes*/}
                <Text>Notes</Text>
                <TextInput
                    style={[styles.textInput]}
                />
            
            <Image
                source = {{
                    uri: 'https://cdn1.iconfinder.com/data/icons/project-management-8/500/attachment-512.png' }}
                    style ={{width: 40, height: 40}}
                />
            
            <Text>Attachment</Text>
            
            
       
            <Button title="Save button" />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft:5,
        paddingRight:5,
        marginTop:5
    },
    });