import * as SpotifyWebApi from 'spotify-web-api-js';

async function getFeatures(playlist, token){
	const spotify = new SpotifyWebApi();
	spotify.setAccessToken(token);

	var tracksId = playlist.map(track => {
		return track.id;
	});

	var features = await spotify.getAudioFeaturesForTracks(tracksId);
	return features;
}