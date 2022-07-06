import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Foundation';
import {dimension} from './src/utils';

const App = () => {
  return (
    <>
      <View
        style={{
          height: dimension.height,
          width: dimension.width,
        }}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('./images/image1.png')}>
          <View
            style={{
              height: dimension.height,
              width: dimension.width,
              backgroundColor: 'rgba(3, 3, 5, 0.75)',

              paddingTop: dimension.height * 0.05,
              alignSelf: 'center',
              alignItems: 'center',

              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('./images/image2.png')}
              style={{
                height: '20%',
                resizeMode: 'cover',
                width: '40%',
              }}></Image>
            <Text
              style={{
                color: 'rgba(235, 194, 42, 1)',

                width: dimension.width * 0.43,
                fontSize: RFValue(30),
                fontFamily: 'Montserrat-Bold',
                fontStyle: 'normal',
                letterSpacing: 6,

                fontWeight: '600',
                textAlign: 'center',
                marginTop: dimension.height * 0.02,
              }}>
              FANBALL
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                paddingLeft: 15,
                width: dimension.width * 0.8,

                borderRadius: 100,
                alignItems: 'center',

                marginTop: dimension.height * 0.03,
                flexDirection: 'row',
              }}>
              <Icon name="edit" size={25} color="rgba(0, 0, 0, 1)" />
              <TextInput
                style={{
                  height: dimension.height * 0.07,
                  width: dimension.width * 0.6,

                  padding: dimension.height * 0.01,

                  borderRadius: 40,
                }}
                placeholder="Enter refferal code (OPTIONAL)"
                keyboardType="default"
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                paddingLeft: 20,
                width: dimension.width * 0.8,

                borderRadius: 100,
                alignItems: 'center',

                marginTop: dimension.height * 0.03,
                flexDirection: 'row',
              }}>
              <Icon2 name="telephone" size={26} color="rgba(0, 0, 0, 1)" />
              <TextInput
                style={{
                  height: dimension.height * 0.07,
                  width: dimension.width * 0.6,

                  padding: dimension.height * 0.01,

                  borderRadius: 40,
                }}
                placeholder="Mobile"
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              style={{
                height: dimension.height * 0.06,
                width: dimension.width * 0.38,
                alignItems: 'center',

                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(235, 194, 42, 1)',
                borderRadius: 50,
                marginTop: dimension.height * 0.09,
              }}>
              <Text style={{fontSize: RFValue(20), fontWeight: 'bold'}}>
                Get OTP
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: '#FFFFFF',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: RFValue(16),
                lineHeight: RFValue(17),
                textAlign: 'right',
                marginTop: dimension.height * 0.05,
              }}>
              Or sign in with
            </Text>
            <Image
              source={require('./images/image3.png')}
              style={{
                height: '8%',
                resizeMode: 'cover',
                width: '11%',
                marginTop: dimension.height * 0.05,
              }}></Image>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default App;
