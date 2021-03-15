
import React from 'react';
import {ScrollView, StyleSheet, Text, View,FlatList,Image} from 'react-native';
import {Dimensions} from "react-native-web";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const PatientDetailScreen = () => {

    const renderSubMenuItem = (title) =>{
        return ( <View style={{marginLeft:10,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:'green',width:10,height:10}}></View>
            <Text style={{marginLeft:5,color:'white'}}>{title}</Text>
        </View>);
    }

    const renderVitalComponent = (title) =>{
        return(<View style={{ width:110,flexDirection:'row',marginTop:5,marginBottom:5}}>
            <Text style={{fontSize:12,color:'#cccccc'}}>{title}:</Text>
            <View style={{borderBottomWidth:1,borderColor:'#cccccc',marginBottom:5,width:50,padding:0}}>
                <Text style={{fontSize:12,color:'#cccccc'}}> </Text>
            </View>


        </View>)
    }

    const renderCategoryComponent = (title,active) =>{
       // console.log('---->'+active);
        if(active === true){
            console.log('---->'+active);
            return(<View style={{ flexDirection:'row',marginTop:2,paddingLeft:15,paddingRight:15,paddingTop:5,backgroundColor:'#e3f4f9',borderColor:'#cccccc',borderWidth:1}}>
                <Image style={{width:16,height: 16, alignItems:'center',justifyContent:'center'}} source={require("./../../assets/medical_record.png")}/>
                <Text style={{fontSize:14,color:'#959595',alignItems:'center',justifyContent:'center'}}>{title}</Text>
            </View>)
        }else {
            console.log('---->'+active);
            return(<View style={{ flexDirection:'row',marginTop:2,paddingLeft:15,paddingRight:15,paddingTop:5,borderBottomColor:'#cccccc',borderBottomWidth:1,backgroundColor:'#ffffff'}}>
                <Image style={{width:16,height: 16, alignItems:'center',justifyContent:'center'}} source={require("./../../assets/medical_record.png")}/>
                <Text style={{fontSize:14,color:'#959595',alignItems:'center',justifyContent:'center'}}>{title}</Text>
            </View>)
        }

    }


    return (
        <View style={styles.container}>

            <View style={{flex: 1,height: SCREEN_HEIGHT,width:1024, backgroundColor: '#fff',flexDirection:'row'}}>
                <View style={{width:200, height: 768, backgroundColor:'#05192e'}}>
                <View>
                        <View style={{ justifyContent:'center', alignItems:'center'}}>
                            <Image style={{width:50,height: 50,borderRadius:20, marginTop:5, alignItems:'center'}} source={require("./../../assets/profile_pic.png")}/>
                        </View>
                        <View style={{ justifyContent:'center', alignItems:'center',marginTop:8}}>
                            <Text style={{color:'white'}}>Mrs. KK IYYERRRr</Text>
                        </View>
                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                            <View style={{ justifyContent:'center', alignItems:'center',marginTop:8}}>
                                <Text style={{color:'white'}}>Mrs. KK IYYERRRr</Text>
                            </View>
                            <View style={{ justifyContent:'center', alignItems:'center',marginTop:8}}>
                                <Text style={{color:'white'}}> | </Text>
                            </View>

                            <View style={{ justifyContent:'center', alignItems:'center',marginTop:8}}>
                                <Text style={{color:'white'}}>F / 20 Yrs</Text>
                            </View>

                        </View>
                        <View style={{ justifyContent:'center', alignItems:'center',marginTop:8}}>
                            <Text style={{color:'white'}}>9960880354</Text>
                        </View>
                        <View style={{ justifyContent:'center', marginBottom:10, alignItems:'center',marginTop:8}}>
                            <Text style={{color:'white'}}>Kozhikode, KERALA India</Text>
                        </View>
                    </View>
                    <ScrollView style={{backgroundColor:'#25394e'}}>
                        <View style={{marginLeft:10, justifyContent:'center',marginTop:8}}>
                            <Text style={{color:'white'}}>Allergies : N/A</Text>
                        </View>
                        <View style={{marginLeft:10, justifyContent:'center',marginTop:8}}>
                            <Text style={{color:'white'}}>Sign HO : N/A</Text>
                        </View>
                        <View style={{height: 1,backgroundColor:'#33475c', marginTop:10}}/>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{width:2,backgroundColor:'red'}}>

                            </View>
                            <View style={{width:'100%'}}>
                            <View style={{borderColor:'#33475c',borderWidth:1, margin:5,padding:5,width:'90%', borderRadius:5,backgroundColor:'#192d42'}}>

                                <View style={{ justifyContent:'center',marginTop:8}}>
                                    <Text style={{color:'white'}}>TRAIGE</Text>
                                </View>
                                {renderSubMenuItem('STANDARD COMPLAINTS')}
                                {renderSubMenuItem('FREE FLOW COMPLAINTS')}
                                {renderSubMenuItem('VITAL')}
                                {renderSubMenuItem('MEDICAL / SURGICAL HISTORY')}
                                {renderSubMenuItem('FAMILY CANCER H/O')}

                            </View>
                                <View style={{borderColor:'#33475c',borderWidth:1, margin:5,padding:5,width:'90%', borderRadius:5,backgroundColor:'#192d42'}}>

                                    <View style={{ justifyContent:'center',marginTop:8}}>
                                        <Text style={{color:'white'}}>INITIAL ASSESSMENT</Text>
                                    </View>
                                    {renderSubMenuItem('HABITS')}
                                    {renderSubMenuItem('OBSTETIC H/O')}
                                    {renderSubMenuItem('ONCO TREATMENT HISTORY')}
                                    {renderSubMenuItem('TREATMENT HISTORY')}

                                </View>
                                <View style={{borderColor:'#33475c',borderWidth:1, margin:5,padding:5,width:'90%', borderRadius:5,backgroundColor:'#192d42'}}>

                                    <View style={{ justifyContent:'center',marginTop:8}}>
                                        <Text style={{color:'white'}}>INITIAL ASSESSMENT</Text>
                                    </View>
                                    {renderSubMenuItem('HABITS')}
                                    {renderSubMenuItem('OBSTETIC H/O')}
                                    {renderSubMenuItem('ONCO TREATMENT HISTORY')}
                                    {renderSubMenuItem('TREATMENT HISTORY')}

                                </View>
                                <View style={{borderColor:'#33475c',borderWidth:1, margin:5,padding:5,width:'90%', borderRadius:5,backgroundColor:'#192d42'}}>

                                    <View style={{ justifyContent:'center',marginTop:8}}>
                                        <Text style={{color:'white'}}>INITIAL ASSESSMENT</Text>
                                    </View>
                                    {renderSubMenuItem('HABITS')}
                                    {renderSubMenuItem('OBSTETIC H/O')}
                                    {renderSubMenuItem('ONCO TREATMENT HISTORY')}
                                    {renderSubMenuItem('TREATMENT HISTORY')}

                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 3, height: 768, width:'100%', backgroundColor:'#fff'}}>

                   <View style={{flexDirection:'row',backgroundColor:'#24394e'}}>
                       <View style={{flex:1,marginTop:4,marginBottom:4}}>
                           <Text style={{fontSize:10,color:'#cccccc'}}>REG.NO.1234 / 09-09-2020</Text>
                       </View>
                       <View style={{flex:1,marginTop:4,marginBottom:4}}>
                           <Text style={{fontSize:10,color:'#cccccc'}}>Dr. Atul Waghmare</Text></View>
                       <View style={{flex:1,marginTop:4,marginBottom:4}}>
                           <Text style={{fontSize:10,color:'#cccccc'}}>Dept:</Text></View>
                       <View style={{flex:1,marginTop:4,marginBottom:4}}>
                           <Text style={{fontSize:10,color:'#cccccc'}}>Ref. By:</Text>
                       </View>

                   </View>
                    <View style={{flexDirection:'row',backgroundColor:'#24394e',paddingLeft:10}}>
                        {renderVitalComponent('PULSE')}
                        {renderVitalComponent('BP SYS')}
                        {renderVitalComponent('BP DIA')}
                        {renderVitalComponent('SPO2')}
                        {renderVitalComponent('TEMP')}
                        {renderVitalComponent('RBS')}
                        {renderVitalComponent('HEIGHT')}

                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'#24394e',paddingLeft:10}}>
                        {renderVitalComponent('WEIGHT')}
                        {renderVitalComponent('BMI')}
                        {renderVitalComponent('BSA')}
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'#fdfdfd',paddingLeft:10}}>
                        {renderCategoryComponent('Complaint & History',false)}
                        {renderCategoryComponent('External Records',false)}
                        {renderCategoryComponent('Examination & Inv.',true)}
                        {renderCategoryComponent('Diag. & Treatment',false)}
                    </View>

                </View>


            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: SCREEN_HEIGHT

    },
});
