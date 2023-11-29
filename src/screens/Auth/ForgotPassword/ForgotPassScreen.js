import React from 'react'
import { styles } from './styles'
import { Text } from 'react-native'
import AppHeader from '../../../components/AppHeader/AppHeader'
import { SVG } from '../../../assets/svg'
import { COLORS } from '../../../assets/theme'
const ForgotPassScreen = ({navigation}) => {
  const theme = 'light'
  return (
    <AppHeader
    theme={theme}
    iconLeft={
      <SVG.leftArrow height={25} width={25} fill={COLORS[theme].text} />
    }
    onLeftIconPress={() => {
      navigation.goBack();
    }}
  />
  )
}

export default ForgotPassScreen