import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold:{
    fontWeight: 'bold',
  },

  title:{
    fontSize: 26,
    marginBottom: 5,
    marginTop: 15,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#737380',
    marginBottom: 24,
  },

  incidentList: {
    marginTop: 0,
  },    

  incident:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 0,
    fontSize: 15,
    marginBottom: 10,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText:{
    color:'#FFBB00',
    fontSize: 15,
    fontWeight: 'bold',
  }


});