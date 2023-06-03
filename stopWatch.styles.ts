import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'peachpuff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: '900',
    color: 'plum',
  },
  footer: {
    flexDirection: 'row',
    margin: '10%',
  },
  fontSize: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  start: {
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 10,
    padding: 6,
    marginBottom: '10%',
    backgroundColor: 'lightgreen',
    width: '100%',
  },
  stop: {
    borderColor: 'magenta',
    borderWidth: 3,
    borderRadius: 10,
    padding: 6,
    marginBottom: '10%',
    backgroundColor: 'orange',
    width: '100%',
  },
  reset: {
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 10,
    padding: 6,
    marginBottom: '10%',
    backgroundColor: 'lightblue',
    width: '100%',
  },
  flex: {
    flexDirection: 'row',
  },
  space: {
    paddingHorizontal: '10%',
    color: 'blue',
  },
  timeLapse: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
