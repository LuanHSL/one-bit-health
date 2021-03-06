import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  form: {
    width: '100%',
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
    height: 40,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#FF0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,   
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#FFF',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  }
})

export default styles