import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {ScrollView, StyleSheet, Text, View,FlatList} from 'react-native';



const PATIENTS = [
    {
        id:'1',
        name:'Ashish Kumar Patel',
        mrn:'ABCDEFGHI',

    },
    {
        id:'2',
        name:'Ashish Kumar Patel',
        mrn:'ABCDEFGHI',

    }
];

const textHeader = (title) =>
{
    return(
        <View style={{
            height: 40,
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{color: 'black', textAlign: 'center'}}>{title}</Text>
        </View>
    );

}

const Item = ({ item }) => (
    // <View style={styles.item}>
    //     <Text style={styles.title}>{title}</Text>
    // </View>
<View style={{height: 40, flex: 1, flexDirection: 'row',borderBottomWidth:0.3,borderBottomColor:'grey'}}>
    { textHeader(item.name) }
    { textHeader(item.mrn) }
    { textHeader('') }
    { textHeader('') }
    { textHeader('') }
    { textHeader('') }
</View>


);

export const OPDScreen = () => {

    const renderItem = ({ item }) => (
        <Item item={item} />
    );



    const intputHeader = () =>{

    }

    return (
        <View style={styles.container}>

            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{height: 40, flex: 1, flexDirection: 'row', backgroundColor: '#f3f3f3'}}>
                    { textHeader('Patient Name') }
                    { textHeader('MRN') }
                    { textHeader('REG. NO.') }
                    { textHeader('REG. DT.') }
                    { textHeader('TRAIGE') }
                    { textHeader('INITIAL ASSESSMENT') }
                </View>
                <FlatList
                    data={PATIENTS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
});
