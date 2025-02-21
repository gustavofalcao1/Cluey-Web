import React, { useContext, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Flag from 'react-native-flags';
import PropTypes from 'prop-types';

import { FirebaseContext } from "/src/api/firebase";
import { ThemeContext } from "/src/components/theme";
import { LocaleContext } from "/src/components/locale";

import {
  AlertBox,
  Language,
  ThemeSwitch,
  NotifySwitch,
  SettingsContainer,
  SettingsContent,
  SettingsScrollView,
  SettingsItem,
  SettingsHeaderSection,
  SettingsHeaderTitle,
  SettingsWideButton,
  SettingsDivider,
  SettingsSection,
  SettingsDiv,
  SettingsTitle,
  SettingsText
} from '../../../../components';

const Settings = () => {
  const {user, editNotify, editTheme, signOut} = useContext(FirebaseContext);
  const {locale} = useContext(LocaleContext);
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [vLogout, setVLogout] = useState(false);
  const [vLanguage, setVLanguage] = useState(false);

  const handleLanguage = () => {
    setVLanguage(!vLanguage);
  };

  const handleLogout = () => {
    const options = {
      message1: locale.alert.logout.message,
      onConfirm: async () => {
        try {
          await signOut();
          window.location.reload();
        } catch (error) {
          alert(error);
        }
        setVLogout(false);
      },
      messageConfirm: locale.alert.yes,
      onCancel: () => {
        setVLogout(false);
      },
      messageCancel: locale.alert.no
    };
    setData(options);
    setVLogout(true);
  };
  
  const toggleSwitchTheme = (value) => {
    toggleTheme(value);
    editTheme(value);
  };

  const toggleSwitchNotify = async (value) => {
    await editNotify(value);
  };

  const handleAccount = () => {
    window.open('/account', '_blank');
  };

  return (
    <SettingsContainer>
      {vLogout?<AlertBox data={data} />:null}
      <SettingsContent>
        <SettingsScrollView showsVerticalScrollIndicator={false}>
          <SettingsItem theme={theme}>
            <SettingsHeaderSection>
              <SettingsHeaderTitle theme={theme}>{locale.settings.account.title}</SettingsHeaderTitle>
              <EvilIcons name="external-link" style={{marginHorizontal: 4}} size={22} color={theme.text} />
            </SettingsHeaderSection>
            <SettingsWideButton theme={theme} onPress={handleAccount}>
              <Ionicons name="person-outline" style={{width: 30}} size={22} color={theme.text} />
              <SettingsSection theme={theme}>
                <SettingsTitle theme={theme}>{user?.displayName}</SettingsTitle>
                <SettingsDiv>
                  <SettingsText theme={theme}>{user?.email}</SettingsText>
                </SettingsDiv>
              </SettingsSection>
            </SettingsWideButton>
            <SettingsDivider theme={theme} />
          </SettingsItem>
          <SettingsItem theme={theme}>
            <SettingsHeaderTitle theme={theme}>{locale.settings.preferences.title}</SettingsHeaderTitle>
            <SettingsWideButton theme={theme} onPress={toggleSwitchNotify}>
              <Ionicons name="notifications-outline" style={{width: 30}} size={24} color={theme.text} />
              <SettingsSection theme={theme}>
                <SettingsTitle theme={theme}>{locale.settings.notify.title}</SettingsTitle>
                <SettingsDiv>
                  <NotifySwitch notifyState={user?.notify} circleSize={22} barHeight={15} toggleSwitchNotify={toggleSwitchNotify} />
                </SettingsDiv>
              </SettingsSection>
            </SettingsWideButton>
            <SettingsDivider theme={theme} />
            <SettingsWideButton theme={theme} onPress={handleLanguage}>
              <Ionicons name="language-outline" style={{width: 30}} size={24} color={theme.text} />
              <SettingsSection theme={theme}>
                <SettingsTitle theme={theme}>{locale.language.button.text}</SettingsTitle>
                <SettingsDiv>
                  <SettingsText theme={theme}>{locale.language.name}</SettingsText>
                  <Flag code={locale.language.iso} style={{marginLeft: 5}} size={16} />
                </SettingsDiv>
              </SettingsSection>
            </SettingsWideButton>
            {vLanguage?<Language setVLanguage={setVLanguage} />:<SettingsDivider theme={theme} />}
            <SettingsWideButton theme={theme} onPress={toggleSwitchTheme}>
              <Ionicons name="color-palette-outline" style={{width: 30}} size={24} color={theme.text} />
              <SettingsSection theme={theme}>
                <SettingsTitle theme={theme}>{locale.theme.title}</SettingsTitle>
                <SettingsDiv>
                  <ThemeSwitch themeState={user?.theme} circleSize={22} barHeight={15} toggleSwitchTheme={toggleSwitchTheme} />
                </SettingsDiv>
              </SettingsSection>
            </SettingsWideButton>
            <SettingsDivider theme={theme} />
            <SettingsWideButton theme={theme} onPress={handleLogout}>
              <Ionicons name="log-out-outline" style={{width: 30}} size={24} color={theme.text} />
              <SettingsSection theme={theme}>
                <SettingsTitle theme={theme}>{locale.logout.text}</SettingsTitle>
                <SettingsText theme={theme}>{locale.logout.description}</SettingsText>
              </SettingsSection>
            </SettingsWideButton>
          </SettingsItem>
        </SettingsScrollView>
      </SettingsContent>
    </SettingsContainer>
  );
};

Settings.propTypes = {
  handleSelected: PropTypes.func,
};

export default Settings;
