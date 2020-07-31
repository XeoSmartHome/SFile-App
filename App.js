import React from 'react';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createAppContainer} from "react-navigation";
import MainScreen from "./screens/main-screen";
import EncryptFileScreen from "./screens/encrypt-file-screen";
import DecryptFileScreen from "./screens/decrypt-file-screen";
import {XEO_BLUE} from "./styles";
import {Icon} from "react-native-elements";


const BottomNavigator = createMaterialBottomTabNavigator(
	{
		home:{
			screen: MainScreen,
			navigationOptions:{
				tabBarLabel: 'My files',
				tabBarIcon: ({tintColor}) => (
					<Icon name="home" color={tintColor} size={24} />
				)
			}
		},
		encrypt_file:{
			screen: EncryptFileScreen,
			navigationOptions:{
				tabBarLabel: 'Encrypt file',
				tabBarIcon: ({tintColor}) => (
					<Icon name="lock" color={tintColor} size={24} />
					// <Icon name="dashboard" color={tintColor} size={24} />
				)
			}
		},
		decrypt_file:{
			screen: DecryptFileScreen,
			navigationOptions:{
				tabBarLabel: 'Decrypt file',
				tabBarIcon: ({tintColor}) => (
					<Icon name="lock-open" color={tintColor} size={24} />
				)
			}
		},
	}, {
		shifting: false,
		initialRouteName: 'home',
		order: ['encrypt_file', 'home', 'decrypt_file'],
		barStyleLight:{
			backgroundColor: XEO_BLUE,
			borderTopWidth: 3,
			borderStyle: 'solid',
			borderColor: '#d0cfd0',
			paddingBottom: 10,
		}
	}
);


const Container = createAppContainer(BottomNavigator);

export default Container;
