import React from 'react';
import { StyleSheet,TextInput, Text, View,Image,TouchableHighlight,Alert,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import MapView from 'react-native-maps';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Modal from "react-native-modal"
import moment from 'moment';
export default class Sonuc extends React.Component {
    state = {
        modalVisible: false,
        todayDate: moment(new Date()).format('YYYY-MM-DD'),
        tarihs:'Tarihler',
        isaret:''

    };
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        const mark={
            [this.state.tarihs]: {selected:true}
        };
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent
                    visible={this.state.modalVisible}
                    onPressOut={() => {this.setModalVisible(false)}}
                >
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        onPressOut={() => {this.setModalVisible(false)}}
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.madal}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}><Text style={styles.kapat}>X</Text>
                                </TouchableHighlight>
                                <Calendar
                                    current={'2019-03-01'}
                                    onDayPress={(day) => this.setState({tarihs: day['dateString'] })}
                                    onDayLongPress={(day) => {console.log('selected day', day)}}
                                    showWeekNumbers={true}
                                    markedDates={mark}
                                />

                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
                <View style={{backgroundColor:'#2AC2A9',height:200,paddingTop:30}}>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <View flexDirection={'row'} justifyContent={'flex-start'}>
                            <View  >
                                <Image
                                    resizeMode='cover'
                                    borderRadius={100}
                                    style={{width: 60, height: 60,alignSelf:'center',borderWidth:0.8,borderColor:'white',marginLeft:20}}
                                    source={require("./images/jessica.jpg")}
                                />
                            </View>
                            <View marginTop={30} marginLeft={10}>
                                <Text style={{color:'white'}}>
                                    {giris_basarili}
                                </Text>
                            </View>
                        </View>
                        <View style={{width: 50, height: 50}} >
                            <Image
                                resizeMode='cover'
                                borderRadius={100}
                                style={{width: 30, height: 30,alignSelf:'center',marginTop:20}}
                                source={require("./images/notification.png")}
                            />
                        </View>
                     </View>
                    <View marginTop={10}>
                        <TextInput placeholder={'Yakınınımda'} style={{height:35,borderRadius:3,color:'white',alignSelf:'center',width:350,borderColor:'red',backgroundColor:'white'}}/>
                    </View>
                    <View flexDirection={'row'} justifyContent={'space-between'} marginTop={10}>
                        <View>
                            <TouchableHighlight style={{borderWidth:1,borderColor:'white',width:140,height:35,borderRadius:5,marginLeft:20}}>
                                <Text style={{textAlign:'center',color:'white',marginTop:5}}>{this.state.tarihs}</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight style={{borderWidth:1,borderColor:'white',width:110,height:35,borderRadius:5,marginRight:60}}>
                                <Text style={{textAlign:'center',color:'white',marginTop:5}}>Bakım Türü</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{marginRight:25}}>
                            <FontAwesome name={"inr"} size={20} color={"white"}/>
                        </View>
                    </View>
                </View>
                <View>
                    <MapView
                        style={{height:500}}
                        initialRegion={{
                            latitude: 41.013740,
                            longitude: 28.94960,
                            latitudeDelta: 0.0522,
                            longitudeDelta: 0.0502,
                        }}>
                        <MapView.Marker
                             onPress={() => {this.setModalVisible(true);}}
                            coordinate={{
                                latitude: 41.013740,
                                longitude: 28.94960,
                            }}
                        >
                            <Image
                                style={styles.stretch}
                                source={require('./images/location-new-2.png')}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            onPress={() => {this.setModalVisible(true);}}
                            coordinate={{
                                latitude: 41.014840,
                                longitude: 28.969660,
                            }}
                        >
                            <Image
                                style={styles.stretch}
                                source={require('./images/location-new-2.png')}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            onPress={() => {this.setModalVisible(true);}}
                            coordinate={{
                                latitude: 41.018840,
                                longitude: 28.929660,
                            }}
                        >
                            <Image
                                style={styles.stretch}
                                source={require('./images/location-new-2.png')}
                            />
                        </MapView.Marker>
                    </MapView>
                </View>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    ust_alan_metin:{
        color:'white',
    },
    kapat:{
        fontSize:20,
        textAlign:'right',
        fontWeight:'bold'
    }
});
