import React, { Component } from "react";
import * as SpotifyWebApi from 'spotify-web-api-js';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import SongCard from "./SongCard.js";
import DialogBox from "./Dialog.js";
import "./App.css";


class SpotifyContent extends Component {
	constructor(props) {
	  super();
	  this.state = {
	  	searchText: '',
	  	searchResult: null,
	  	selectedArr: [],
	  	playlist: [],
	  	openDialog: false,
	  }

	  this.spotify = new SpotifyWebApi();
	  this.spotify.setAccessToken(props.token);
	  this.audio = new Audio();
  }

  playAudio = (url) => {
  	this.audio.pause();
  	this.audio = new Audio(url);
  	this.audio.play();
  }

  onChange = event => {
  	if(event.target.value === "") 
  		this.setState({
  			searchText: '',
  			searchResult: null,
  			selectedArr: [],
  		})

  	else 
	  	this.setState({
	  		searchText: event.target.value
	  	})
  }

  search = async () => {
  	const {searchText} = this.state;
  	if(searchText === "") return;
  	var result = await this.spotify.search(searchText, ['track'], {limit: 5});
  	this.setState({
  		searchResult: result.tracks
  	});
  }

  catchReturn = e => {
  	if(e.key === 'Enter'){
      e.preventDefault(); // Ensure it is only this code that rusn
      this.search();
  	}
  }

  addToPlaylist = () => {
  	const {selectedArr, searchResult, playlist} = this.state;

  	var newArr = selectedArr.map(sel => {
  		return searchResult.items[sel];
  	});

  	newArr = [...newArr, ...playlist];

  	this.setState({
  		playlist: newArr,
  		searchResult: null,
  		selectedArr: [],
  		searchText: '',
  	});
  	console.log(newArr);
  }

  select = (index) => {
  	var selArr = this.state.selectedArr;

  	if(selArr.includes(index)){
  		var arrIndex = selArr.indexOf(index);
			if (arrIndex > -1) {
			  selArr.splice(arrIndex, 1);
			}
  	}

  	else selArr.push(index);

  	this.setState({selectedArr: selArr})
  }

  analyse = async () => {
  	const {playlist} = this.state;
  	//const arrayColumn = (arr, n) => arr.map(x => x[n]);

		var tracksId = playlist.map(track => {
			return track.id;
		});

		console.log('LISTA DE TRACKS ------> ', JSON.stringify(tracksId));

		// var features = await this.spotify.getAudioFeaturesForTracks(tracksId);

		// var arr = []

		// for (let track of features.audio_features){
		// 	let trackArr = [track.danceability, track.energy, track.valence]
		// 	arr.push(trackArr);
		// }

		// var [danceability, energy, valence] = [arrayColumn(arr, 0), arrayColumn(arr, 1), arrayColumn(arr, 2)]
		// var means = {danceability: mean(danceability), energy: mean(energy), valence: mean(valence)};
		// var variances = {danceability: std(danceability), energy: std(energy), valence: std(valence)};
		// var varianceMean = mean(std(danceability), std(energy), std(valence));

		// console.log(arr);
  // 	console.log(danceability, energy, valence)
  // 	console.log(means);
  // 	console.log(variances);
  // 	console.log(varianceMean);

  // 	this.getResult(means, variances, varianceMean);
  }

 //  getKeyByValue(object, value) {
	//   return Object.keys(object).find(key => object[key] === value);
	// }

 //  getResult(means, variances, varianceMean){
 // 		var dance, energy, valence;
 // 		if(variances.danceability > 0.3) dance = "ecletic";
 // 		else if(means.danceability <= 0.4) dance = "low";
 // 		else if(means.danceability > 0.7) dance = "high";
 // 		else dance = "medium";

 // 		switch(dance){
 // 			case 'low':
 // 				console.log("Dançar não é muito a sua praia, você prefere musicas que são pouco dançáveis.");
 // 				break;
 // 			case 'medium':
 // 				console.log("Suas músicas são boas para dançar, mas talvez não seja isso que te atraia nelas.");
 // 				break;
 // 			case 'high':
 // 				console.log("As músicas que você escolheu são perfeitas para dançar, já pode dar uma festa com ela.");
 // 				break;
 // 			case 'ecletic':
 // 				console.log("Sua playlist tem de tudo um pouco. Tem músicas ótimas para dançar e também tem músicas ótimas para ficar só contemplando.")
 // 				break;
 // 			default:
 // 				console.log("Ocorreu algum erro ou sua playlist é boa demais para esse algorítmo analisar.")
 // 		}

 // 		if(variances.energy > 0.3) energy = "ecletic";
 // 		else if(means.energy <= 0.4) energy = "low";
 // 		else if(means.energy > 0.7) energy = "high";
 // 		else energy = "medium";

 // 		switch(energy){
 // 			case 'low':
 // 				console.log("Sua playlist tem musicas bem calmas. São boas para ficar contemplando o pôr-do-sol.");
 // 				break;
 // 			case 'medium':
 // 				console.log("Você gosta das coisas um pouco agitadas. Sua playlsit possivelmente tem um rock aqui e ali...");
 // 				break;
 // 			case 'high':
 // 				console.log("Sua playlist é muito agitada. Provavelmente está cheia de musicas barulhentas para incomodar os vizinhos.");
 // 				break;
 // 			case 'ecletic':
 // 				console.log("Sua playlist tem músicas bem agitadas mas também tem músicas mais calmas.")
 // 				break;
 // 			default:
 // 				console.log("Ocorreu algum erro ou sua playlist é boa demais para esse algorítmo analisar.")
 // 		}

 // 		if(variances.valence > 0.3) valence = "ecletic";
 // 		else if(means.valence <= 0.4) valence = "low";
 // 		else if(means.valence > 0.7) valence = "high";
 // 		else valence = "medium";

 // 		switch(valence){
 // 			case 'low':
 // 				console.log("Essa é sua playlist de bad, certo? Provavelmente tem músicas mais tristes para os seus sábados chuvosos.");
 // 				break;
 // 			case 'medium':
 // 				console.log("Suas musicas são bem equilibradas. Não são completamente negativas mas também não são 100% animadas e felizes. ");
 // 				break;
 // 			case 'high':
 // 				console.log("100% Good Vibes. Sua playlist é composta de músicas alegres, positivas e good vibes. Parabéns :)");
 // 				break;
 // 			case 'ecletic':
 // 				console.log("Sua playlist tem músicas alegres e também tem músicas tristes. É como sol e chuva.")
 // 				break;
 // 			default:
 // 				console.log("Ocorreu algum erro ou sua playlist é boa demais para esse algorítmo analisar.")
 // 		}
	// }

	loadIds = async ids => {
		try{
		ids = JSON.parse(ids);
		var result = await this.spotify.getTracks(ids);
		this.setState({
			playlist: [...result.tracks],
			openDialog: false,
		})

		console.log(result);
		}catch(e){console.log(e);}
	}

  RenderSearch = () => {
		var items = this.state.searchResult.items;
		var selArr = this.state.selectedArr;

		var renderArr = items.map((i, index) => {
			return <SongCard key={i.id} index={index} playAudio={this.playAudio} selected={selArr.includes(index)} selFunction={this.select} track={i}/>
		})

		return renderArr;
	}

	RenderPlaylist = () => {
		var tracks = this.state.playlist;

		var renderArr = tracks.map((i, index) => {
			return <SongCard key={i.id} index={index} playAudio={this.playAudio} selFunction={() => {return}} track={i}/>
		})

		return renderArr;
	}


	toggleDialog = () => {
		this.setState({openDialog: !this.state.openDialog});
	}

	render() {
		const {RenderSearch, RenderPlaylist} = this;
		const {selectedArr, searchText, playlist, openDialog, searchResult} = this.state
	  return (
	    <div className="content">
	    	<DialogBox open={openDialog} toggle={this.toggleDialog} playlist={playlist} load={this.loadIds}/>
	    		<div className="search">
	    			<TextField className="searchInput" label="Pesquisar Música" margin="normal" variant="outlined" 
	    			onKeyPress={this.catchReturn}  
	    			onChange={this.onChange} 
	    			value={searchText}
	    			InputProps={{
	            endAdornment:
	              <InputAdornment position="end">
	                <IconButton onClick={this.search}>
	                	<Icon>search</Icon>
	                </IconButton>
	              </InputAdornment>
            }}
	    			/>
	    			{selectedArr.length > 0 && 
	    				<Button variant="contained" className="addButton" onClick={this.addToPlaylist} color="primary">
	    					{selectedArr.length} Adicionar à playlist
	    				</Button>
	    			}
	    			{(!searchResult && playlist.length > 0) && 
	    				<Button variant="contained" className="addButton" onClick={this.toggleDialog} color="primary">
	    					Analisar Playlist
	    				</Button>
	    			}
	    			{(!searchResult && playlist.length === 0) && 
	    				<Button variant="contained" className="addButton" onClick={this.toggleDialog} color="primary">
	    					Inserir IDs
	    				</Button>
	    			}
	    		</div>
	    		<div className="searchResult">
	    			{this.state.searchResult && <RenderSearch/> }
	    			{!this.state.searchResult && <RenderPlaylist/>}
	    		</div>
	    </div>
	  );
  }
}
export default SpotifyContent;