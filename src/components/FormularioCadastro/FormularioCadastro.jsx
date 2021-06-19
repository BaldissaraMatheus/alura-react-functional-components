import React from 'react';
import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';

export function FormularioCadastro() {
	return (
		<form>
			<TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
			<TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
			<TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />
			<FormControlLabel
				label="Promoções"
				control={
					<Switch name="promocoes" defaultChecked />
				}
			/>
			<FormControlLabel
				label="Novidades"
				control={
					<Switch name="novidades" defaultChecked />
				}
			/>
			<Button type="submit" variant="contained" color="primary">Cadastrar</Button>
		</form>
	);
}
