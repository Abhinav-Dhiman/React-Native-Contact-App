import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  logo: {
    height: 200,
    width: 400,
    alignSelf: 'center',
  },
  headerWrapper: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'DarkerGrotesque-ExtraBold',
    fontSize: 35,
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Roboto-Medium',
    color: 'orange',
  },
  inputTextWrapper: {
    padding: 10,
    marginVertical: 5,
  },
  bottomWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomText: {
    color: 'black',
    fontSize: 15,
  },
  linkBtn: {
    fontWeight: '900',
    color: 'red',
    marginLeft: 20,
  },
});
