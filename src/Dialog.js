import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogBox(props) {
  const [ids, setIds] = useState('');
  var hasPlaylist = props.playlist.length !== 0;

  useEffect(() => {
  	if(props.playlist.length !== 0) extractIds(props.playlist);
  	hasPlaylist = props.playlist.length !== 0;
  })

  function extractIds(playlist){
  	var tracksId = playlist.map(track => {
		return track.id;
	});

	setIds(JSON.stringify(tracksId));
  }

  function onChange (e){
  	setIds(e.target.value);
  } 

  return (
    <div>
      <Dialog  open={props.open} onClose={props.toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{!hasPlaylist && "Inserir IDs"} {hasPlaylist && "Copiar IDs"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {!hasPlaylist && "Insira as IDs das musicas para visualizar"} {hasPlaylist && "Copie as IDs das musicas e analise no Colab"}
          </DialogContentText>
          <TextField
          	style={{minWidth: 350}}
            autoFocus
            variant="outlined" 
            margin="dense"
            id="idList"
            label="Lista de IDS"
            type="text"
            onChange={onChange}
            fullWidth
            value={ids}
            disabled={props.playlist.length !== 0}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.toggle} color="primary">
            Fechar
          </Button>
          {!hasPlaylist && <Button onClick={() => props.load(ids)} color="primary">
            Enviar
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}