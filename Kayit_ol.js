import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableHighlight,Image } from 'react-native';
import  {Actions} from "react-native-router-flux";
import  {Router,Scene} from "react-native-router-flux";
import {FontAwesome} from "@expo/vector-icons";
export default class Kayit_ol extends React.Component {

    state = {
        data: '',
        adi:'',
        soyadi:'',
        email:'',
        sifre:'',
        telefon:Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 100) + 1
    };
    constructor(props){

        super(props);
        state={
            kayit_name:'',
            kayit_surname:'',
            url_signup:'',
            giris_basarili:''

        }
    }
    componentDidMount  () {
        fetch('http://jpara.prodrom.com/api/account/register?name='+this.state.adi+'&surname='+this.state.soyadi+'&email='+this.state.email+'&password='+this.state.sifre+'&telephone='+this.state.telefon, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                });
                if(this.state.data.result=='ok'){
                    giris_basarili=this.state.data.user.name+'  '+this.state.data.user.surname;
                    url_signup='http://jpara.prodrom.com/api/account/register?name='+this.state.adi+'&surname='+this.state.soyadi+'&email='+this.state.email+'&password='+this.state.sifre+'&telephone='+this.state.telefon;
                    Actions.sonuc()
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (

            <View>
                <View>
                    <TouchableHighlight style={styles.kayit_ekrani_facebook_buton}>
                        <Text style={styles.kayit_ekrani_facebook_metin}>facebook ile bağlanın</Text>
                    </TouchableHighlight>
                    <Image
                        style={{width: 100, height: 100,alignSelf:'center',marginTop:20}}
                        source={require("./images/user.png")}
                    />
                </View>
                <TouchableHighlight style={styles.kayit_profil_resmi_ekleyin}>
                    <Text style={{color:'gray',marginTop:9,textAlign:'center',fontWeight:'bold'}}>
                        Profil Resmi ekleyin
                    </Text>
                </TouchableHighlight>
                <View style={{marginTop:20,alignItems:'center'}}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                        <TextInput style={styles.kayit_ekrani_input_bolme}
                                   placeholder="Adınız"
                                   onChangeText={(value) => this.setState({adi: value})}
                                   value={this.state.adi}
                        /><Text>      </Text>
                        <TextInput style={styles.kayit_ekrani_input_bolme}
                                   placeholder="Soyadınız"
                                   onChangeText={(value) => this.setState({soyadi: value})}
                                   value={this.state.soyadi}
                        />
                    </View>
                    <View >
                        <TextInput style={styles.kayit_ekrani_input}
                                   placeholder="Şifreniz"
                                   onChangeText={(value) => this.setState({sifre: value})}
                                   value={this.state.sifre}
                                   secureTextEntry={true}
                        />
                        <FontAwesome style={{marginLeft:290,justifyContent:'flex-end'}}  name={"eye"} sice={20} color={"gray"}/>
                    </View>
                    <TextInput style={styles.kayit_ekrani_input}
                               placeholder="E-mail adresiniz"
                               onChangeText={(value) => this.setState({email: value})}
                               value={this.state.email}
                    />
                        <Text>
                        {this.cevap}
                    </Text>
                </View>
                <View>
                    <View
                        style={{
                            marginTop:20,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.5
                        }}
                    />
                    <View>
                        <Text style={{color:'#2AC2A9',fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:12}}>KULLANICI TİPİ</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <TouchableHighlight style={styles.kayit_uclu_buton}>
                                <Text style={styles.kayit_uclu_buton_metin}>Pati Sahibi</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.kayit_uclu_buton}>
                                <Text style={styles.kayit_uclu_buton_metin}>Pati Bakıcı</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.kayit_uclu_buton}>
                                <Text style={styles.kayit_uclu_buton_metin}>İkiside</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop:20,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.5
                        }}
                    />
                    <Text style={styles.kayit_uclu_buton_metin}>Üye olarak <Text style={{color:'#2AC2A9'}}>kullanım koşulları</Text><Text>nı ve <Text style={{color:'#2AC2A9'}}>gizlilik sözleşmemiz</Text><Text>i okuyup kabul etmiş oluyorsunuz </Text></Text></Text>
                </View>
                <View >

                    <TouchableHighlight style={styles.kayit_uye_ol}
                        title="Gönder"
                        onPress={() =>
                        {
                            this.componentDidMount();
                        }}>
                        <Text style={styles.kayit_uye_ol_metin}> Üye Ol</Text>
                    </TouchableHighlight>
                </View>


            </View>
        );
    }
}
const styles=StyleSheet.create({
   kayit_ekrani_facebook_metin:{
       color:'#fff',
       fontSize:20,
       textAlign:'center',
       fontWeight:'bold',
       marginTop:10
   },
   kayit_ekrani_facebook_buton:{
       alignSelf:'center',
       backgroundColor:'#3b5998',
       width:300,
       height:50,
       borderRadius:10,
       marginTop:15
   },
   kayit_ekrani_input:{
       borderBottomColor:'gray',
       borderBottomWidth: 0.7,
       width:300,
       marginTop:15
   },
    kayit_ekrani_input_bolme:{
        borderBottomColor:'gray',
        borderBottomWidth: 0.7,
        width:140,
        marginTop:15,
        justifyContent:'space-between'
    },
    kayit_profil_resmi_ekleyin:{
       alignSelf:'center',
        backgroundColor:'white',
        width:200,
        height:35,
        marginTop:15,
        borderRadius:7,
        borderWidth:1
    },
    kayit_uclu_buton:{
        alignSelf:'center',
        backgroundColor:'white',
        width:120,
        height:35,
        marginTop:10,
        borderRadius:7,
        borderWidth:0.3
    },
    kayit_uclu_buton_metin:{
        color:'gray',
        marginTop:9,
        textAlign:'center',
        fontWeight:'bold'
    },
    kayit_uye_ol:{
        alignSelf:'center',
        backgroundColor:'gray',
        width:350,
        height:50,
        marginTop:30,
        borderRadius:7,
        borderWidth:0.3
    },
    kayit_uye_ol_metin:{
        color:'white',
        marginTop:12,
        textAlign:'center',
        fontWeight:'bold'
    }

});
