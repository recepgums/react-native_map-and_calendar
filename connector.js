import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableHighlight,Alert,Button } from 'react-native';
import  {Actions} from "react-native-router-flux";
import giris_yap from "./Giris_yap";
import  {Router,Scene} from "react-native-router-flux";
export default class connector extends React.Component {

    render() {
        return (
        <ImageBackground source={require("./images/ana_ekran.png")} style={{height:1000}}>
            <View style={{height:1000,marginTop:150}}>
                <View>
                    <Image
                        style={{width: 100, height: 100,alignSelf:'center',paddingTop:100}}
                        source={require("./images/pati.png")}
                    />
                    <Text style={{alignSelf:'center',fontSize:50,color:'#fff'}} > KomşuPati</Text>
                    <Text style={{marginTop:30,alignSelf:'center',fontSize:20,color:'#fff'}} > En Güvenilir Pati Adresi</Text>
                    <View style={{marginBottom:35,borderRadius:40,marginTop:30}}  >
                        <TouchableHighlight  style={styles.uye_girisi_buton}
                                             onPress={()=>
                                                 Actions.kayit()}
                        ><Text style={styles.uye_ol}>Üye Ol</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View >
                    <TouchableHighlight style={styles.uye_ol_buton}
                                        onPress={()=>
                                            Actions.giris()
                                        }>
                        <Text style={styles.uye_ol}>Üye girişi</Text>
                    </TouchableHighlight>
                </View>
                <View style={{marginTop:35}}>
                    <TouchableHighlight style={styles.facebook}
                                        onPress={()=>
                                            Alert.alert("facebook giriş ekanı")
                                        }>
                        <Text style={{color:'#fff',fontSize:20,textAlign:'center',fontWeight:'bold',marginTop:10}}>facebook ile bağlanın</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
        );
    }
}
const styles=StyleSheet.create({
    uye_ol_buton:{
        alignSelf:'center',
        width:300,
        backgroundColor:'#fff',
        height:50,
        opacity:.7,
        borderRadius:10
    },
    uye_ol:{
        color:'#2AC2A9',
        fontSize:20,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop:10
    },
    uye_girisi_buton:{
        alignSelf:'center',
        backgroundColor:'#fff',
        height:50,
        width:300,
        borderRadius:10
    },
    facebook:{
        alignSelf:'center',
        backgroundColor:'#3b5998',
        width:300,
        height:50,
        borderRadius:10
    }
});
