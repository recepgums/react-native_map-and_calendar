import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Kayit_ol from "./Kayit_ol";
import giris_yap from "./Giris_yap";
import {Router,Scene} from "react-native-router-flux";
import connector from "./connector";
import Sonuc from "./sonuc";
import Rezarvasyonlar from "./rezarvasyonlar"
import Profil from "./profil";
const TabIcon=({selected,title})=>{
    return(
        <Text style={{color:selected ? 'blue' : 'white'}}>{title}</Text>
    );
};
export default class App extends React.Component {
    render() {
        return (
            <Router navigationBarStyle={{backgroundColor:'#2AC2A9',borderWidth:0,borderBottomWidth:0}} >
                <Scene key="root">
                    <Scene
                        key="tabbar"
                        tabs
                        tabBarStyle={{backgroundColor:'#2AC2A9'}}
                        hideNavBar={true}

                    >
                        <Scene key="sonuc" title="Harita" hideTitle={true}  component={Sonuc} icon={TabIcon} hideNavBar={true} />
                        <Scene key="rez" title="Rezarvasyonlar" component={Rezarvasyonlar} icon={TabIcon} titleStyle={{color:'white',marginLeft:130}} />

                        <Scene key="profil" title="Profil" component={Profil} titleStyle={{color:'white',marginLeft:155}} icon={TabIcon} />

                    </Scene>
                    <Scene
                        key="connect"
                        component={connector}
                        hideNavBar={1}
                        initial
                    />
                    <Scene
                        key="giris"
                        component={giris_yap}
                        title="GİRİŞ YAP"
                        titleStyle={{paddingLeft:90,borderWidth:0}}
                    />
                    <Scene
                        key="kayit"
                        component={Kayit_ol}
                        title="Üye Olun"
                        titleStyle={{paddingLeft:100,color:'white'}}

                    />

                </Scene>
            </Router>
        );
    }
}
