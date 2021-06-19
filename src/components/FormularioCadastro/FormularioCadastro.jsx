import React, { useState } from 'react';
import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';

export function FormularioCadastro({ submitFn }) {
	const [nome, setNome] = useState('');
	const [sobrenome, setSobrenome] = useState('');
	const [cpf, setCpf] = useState('');
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				submitFn({ nome, sobrenome, cpf, promocoes, novidades });
			}}	
		>
			<TextField
				id="nome"
				label="Nome"
				variant="outlined"
				fullWidth
				margin="normal"
				value={nome}
				onChange={event => setNome(event.target.value)}
			/>
			<TextField
				id="sobrenome"
				label="Sobrenome"
				variant="outlined"
				fullWidth
				margin="normal"
				value={sobrenome}
				onChange={event => setSobrenome(event.target.value)}
			/>
			<TextField
				id="cpf"
				label="CPF"
				variant="outlined"
				fullWidth
				margin="normal"
				value={cpf}
				onChange={event => setCpf(event.target.value)}
			/>
			<FormControlLabel
				label="Promoções"
				control={
					<Switch
						name="promocoes"
						value={promocoes}
						onChange={event => setPromocoes(event.target.value)}
					/>
				}
			/>
			<FormControlLabel
				label="Novidades"
				control={
					<Switch
						name="novidades"
						value={novidades}
						onChange={event => setNovidades(event.target.value)}
					/>
				}
			/>
			<Button type="submit" variant="contained" color="primary">Cadastrar</Button>
		</form>
	);
}
