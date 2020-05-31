import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: width * 0.05,
    paddingHorizontal: width * 0.05,
    marginTop: -50,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 7,
  },

  icon: {
    paddingTop: 10,
  },

  titleSection: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 17,
  },

  infoSection: {
    marginTop: 3,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoItem: {
    backgroundColor: '#F3F3FB',
    paddingVertical: 5,
    paddingHorizontal:10,
    height: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    marginRight: 10,
  },
  textt: {
    fontWeight: '700',
  },

  infoLargeSection: {
    paddingVertical: 10,
    marginRight: 30,
    borderBottomWidth: 0.5,
  },

  titleSectionFact: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  bottomSection: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  bottomSectionItem: {
    height: 60,
    width: width * 0.35,
    flexDirection: 'row',
    marginRight: width * 0.05,
  },
  bottomItem: {
    paddingRight: 5
  },
  bottomItemTitle:{
    fontWeight: "bold"
  },
  bottomItemPar:{
    fontSize: 10
  }
});
