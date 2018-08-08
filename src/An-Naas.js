import React, { Component } from 'react'; 
import { Text, View, StyleSheet } from 'react-native';
import { Item, Accordion, Content, Container, } from 'native-base'
import axios from 'axios';

export default class Dua extends Component { 

  state = {
    name: '',
    surah: '',
    text1: [],
    text2: [],
    text3: [],
    text4: [],
    text5: [],
    text6: []
  }

  componentDidMount(){
    axios.get('http://api.alquran.cloud/quran/en.asad')
    .then((ambilData) => {
      var hasil = ambilData.data.data.surahs[113]
      this.setState({
        surah: hasil.englishName,
        name: hasil.name,
        text1: hasil.ayahs[0].text,
        text2: hasil.ayahs[1].text,
        text3: hasil.ayahs[2].text,
        text4: hasil.ayahs[3].text,
        text5: hasil.ayahs[4].text
      })
    })
  }

  render() {

    var data = [
      {title: "Ayat 1", content: this.state.text1},
      {title: "Ayat 2", content: this.state.text2},
      {title: "Ayat 3", content: this.state.text3},
      {title: "Ayat 4", content: this.state.text4},
      {title: "Ayat 5", content: this.state.text5},
      {title: "Ayat 6", content: this.state.text6}
    ];

    return ( 
      <Container>
        <View style={styles.judul}>
          <Text style={styles.textSurah}>{this.state.surah}</Text>
          <Text style={styles.text}>بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</Text>
        </View>
        <Content padder>
          <Accordion
            dataArray={data}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textSurah: {
    fontSize: 50,
    marginTop: 15
  },
  text: {
    fontSize: 20,
    marginTop: 15
  },
  textStyle: {
    textAlign: 'center'
  }
})

