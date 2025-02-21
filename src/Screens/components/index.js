import styled from 'styled-components/native';
import styledHTML, { keyframes } from 'styled-components';

import AlertBox from './AlertBox';
import PatchNotes from './PatchNotes';
import Preferences from './Preferences';
import Language from './Language';
import ThemeSwitch from './ThemeSwitch';
import NotifySwitch from './NotifySwitch';
import CustomTextInput from './CustomTextInput';
import PickerList from './PickerList';
import CountDown from './CountDown';
import Payment from './Payment';
import StatusPicker from './StatusPicker';

export { AlertBox, PatchNotes, Preferences, Language, ThemeSwitch, NotifySwitch, CustomTextInput, PickerList, CountDown, Payment, StatusPicker };

const generateBGColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};
const generateTextColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

// Global
export const Button = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const View = styled.View``;
export const LinkButton = styled.TouchableOpacity``;

// Loading
export const LoadingContainer = styled.View`
  flex: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  25% { opacity: 0.5; }
  50% { opacity: 0; }
  75% { opacity: 0.5; }
  100% { opacity: 1; }

`;
export const LoadingText = styledHTML.span`
  animation: ${blinkAnimation} 1s infinite;
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

// Home
export const HomeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

// Language
export const LanguageContainer = styled.View`
  width: 100%;
  margin-left: 2px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.border};
`;
export const LanguageButton = styled.TouchableOpacity`
  width: 95px;
  height: 95px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const LanguageText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

// StatusPicker
export const StatusPickerContainer = styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
export const StatusPickerButton = styled.TouchableOpacity`
  width: 95px;
  height: 95px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const StatusPickerText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const StatusPickerState = styled.View`
  align-self: center;
  justify-self: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-width: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

// Alert
export const AlertContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgDark};
`;
export const AlertContent = styled.View`
  padding: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
`;
export const AlertSection = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;
export const AlertTitle = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 22px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const AlertMessage = styled.Text`
  font-family: 'Nunito';
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const AlertUser = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const AlertAction = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
export const AlertButton= styled.TouchableOpacity`
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
`;
export const AlertButtonText = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 16px;
  color: ${({ theme }) => theme.withe};
`;

// Preferences
export const PreferencesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.textDark};
`;
export const PreferencesContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
`;
export const PreferencesHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const PreferencesTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 26px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const PreferencesDescription = styled.Text`
  font-family: 'Nunito';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const PreferencesAction = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const PreferencesButton= styled.TouchableOpacity`
  padding: 10px 30px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondary};
`;
export const PreferencesButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: ${({ theme }) => theme.background};
`;
export const PreferencesLinkText = styled.Text`
  font-family: 'Nunito-Medium';
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;
// Focus
export const FocusContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const FocusAction = styled.View`
  justify-content: center;
  align-items: center;
`;
export const FocusButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  margin: 10px;
  border-radius: 30px;
  border-width: 2px;
`;
export const FocusButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: ${({ theme }) => theme.background};
`;
export const FocusOtherSection = styled.View`
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const FocusOtherDescription = styled.Text`
  font-family: 'Nunito';
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const FocusOtherInput = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  border-radius: 30px;
`;
export const FocusOtherTextBox = styled.TextInput`
  font-family: 'Nunito-Medium';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 40px;
  padding: 0 20px;
  border-radius: 30px;
  outline-width: 0;
  outline-style: none;
`;
// Interests
export const InterestsContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const InterestsAction = styled.View`
  justify-content: center;
  align-items: center;
`;
export const InterestsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 30px;
  border-width: 2px;
`;
export const InterestsButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: ${({ theme }) => theme.background};
`;

// PathNotes
export const PatchContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.textDark};
`;
export const PatchContent = styled.View`
  width: 70%;
  height: 90%;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;
export const PatchLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const PatchHeader = styled.View`
  width: 100%;
  height: 80px;
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
export const PatchHeaderSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PatchTitle = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 24px;
  margin-left: 30px;
  color: ${({ theme }) => theme.text};
`;
export const PatchBody = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 30px;
`;
export const PatchNoteVersionSection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PatchDiv = styled.Text`
  font-family: 'Nunito-Medium';
  font-size: 24px;
  margin: 0 5px;
  color: ${({ theme }) => theme.textDark};
`;
export const PatchNoteVersion = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20px;
  color: ${({ theme }) => theme.textDark};
`;
export const PatchSection = styled.ScrollView`
  width: 100%;
  flex-direction: column;
  margin-left: 20px;
`;
export const PatchNoteTitles = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;
export const PatchList = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 5px;
`;
export const PatchListItem = styled.Text`
  font-family: 'Nunito-Medium';
  font-size: 18px;
  margin-left: 5px;
  color: ${({ theme }) => theme.text};
`;
export const PatchFooter = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PatchReadMoreButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  margin: 0 40px;
  border-radius: 5px;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;
export const PatchConfirmButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px 20px;
  margin: 0 40px;
  border-radius: 5px;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
`;
export const PatchButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

// Chat
export const ChatContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
// Header Chat
export const HeaderChatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
// Count
export const CountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const CountContent = styled.View`
  margin: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CountTitles = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textDark};
`;
// Back
export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const BackContent = styled.View`
  margin: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const BackTitles = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textDark};
`;
export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

// Presets
export const PresetsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: space-between;
  flex-direction: row;
`;
export const PresetsContent = styled.View`
  flex: 1;
  width: 100%;
  align-self: center;
  justify-content: center;
  flex-direction: column;
`;
export const SuggestionsButton = styled.TouchableOpacity`
  align-self: center;
  align-content: center;
  justify-content: center;
  height: 40px;
  width: auto;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  padding: 0 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
`;
export const SuggestionsText = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
// Suggests
export const SuggestsContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;
export const SuggestsContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: center;
`;
export const SuggestsProfile = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;
export const SuggestsInfor = styled.View`
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-left: 15px;
`;
export const SuggestsText = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

// Plans
export const PlansContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;
export const PlansSection = styled.View`
  width: 100%;
  max-width: 1200px;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;
export const PlansFree = styled.View`
  width: 300px;
  height: 350px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: #55e5cc;
`;
export const PlansPersonal = styled.View`
  width: 300px;
  height: 350px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: #ffc3ab;
`;
export const PlansPro = styled.View`
  width: 300px;
  height: 350px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: #ffdf00;
`;
export const PlansHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const PlansTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 26px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const PlansDescription = styled.Text`
  text-align: center;
  font-family: 'Nunito-Medium';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const PlansPriceSetion = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const PlansPriceSpan = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const PlansPriceValue = styled.Text`
  text-align: center;
  font-family: 'Nunito-ExtraBold';
  font-size: 52px;
  color: ${({ theme }) => theme.text};
`;
export const PlansPriceDetail = styled.Text`
  text-align: center;
  font-family: 'Nunito-Medium';
  font-size: 26px;
  margin: 5px;
  color: ${({ theme }) => theme.text};
`;
export const PlansButton = styled.TouchableOpacity`
  align-self: center;
  align-content: center;
  justify-content: center;
  height: 40px;
  width: 200px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.text};
  background-color: ${({ isHovered, theme }) => (isHovered ? theme.background : theme.text)};
  border-radius: 30px;
`;
export const PlansButtonText = styled.Text`
  text-align: center;
  font-family: 'Nunito-Medium';
  font-size: 16px;
  color: ${({ isHovered, theme }) => (isHovered ? theme.text : theme.background)};
`;
export const PlansInfo = styled.Text`
  text-align: center;
  font-family: 'Nunito-Medium';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;
export const PlansInfoContent = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
export const PlansInfoImage = styled.Image`
  width: 900px;
  height: 550px;
`;

// Messages
export const MessagesContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const MessagesContent = styled.View`
  flex-direction: column;
  margin: 10px 10%;
`;
export const MessagesRequest = styled.View`
  max-width: 55%;
  align-self: flex-end;
  padding: 20px;
  border-radius: 10px;
  //background-color: ${generateBGColor()};
  //opacity: 0.5;
  background-color: ${({ theme }) => theme.secondarySoft};
`;
export const MessagesResponse = styled.View`
  max-width: 55%;
  align-self: flex-start;
  padding: 20px;
  border-radius: 10px;
  //background-color: ${generateBGColor()};
  //opacity: 0.5;
  background-color: ${({ theme }) => theme.primarySoft};
`;
export const MessagesUserData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0;
`;
export const MessagesRequestName = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 16px;
  color: ${generateTextColor()};
`;
export const MessagesResponseName = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 16px;
  color: ${generateTextColor()};
`;
export const MessagesDate = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: right;
  font-size: 13px;
  margin-left: 10px;
  color: ${({ theme }) => theme.textDark};
`;
export const MessagesText = styled.Text`
  font-family: 'Nunito-Medium';
  text-align: left;
  font-size: 16px;
  margin-left: 3px;
  color: ${({ theme }) => theme.text};
`;
// Footer
export const FooterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FooterContent = styled.View`
  height: 84px;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
// Footer Info
export const InfoContainer = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const InfoPicture = styled.View`
  justify-content: center;
  align-items: center;
`;
export const InfoState = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  align-self: flex-start;
  border-width: 1px;
  margin-top: 8px;
`;
export const InfoName = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 16px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
`;
// Footer Input
export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.bgInput};
  border-radius: 30px;
  margin: 0 3%;
`;
export const InputTextBox = styled.TextInput`
  font-family: 'Nunito';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 55px;
  padding: 0 20px;
  border-radius: 30px;
  outline-width: 0;
  outline-style: none;
`;
export const InputButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
// Footer Actions
export const ActionsContainer = styled.View`
  flex-direction: row;
`;
export const ActionsButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
// Tools
export const ToolsContainer = styled.View`
  flex: 1;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;
export const ToolsContent = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px;
`;
export const ToolsButton = styled.TouchableOpacity`
  margin: 5px;
`;
export const ToolsButtonText = styled.Text`
  font-family: 'Nunito';
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
// Search
export const ActionSearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.bgInput};
  border-radius: 30px;
`;
export const ActionSearchSearchBox = styled.TextInput`
  font-family: 'Nunito';
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 55px;
  padding: 0 20px;
  border-radius: 30px;
  outline-width: 0;
  outline-style: none;
`;
export const ActionsSearchButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

// Menu
export const MenuContainer = styled.View`
  flex-direction: column;
  align-items: center;
  min-width: 26.41%;
`;
// Hamburguer
export const HamburguerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const HamburguerContent = styled.View`
  flex-direction: column;
  align-items: center;
  width: 505px;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;
// Nav
export const NavContainer = styled.View`
  width: 70px;
  flex-direction: column;
  align-items: center;
`;
export const NavButton = styled.TouchableOpacity`
  width: 70px;
  height: 66px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
export const NavItensButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
// Header Menu
export const HeaderMenuContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 66px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
export const HeaderInforSection = styled.TouchableOpacity`
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 10px;
`;
export const HeaderInfor= styled.View`
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  margin: 0 13px;
  color: ${({ theme }) => theme.text};
`;
export const HeaderDisplayName = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const HeaderUserName = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 14px;
  opacity: 0.7;
  color: ${({ theme }) => theme.text};
`;
export const HeaderButtonSection = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 10px;
`;
export const HeaderButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 13px;
`;
// Chats
export const ChatsContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const ChatsContainer = styled.View`
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const ChatsButtonAdd = styled.TouchableOpacity`
  margin: 0 5px;
  justify-content: center;
  align-items: center;
`;
export const ChatsButton = styled.TouchableOpacity`
  align-self: center;
  align-content: center;
  justify-content: center;
  height: 60px;
  width: 95%;
  border-width: 1px;
  border-width: 1px;
  border-color: ${({ isHovered, theme }) => (isHovered ? theme.border : theme.background)};
  padding: 0 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 20px;
`;
// Item
export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemContent = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-self: center;
`;
export const ItemSection = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 5px;
`;
export const ItemTextSection = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-left: 10px;
`;
export const ItemEditTextInput = styled.TextInput`
  width: 100%;
  font-family: 'Nunito-SemiBold';
  font-size: 18px;
  outline-width: 0;
  outline-style: none;
  color: ${({ theme }) => theme.text};
`;
export const ItemText = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const ItemAction = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-right: 5px;
`;
export const ItemButton = styled.TouchableOpacity``;
// Contacts
export const ContactContainer = styled.View`
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
// Add
export const AddContainer = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;
export const ContactButtons = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactButtonAdd = styled.TouchableOpacity`
  margin: 0 5px;
  justify-content: center;
  align-items: center;
`;
export const AddText = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
// People
export const PeopleContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PeopleContent = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PeopleInput = styled.View`
  width: 95%;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
  margin-top: 5px;
  border-radius: 20px;
`;
export const PeopleTextInput = styled.TextInput`
  font-family: 'Nunito';
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  outline-width: 0;
  outline-style: none;
`;
export const PeopleResult = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 10px;
  margin-bottom: 24px;
`;
export const PeopleSection = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 10px;
`;
export const PeopleAction = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
`;
export const PeopleButton = styled.TouchableOpacity`
  padding: 5px  6px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
export const PeopleText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
// Person
export const PersonContainer = styled.View`
  flex-direction: column;
`;
export const PersonContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const PersonSection = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const PersonPicture = styled.View`
  justify-content: center;
  align-items: center;
`;
export const PersonInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-left: 10px;
`;
export const PersonDisplayName = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
export const PersonUserName = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.textDark};
`;

// Serach
export const SearchContainer = styled.View`
  flex-direction: column;
`;
export const SearchContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const SearchSection = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const SearchPicture = styled.View`
  justify-content: center;
  align-items: center;
`;
export const SearchInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-left: 10px;
`;
export const SearchDisplayName = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const SearchUserName = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.textDark};
`;

// Direct
export const DirectButton = styled.TouchableOpacity`
  align-self: center;
  width: 95%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ isHovered, theme }) => (isHovered ? theme.border : theme.background)};
  padding: 0 10px;
`;
// Direct Item
export const DirectItemContainer = styled.View`
  flex-direction: column;
`;
export const DirectItemContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const DirectItemSection = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const DirectItemPicture = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border-width: 3px;
  border-color: ${({ color }) => color};
`;
export const DirectItemState = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  align-self: flex-start;
  border-width: 1px;
`;
export const DirectItemInfo = styled.View`
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  margin-left: 10px;
`;
export const DirectItemStateSection = styled.View`
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
`;
export const DirectItemNotify = styled.View`
  align-items: flex-end;
  padding: 5px;
`;
export const DirectItemText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
export const DirectItemSmallText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.textDark};
`;

// User
export const UserClose = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 5px 30px 30px;
`;
export const UserContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const UserContent = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserForm = styled.View`
  width: 88%;
  align-items: center;
`;
export const UserInput = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border-width: 0.1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;
export const UserTextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito';
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  outline-width: 0;
  outline-style: none;
`;
export const UserButton = styled.TouchableOpacity`
  width: 333px;
  height: 56px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
`;
export const UserCountry = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const UserScrollView = styled.ScrollView`
  width: 100%;
  flex-direction: column;
`;
export const UserH1 = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;
export const UserWideButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px 30px;
`;
export const UserSection = styled.View`
  justify-content: center;
  align-items: flex-start;
`;
export const UserTitle = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const UserText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;
// Email 
export const EmailContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
`;
export const EmailForm = styled.View`
  width: 88%;
  align-items: center;
`;
export const EmailInput = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  border-width: 0.1px;
  border-color: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;
export const EmailTextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito';
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  outline-width: 0;
  outline-style: none;
`;
export const EmailButton = styled.TouchableOpacity`
  width: 333px;
  height: 56px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
`;
export const EmailCountry = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const EmailScrollView = styled.ScrollView`
  width: 100%;
  flex-direction: column;
`;
export const EmailH1 = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;
export const EmailWideButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px 30px;
`;
export const EmailSection = styled.View`
  justify-content: center;
  align-items: flex-start;
`;
export const EmailTitle = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const EmailText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;
// Profile
export const UserProfileInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito';
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  outline-width: 0;
  outline-style: none;
`;
export const UserProfileText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const UserProfile = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserPicture = styled.View`
  justify-content: center;
  align-items: center;
`;
export const UserProfilePicture = styled.View`
  width: 110px;
  height: 110px;
  border-radius: 100px;
  border: 4px solid ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;
export const UserPictureEdit = styled.View`
  width: 19px;
  height: 19px;
  margin-top: -20px;
  left: 25px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;
export const UserInfor = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Setting
export const SettingsContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const SettingsContent = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const SettingsScrollView = styled.ScrollView`
  width: 100%;
  flex-direction: column;
  padding: 10px 5px;
`;
export const SettingsItem = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
  padding: 0 6px;
  border-left-width: 2px;
  border-color: ${({ theme }) => theme.primary47};
`;
export const SettingsHeaderSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SettingsHeaderTitle = styled.Text`
  font-family: 'Nunito-Medium';
  align-items: center;
  justify-content: center;
  justify-self: center;
  text-align: left;
  font-size: 18px;
  margin-left: 5px;
  color: ${({ theme }) => theme.text};
`;
export const SettingsWideButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 13px;
  margin: 10px 0;
  border-left-width: 2px;
  border-color: ${({ theme }) => theme.primary47};
`;
export const SettingsDivider = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const SettingsSection = styled.View`
  flex: 1;
  width: 100%;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-end;
`;
export const SettingsDiv = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const SettingsTitle = styled.Text`
  font-family: 'Nunito-Medium';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const SettingsText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
// Status
export const StatusContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

// Auth
export const AuthContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
`;
// Providers
export const TxtProvider = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  color: ${({ theme }) => theme.textDark};
`;
// News
export const NewsContainer = styled.View`
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSlider};
`;
export const NewsSlideImage = styled.Image`
  justify-content: center;
  align-items: center;
  width: calc(900px / 1.5);
  height: 100%;
  resize: contain;
`;

// Content
export const ContentContainer = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const AuthInput = styled.View`
  width: 450px;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.text};
`;
export const AuthLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const AuthLinkText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.textDark};
`;
export const AuthTitle = styled.Text`
  font-family: 'Nunito-SemiBold';
  text-align: left;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const AuthText = styled.Text`
  font-family: 'Nunito';
  text-align: left;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const AuthButton = styled.TouchableOpacity`
  width: 144px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
`;
export const AuthButtonTxtButton = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 19px;
  color: ${({ theme }) => theme.background};
`;
export const AuthTextError = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.error};
`;
export const AuthTextValid = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.secondary};
`;
export const AuthTextAlert= styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
`;
// Header
export const AuthHeaderLinkText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;
export const AuthHeaderText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.text};
`;
export const AuthHeaderP = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;
// Footer
export const AuthFooterContainer = styled.View`
  width: 100%;
  height: 45px;
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const AuthFooterLinkText = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.textDark};
`;
export const AuthFooterSection = styled.View`
  width: 340px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Account
export const AccountContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;
// Header
export const AccountHeader = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
// Top
export const AccountTop = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 18px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgInput};
`;
export const AccountTopSection = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 40px;
`;
export const AccountTopButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const AccountTopTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  text-align: center;
  font-size: 32px;
  color: ${({ theme }) => theme.text};
  margin-left: 20px;
`;
export const AccountTopText = styled.Text`
  font-family: 'Nunito-Medium';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.textDark};
`;
export const AccountTopSectionButton = styled.TouchableOpacity`
  padding: 0 30px;
`;
export const AccountTopProfile = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const AccountNav = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const AccountNavSection = styled.View`
  flex: 1;
  width: 100%;
  flex-Direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 40px;
`;
export const AccountNavTitle = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  margin-left: 25px;
`;
export const AccountNavButton = styled.TouchableOpacity`
  margin: 0 20px;
  border-bottom-width: 2px;
  border-color: ${({ color }) => color};
`;
export const AccountNavText = styled.Text`
  font-family: 'Nunito-Medium';
  text-align: center;
  font-size: 16px;
  padding: 8px 0;
  color: ${({ theme }) => theme.text};
`;
// Content
export const AccountContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
export const AccountPhoto = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin: 5px 10px;
  border: 5px solid ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
`;
export const AccountScrollView = styled.ScrollView`
  width: 100%;
  flex-direction: column;
`;
export const AccountSection = styled.View`
  width: 40%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 0 40px;
`;
export const AccountView = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AccountButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.background};
`;
// Content - Account
export const ContentAccount = styled.View`
  width: 60%;
  margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`;
export const ContentAccountProfile = styled.View`
  width: 98%;
  margin-top: 50px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentAccountSection = styled.View`
  width: 100%;
  padding: 20px 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const ContentAccountTextInput = styled.TextInput`
  padding: 10px 60px;
  text-align: left;
  font-family: 'Nunito-SemiBold';
  font-size: 18px;
  outline-width: 0;
  outline-style: none;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
`;
export const ContentAccountTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  text-align: left;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`;
export const ContentEditHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentEditHeaderButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 35px;
  margin-left: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const ContentAccountText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
export const ContentAccountValue = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const ContentAccountButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 20px;
  color: ${({ color, theme }) => color === 'delete' ? theme.error:theme.primary};
`;
// Content - Invoicing
export const ContentInvoicing = styled.View`
  width: 60%;
  margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`;
export const ContentInvoicingProfile = styled.View`
  width: 98%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentInvoicingSection = styled.View`
  width: 100%;
  padding: 20px 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const ContentInvoicingTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`;
export const ContentInvoicingText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
export const ContentInvoicingValue = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
export const ContentInvoicingButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  align-self: center;
  font-size: 20px;
  color: ${({ color, theme }) => color === 'delete' ? theme.error:theme.primary};
`;
export const ContentInvoicingButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.border};
`;
export const ContentInvoicingPay = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ContentInvoicingHistory = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const ContentInvoicingDesc = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
export const ContentInvoicingAmount = styled.Text`
  font-family: 'Nunito';
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.textDark};
`;
export const ContentInvoicingStatus = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;
`;
// Content - Notify
export const ContentNotify = styled.View`
  width: 60%;
  margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
`;
export const ContentNotifyProfile = styled.View`
  width: 98%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentNotifySection = styled.View`
  width: 100%;
  margin: 20px 20px;
  padding: 20px 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContentNotifyTitle = styled.Text`
  font-family: 'Nunito-ExtraBold';
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
`;
// Footer
export const AccountFooter = styled.View`
  position: absolute;
  right: 2%;
  bottom: 5%;
  padding: 3px 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary};
`;
export const AccountFooterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.background};
`;
export const AccountFooterSection = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.background};
`;
export const AccountFooterText = styled.Text`
  font-family: 'Nunito-Bold';
  text-align: center;
  font-size: 18px;
  margin: 10px;
  color: ${({ theme }) => theme.background};
`;