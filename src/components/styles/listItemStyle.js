import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    flexDirection: 'row',
    elevation: 7,
    marginVertical: 20,
    borderWidth: 0.01,
  },
  imageContainer: {
    flex: 1,
    height: height * 0.19,
    marginVertical: -(height * 0.02),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textSection: {
    flex: 2,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  title: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
  },
  titleLeft: {
    flex: 1,
  },
  titleRight: {
    flex: 1,
    alignItems: 'flex-end',
  },

  location: {
    flex: 3,
    justifyContent: 'center',
    paddingRight: 20,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  info: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoItem: {
    backgroundColor: '#F3F3FB',
    padding: 5,
    height: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  textt: {
    fontWeight: '700',
  },

  icon: {
    position: 'absolute',
    padding: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    zIndex: 5,
  },
});
