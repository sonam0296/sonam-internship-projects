import {Text, View,Image,TextInput,ScrollView} from "react-native";
import React from 'react';



export const TestComponent = () => {

    return(
        <ScrollView>
            {/*radtion type*/}
            <View style={{marginLeft:10,marginRight:10}}>
                <Text>Radiation Type</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        paddingLeft:5,
                        paddingRight:5,
                        marginTop:5
                    }}
                    defaultValue="You can type in me"
                />
            </View>
            <Text>Some text</Text>
            <View>
                <Text>Some more text</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="You can type in me"
            />
        </ScrollView>
    )
}


