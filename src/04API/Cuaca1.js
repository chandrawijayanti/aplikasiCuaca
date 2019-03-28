import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";

export default class Cuaca1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,

      }
    };
  }
getWeather= () => {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    this.state.city +
    "&appid=bdc2f33294d9692d70b176995ab33a1c&units=metric";
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>

            <Header judul={"Prakiraan Cuaca"} />
      <View style={styles.box1}>
          <Text style={styles.textKota}> Masukan Nama Kota </Text>
          <TextInput
                style={styles.textInput}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <TouchableHighlight
            style={styles.buttonStyle}
                          onPress={() => this.getWeather()}
            >
            <Text style={{color: '#fff'}}>Cari</Text>
            
            </TouchableHighlight>
      </View>

      <View style={styles.box2}>
       
        <Text style = {{fontSize: 20}} >
        Kota : { this.state.city}  {"\n"}
        Suhu : { this.state.forecast.temp}  {"\n"}
        Cuaca : { this.state.forecast.main}  {"\n"}
        Deskripsi : { this.state.forecast.description}   {"\n"}
        </Text>
        
      </View>
            <Footer judul={"Copyright @Chandra Wijayanti"} />
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#b3ffb3',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#009900',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },

  box2: {
    flex: 1,
    backgroundColor: '#53c653',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },

  buttonStyle: { 
    backgroundColor: '#5c85d6', 
    height: 40,
    width: 100,
    alignItems: 'center', 
    justifyContent: 'center'
},

textKota: { 
        textAlign: 'center', 
        paddingTop: 15, 
        fontSize: 20 ,
        color: 'black',
    },
    textInput: { 
        height: 40, 
        color: 'white', 
        borderWidth: 1, 
        borderColor: '#000',
        color: 'white' 
    }

});