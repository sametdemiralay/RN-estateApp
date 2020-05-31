import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: '#121947',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    marginBottom: 5,
    fontSize: 21,
    fontWeight: 'bold',
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5,
  },
  textSide: {
    flex: 5,
    alignItems: 'center',
  },
});
