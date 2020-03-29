import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleTextHome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'ivory',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,215,194,1) 0%, rgba(0,212,255,1) 100%)',
  },
  scrollContainer: {
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 150
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor:'#fff',
    paddingLeft:5,
    width:200,
    height:25,
    marginBottom:10,
    marginTop:5,
    color: '#fff'
  },
  dropdown: {
    width:200
  },
  dashboardItem: {
    padding:20,
    margin:10,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'ivory'
  },
  noItems: {
    flex: 1,
    fontSize:20,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  }
});