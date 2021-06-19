import { Component } from 'react';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </>
    );
  }
}

export default App;
