import React, {FC} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {COLORS, SIZES, FONTS, SHADOWS} from '../constants';

export const CircleButton: FC<{imgUrl: any; handlePress: any}> = ({
  imgUrl,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

const RectButton: FC<{
  minWidth: any;
  fontSize: any;
  handlePress: () => void;
}> = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
