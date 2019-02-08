import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#FFFFFF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    screenTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('80%')
    },
    screenText: {
        color: '#1a1917',
        fontSize: wp('8%'),
        fontWeight: 'bold'
    }
});
