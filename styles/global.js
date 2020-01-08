import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
    padding: 20
  },
  scrollContainer: {
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 150
  },
  input: {
    borderWidth: 1,
    borderBottomColor: '#777',
    paddingLeft:5,
    width:200,
    height:25,
    marginBottom:10,
    marginTop:5
  },
  dropdown: {
    width:200
  },
  dashboardItem: {
    backgroundColor: '#26D61D',
    padding:20,
    margin:10
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