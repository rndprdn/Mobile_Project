import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container,Content, Form, Item, Label, Input, Button, Text } from 'native-base';

export default class Regis extends Component {
  render() {
    return (
      <Container>
        <Content> 
          <Form style={styles.form}> 
            <Item floatingLabel> 
              <Label> Name </Label>
              <Input /> 
            </Item> 
            <Item floatingLabel> 
              <Label> Username </Label>
              <Input /> 
            </Item> 
            <Item floatingLabel> 
              <Label> Email </Label>
              <Input /> 
            </Item> 
            <Item floatingLabel last> 
              <Label> Password </Label>
              <Input secureTextEntry /> 
            </Item>
            <View style={styles.button}>
              <Button block rounded primary ><Text> Daftar </Text></Button> 
            </View>
            <View style={styles.regis}>
              <Text>Sudah punya akun? <Text style={styles.regisText} onPress={() => this.props.navigation.navigate('Login')}> Login </Text></Text>
            </View>
          </Form> 
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 50
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