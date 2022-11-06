import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'grey',
    borderBottomWidth:1
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 30,
    border:'grey',
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10,
    fontSize:20
  },
});

export default styles;
