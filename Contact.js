import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState  } from 'react';

export default function Contact({name}) {
const [price2, setPrice] = useState(0);
 function ADanItem(){
    setPrice(1 + price2)
  }
  return (
    <View style={styles.container}>
        <Text>
          {name}
        </Text>
      <Button title = "Like"  onPress={ADanItem} />
      <Text> {price2} likes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD',
        width: '97%',
        borderRadius: 7,
        padding: 15,
        marginBottom: 5,
    }
});