import React, {Component} from "react";
import {
	Button, SafeAreaView,
	StatusBar,
	Text,
	View
} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default class EncryptFileScreen extends Component{
	constructor() {
		super();
	}


	async encryptDocument(){
		let document = await DocumentPicker.getDocumentAsync({copyToCacheDirectory: true, multiple: false});

		if(document.type === 'cancel')
			return;

		console.warn(document.uri);

		await FileSystem.copyAsync({from: document.uri, to: FileSystem.documentDirectory + '/' + document['name'] + '.xsf'})
	}

	render() {
		return(
			<SafeAreaView>
				<StatusBar hidden={true}/>
				<Text style={{fontSize: 26, alignSelf: 'center', padding: 20}}>
					Encrypt document
				</Text>

				<Button title='encrypt document' onPress={() => {
					this.encryptDocument().then();
				}}/>
			</SafeAreaView>
		)
	}

}
