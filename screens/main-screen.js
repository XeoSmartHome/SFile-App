import React, {Component} from "react";
import {
	Text,
	View,
	SafeAreaView,
	StatusBar, Button, TouchableOpacity
} from "react-native";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';


export default class MainScreen extends Component{
	constructor() {
		super();
		this.state = {
			files: []
		};
		this.loadFiles().then();
	}

	async loadFiles(){
		let files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
		//console.warn(files);
		this.setState({files: files})
	}

	async shareDocument(file_name){
		let sharing_available = await Sharing.isAvailableAsync();

		if (!sharing_available)
			return;

		let url = FileSystem.documentDirectory + '/' + file_name;
		let shared = Sharing.shareAsync(url, {})
	}

	render() {
		return(
			<SafeAreaView>
				<StatusBar hidden={true}/>
				<Text style={{fontSize: 24, alignSelf: 'center', padding: 20}}>
					My documents
				</Text>

				{
					this.state.files.map( (file) => (
						<TouchableOpacity
							style={{padding: 10, width: '100%', borderTopWidth: 2}}
							onPress={ () => {
								this.shareDocument(file).then();
							}}
						>
							<Text>
								{file}
							</Text>
						</TouchableOpacity>
					))
				}

				<Button title='refresh' onPress={() => {
					this.loadFiles().then();
				}}/>
			</SafeAreaView>
		)
	}

}
