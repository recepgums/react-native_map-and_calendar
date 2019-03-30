import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableHighlight,ImageBackground,Alert } from 'react-native';
import  {Actions} from "react-native-router-flux";
import {FontAwesome} from "@expo/vector-icons";
import  {Router,Scene} from "react-native-router-flux";
export default class giris_yap extends React.Component {
    state={
        data:'',
        kullanici_adi:'',
        sifre:'',
        gizli_mi:true,
        sayac:0
    }
    constructor(props){
        super(props);
        state={
            url_login:'',
            giris_basarili:'',
            kullanici_adii:'',
            kullanici_soyadi:''

        }
    }
    componentDidMount  () {
        fetch('http://jpara.prodrom.com/api/account/login?email='+this.state.kullanici_adi+'&password='+this.state.sifre, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                });
                if(this.state.data.result=="ok") {
                    {
                        kullanici_adii=this.state.data.user.name;
                        kullanici_soyadi=this.state.data.user.surname;
                        giris_basarili=this.state.data.user.name+'  '+this.state.data.user.surname;
                        url_login='http://jpara.prodrom.com/api/account/login?email='+this.state.kullanici_adi+'&password='+this.state.sifre;
                        Actions.sonuc()
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        this.setState.gizli_mi='true';
        return (
            <ImageBackground source={require("./images/ana_ekran.png")} style={{height:1000}}>
                <View style={{marginTop:100}}>
                    <View>
                        <Text style={{marginLeft:30,fontSize:10,color:'white'}}>E-mail adresiniz</Text>
                        <TextInput style={{marginLeft:30,borderBottomColor:'white',borderBottomWidth: 0.7,width:330}}
                                   onChangeText={(value) => this.setState({kullanici_adi: value})}
                                   value={this.state.kullanici_adi}
                        />
                        <View>
                            <View >
                                <FontAwesome style={{color:'white',marginLeft:330,marginTop:20,justifyContent:'flex-end'}} name="eye" size={20} color="white"/>
                            </View>
                            <View >
                                <TextInput secureTextEntry={this.state.gizli_mi}  style={{justifyContent:'flex-start',marginLeft:30,borderBottomColor:'white',borderBottomWidth: 0.7,width:330,color:'white'}}
                                           placeholder="Şifre"
                                           placeholderTextColor="#fff"
                                           onChangeText={(value) => this.setState({sifre: value})}
                                           value={this.state.sifre}
                                />
                            </View>
                        </View>
                    </View>
                    <View >
                        <Text style={{textDecorationLine:'underline',textAlign:'center',color:'white',marginTop:20}} onPress={()=>{
                            Alert.alert("Şifremi unuttum ekranı");
                        }}>Şifremi Unuttum</Text>

                        <TouchableHighlight style={styles.giris_ekrani_giris_buton}>
                            <Text style={styles.giris_yap_buton_metin} onPress={()=>this.componentDidMount()}>Giriş Yap</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.facebook} onPress={()=>Alert.alert("facebook giriş ekanı")}>
                            <Text style={styles.facebook_buton_metin}>facebook ile bağlanın</Text>
                        </TouchableHighlight>
                        <Text  onPress={() =>
                        {
                            Actions.kayit()
                        }
                        } style={styles.giris_ekrani_kayit_ol_metin}>Hemen kayıt ol</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
module.export=giris_yap;
export {giris_yap};
const styles=StyleSheet.create({
    giris_ekrani_giris_buton:{
        alignSelf:'center',
        width:300,
        backgroundColor:'#fff',
        height:50,
        borderRadius:10,
        marginTop:20
    },
    giris_yap_buton_metin:{
        color:'#2AC2A9',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        marginTop:10
    },
    facebook:{
        alignSelf:'center',
        backgroundColor:'#3b5998',
        width:300,
        height:50,
        borderRadius:10,
        marginTop:20
    },
    facebook_buton_metin:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:10
    },
    giris_ekrani_kayit_ol_metin:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginTop:20
    }
});

