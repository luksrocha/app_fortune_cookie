import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/assets/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.resetaBiscoito = this.resetaBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles',
      'O bom-senso vale mais do que muito connhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreria para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/assets/biscoitoAberto.png')
    })
  }

  resetaBiscoito() {
    this.setState({
      textoFrase: '',
      img: require('./src/assets/biscoito.png')
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.mt]} onPress={this.resetaBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Restaurar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mt: {
    marginTop: 20
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;