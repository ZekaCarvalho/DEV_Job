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

  incident:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 30,
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

  contactBox:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 0
  },

  detailsTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },

  detailsDescription:{
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#FFF032',
    borderRadius: 8,
    height: 50,
    width: '48%',

  }

});