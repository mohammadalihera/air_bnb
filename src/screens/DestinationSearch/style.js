import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical:15
  },
  iconContainer: {
    color:'black',
    backgroundColor:'#d4d4d4',
    padding:8,
    borderRadius:15,
    marginRight:15
  },
  locationText: {
   fontSize:16,
   color:'black',
   fontWeight:"600"
  }
  
});

export default styles;
