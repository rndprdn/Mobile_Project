import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container,Content, Form, Item, Label, Input, Button, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content> 
          <Form style={styles.form}> 
            <Item floatingLabel> 
              <Label> Nama </Label>
              <Input /> 
            </Item> 
            <Item floatingLabel last> 
              <Label> Password </Label>
              <Input secureTextEntry /> 
            </Item>
            <View style={styles.button}>
              <Button onPress={() => this.props.navigation.navigate('Home')} block rounded primary ><Text> Login </Text></Button> 
            </View>
            <View style={styles.regis}>
              <Text>Belum punya akun? <Text style={styles.regisText} onPress={() => this.props.navigation.navigate('Regis')}> Daftar </Text></Text>
            </View>
          </Form> 
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 150
  },
  button: {
    paddingTop: 50
  },
  regis: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 20
  },
  regisText: {
    color: 'blue',
    textDecorationLine: 'underline' 
  }
})