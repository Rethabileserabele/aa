import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { useState  } from 'react';
import Contact from './Contact';
import { Fontisto, Feather, AntDesign, FontAwesome, Entypo, MaterialIcons, Ionicons, Octicons} from '@expo/vector-icons';


export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([])

  function transform(item) {
    return <Contact name = {item.name}  />
  }

  function addContact(){
    setList([{name: name}, ...list])
    setName('')
    
  }

  return (
    <View style={styles.container}>
    <View style={styles.headerView}>
      <View style={styles.header1}>
      <Text style = {styles.TextHeader}>Facebook  
      </Text>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      </View>
    <View style={styles.header2}>
      <TouchableOpacity style={styles.settingsButton}>
        <Entypo name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton}>
        <MaterialIcons name="people-alt" size={24} color="black" />
      </TouchableOpacity>
     <TouchableOpacity style={styles.settingsButton}>
        <AntDesign name="message1" size={24} color="black" />
     </TouchableOpacity>
     <TouchableOpacity style={styles.settingsButton}>
        <Ionicons name="notifications" size={24} color="black" />
     </TouchableOpacity>
     <TouchableOpacity style={styles.settingsButton}>
      <MaterialIcons name="ondemand-video" size={24} color="black" />
     </TouchableOpacity>
    </View>
    </View>
    <View style = {{flexDirection:'row'}}>    
    <Image
              style={styles.profilePic}
              source={require('./assets/pic.jpeg')}
            />
      <View style = {styles.Rectangle1}>
          <TextInput placeholder = 'What`s on your mind' style={styles.input} value = {name} onChangeText = {setName} />
      </View> 
      </View>
      <View style = {styles.inputFields}>

        <View style = {{marginBottom: 15, marginTop: 15}}>
          
        </View>        


        <View style = {{flexDirection: 'row', marginBottom: 10, borderRadius: 20, width: '100%', height: 50, backgroundColor: '#BDBDBD', alignItems: 'center'}}>

          <View style = {{marginRight: 110, marginLeft: 10}}>
            <TouchableOpacity>
              <AntDesign name = "edit" size = {25} color = "black" />
            </TouchableOpacity>
          </View>

          <View style = {{marginRight: 115}}>
            <TouchableOpacity>
              <AntDesign name="message1" size={25} color="black" />
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress =  {addContact}>
            <Ionicons name = "checkmark-sharp" size = {34} color = "black" />
          </TouchableOpacity>
        </View>
      </View>

      {list.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#90A4AE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputFields: {
 
    //marginBottom: 20
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    //marginLeft: 10,
    width: 300,
    height: 30,
    backgroundColor: '#BDBDBD'
  },
  Rectangle1: {
    alignItems: 'center',
    backgroundColor: '#BDBDBD',
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    padding: 10,
  },
  headerView: {
    marginTop: 10,
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
   header1: {
    flexDirection: 'row',
    backgroundColor: '#90A4AE',
    paddingLeft: 2,
    marginRight: 20,
  },
  header2: {
    flexDirection: 'row',
    backgroundColor: '#90A4AE',
    borderColor: '#90A4AE',
    padding: 10,    
  },
  TextHeader: {
    fontSize: 20,
    marginRight: 120, 
    marginLeft: 10,
    marginTop: 15, 
    fontWeight: 'bold', 
    //fontFamily: 'ocr a extended',
    
},
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft: 10,
    //marginTop: 5,
    padding: 25,
  },
  backButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 5,
  },
  profilePic: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 30,
  },
});