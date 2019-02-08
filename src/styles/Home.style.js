import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    header:{
        height:hp('50%'),
        width:wp('100%')
      },
      background:{
          height:hp('50%'),
          width:wp('100%')
      },
      avatar: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: wp('15%'),
        borderWidth: wp('1%'),
        borderColor: "white",
        marginBottom: hp('5%'),
        alignSelf:'center',
        position: 'absolute',
        marginTop: hp('8%')
      },
      editIcon: {
        width: wp('12%'),
        height: hp('6%'),
        color: '#FFFFFF',
        alignSelf:'flex-end',
        position: 'absolute',
        marginTop: hp('6%'),
        padding: 5
      },
      list: {
        height: hp('50%'),
        width:wp('100%')
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
        alignSelf:'center',
        position: 'absolute',
        marginTop: hp('25%')
      },
      info:{
        fontSize:16,
        color: 'rgba(255, 255, 255, 0.75)',
        alignSelf:'center',
        position: 'absolute',
        marginTop: hp('29%')
      },
      listItem:{
        height:hp('8%'),
        width:wp('90%')
      },
      middleItem: {
          borderColor: "white"
      },
      rightItem: {
          borderColor: "white"
      },
      listContent: {
          fontSize: wp('5%')
      }
});
