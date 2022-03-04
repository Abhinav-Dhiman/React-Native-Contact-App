import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 160,
    width: 350,
    borderRadius: 10,
  },
  headerView: {
    padding: 5,
    marginTop: 2,
  },
  title: {
    fontSize: 37,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Monofett-Regular',
  },
  subtitle: {
    backgroundColor: '#4640CC',
    fontSize: 20,
    fontFamily: 'DarkerGrotesque-ExtraBold',
    marginTop: 20,
    color: 'white',
    padding: 6,
    borderRadius: 10,
  },
  textInputWrapper: {
    marginVertical: 10,
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
