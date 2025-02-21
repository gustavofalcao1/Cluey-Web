import React, { useState, useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { LocaleContext } from "../../../../../components/locale";
import { FirebaseContext } from "/src/api/firebase";
import { ThemeContext, shadow } from "/src/components/theme";

import {
  View,
  CountDown,
  AuthLink,
  AuthLinkText,
  AuthButton,
  AuthTitle,
  AuthText,
  AuthButtonTxtButton
} from '../../../../components';
import { navigate } from '../../../../functions';

const Form = () => {
  const { locale } = useContext(LocaleContext);
  const { user, emailVerify } = useContext(FirebaseContext);
  const { theme } = useContext(ThemeContext);
  const storedRemainingSeconds = parseInt(localStorage.getItem('remainingSeconds'))
  const [loading] = useState(false);
  const [sended, setSended] = useState(storedRemainingSeconds>0?true:false);

  const {goHome} = navigate();

  const handleSendRecovery = () => {
    setSended(!sended);  
  };

  const handleVerify = async () => {
    await emailVerify();
  };

  const handleContinue = async () => {
    goHome();
  };

  useEffect(() => {
    if (user?.emailVerified) {
      goHome();
    } else {
      if (!sended) {
        emailVerify();
        setSended(true);
      }
    }
    const storedRemainingSeconds = parseInt(localStorage.getItem('remainingSeconds'));
    if (storedRemainingSeconds > 0) {
      setSended(true);
    }
  }, []);

  return (
    <View style={{ width: '100%', alignItems: 'flex-start', marginLeft: 25, marginTop: 20 }}>
      <AuthTitle>{locale.verify.content.title}</AuthTitle>
      <View style={{width: '50%', marginTop: 10, marginBottom: 20}}>
        <AuthText theme={theme}>{locale.verify.content.description}</AuthText>
      </View>
      <AuthTitle>{locale.verify.content.alert_}</AuthTitle>
      <View style={{width: '50%', marginTop: 10, marginBottom: 10}}>
        <AuthText theme={theme}>{locale.verify.content.alert_msg}</AuthText>
      </View>
      {sended?<AuthLinkText theme={theme}><CountDown seconds={60} endTime={handleSendRecovery} /></AuthLinkText>
        :<AuthLink style={{marginTop: 15}} onPress={handleVerify}>
          <AuthLinkText theme={theme}>{locale.verify.verify_button.text}</AuthLinkText>
        </AuthLink>}
      <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
        <AuthButton
          theme={theme}
          style={shadow}
          onPress={handleContinue}
        >
          {loading ?
            <ActivityIndicator size="small" color={theme.background} />
            :
            <AuthButtonTxtButton theme={theme}>{locale.verify.continue_button.text}</AuthButtonTxtButton>
          }
        </AuthButton>
      </View>
    </View>
  );
};

export default Form;
