import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import "./App.css";

class SongCard extends Component {
	constructor(props) {
		super();
	  	this.state = {
	  	}
  	}

  	shouldComponentUpdate(nextProps){
  		if(this.props.track.id !== nextProps.track.id) return true;
  		else if(this.props.selected !== nextProps.selected) return true;
  		else return false;
  	}

	render() {
		const {track, index, playAudio, selected, selFunction} = this.props;
	  return (
	    <Card className={"songCard " + (selected ? 'selected' : '')}>
		    <CardMedia onClick={() => selFunction(index)} 
		      	className="cardMedia"
		        image={track.album.images[1].url}
		    />
		    <CardContent className="cardContent">
		    	<div className="playButton">
		    		<IconButton disabled={track.preview_url == null} onClick={() => playAudio(track.preview_url)}>
		    			<Icon>play_arrow</Icon>
		    		</IconButton>
		    	</div>
		    	<div className="info">
		    		<Typography variant="body2">{track.name}</Typography>
		    		<Typography variant="body2" color="textSecondary">{track.artists[0].name}</Typography>
		    	</div>
		    </CardContent>
	    </Card>
	  );
  }
}
export default SongCard;