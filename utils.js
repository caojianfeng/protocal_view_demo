import { Dimensions, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

export const px2dp = (px, isInteger) => {
    const dp = (px * deviceWidth) / 375;
    return isInteger ? parseInt(dp, 10) : dp;
};

export const onePix = StyleSheet.hairlineWidth;