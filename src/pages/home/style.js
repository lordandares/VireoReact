import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const main = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.ORANGE,
  },

  lottieWrapper: {
    flex: 1,
    width: '100%',
  },
});

/*
 Some common Styling Cheat Sheet:

 alignItems: flex-start, flex-end, center, stretch
 alignSelf: auto, flex-start, flex-end, center, stretch
 flexDirection: row, row-reverse, column, column-reverse
 justifyContent: flex-start, flex-end, center, space-between, space-around
 flexWrap: wrap, nowrap
 position: absolute, relative
 paddingHorizontal: number
 paddingVertical: number
 marginHorizontal: number
 marginVertical: number

 textAlign: auto, left, right, center, justify
 textAlignVertical: auto, top, bottom, center

 backfaceVisibility: visible, hidden
 resizeMode: cover, contain, stretch, repeat, center
 
 */
