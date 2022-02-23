import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 200,
    width: 350,
    borderRadius: 10,
  },
  headerView: {
    padding: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Monofett-Regular',
  },
  subtitle: {
    backgroundColor: '#590051',
    fontSize: 20,
    fontFamily: 'DarkerGrotesque-ExtraBold',
    marginTop: 20,
    color: 'white',
    padding: 15,
    borderRadius: 10,
  },
  textInputWrapper: {
    marginBottom: 10,
  },
  demo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  bottomWrapper: {
    flexDirection: 'row',
    padding: 2,
  },
  bottomText: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
  registerButton: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    marginLeft: 10,
    color: 'red',
  },
});
