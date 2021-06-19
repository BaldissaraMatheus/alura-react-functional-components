import { Component } from 'react';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core/';
import 'fontsource-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center"
        >
          Formulário de cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
