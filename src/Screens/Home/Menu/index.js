import React, {useState, useEffect, useContext} from 'react';
import { Dimensions } from 'react-native';
import { ThemeContext } from '/src/components/theme'

import { MenuContainer, HamburguerContainer, HamburguerContent } from '../../components';

import Header from './Header';
import Content from './Content';
import Nav from './Nav';

const Menu = () => {
  const {theme} = useContext(ThemeContext);
  const [selected, setSelected] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlerMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setSelected(selected? selected: 0);

    const handleScreenWidth = () => {
      const { width } = Dimensions.get('window');
      setIsSmallScreen(width < 1200);
    };

    Dimensions.addEventListener('change', handleScreenWidth);
    handleScreenWidth();

    return () => {
      Dimensions.removeEventListener('change', handleScreenWidth);
    };
  }, [selected]);

  const handleSelected = (item) => {
    setSelected(item);
  };

  if (isSmallScreen) {
    return (
      <HamburguerContainer theme={theme}>
        <Nav handlerMenu={handlerMenu} isOpen={isOpen} setIsOpen={setIsOpen} selected={selected} handleSelected={handleSelected} />
        {isOpen?
        
          <HamburguerContent theme={theme}>
            <Header selected={selected} handleSelected={handleSelected} />
            <Content selected={selected} />
          </HamburguerContent>
          : null}
      </HamburguerContainer>
    );
  }

  if (!isSmallScreen) {
    return (
      <MenuContainer>
        <Header selected={selected} handleSelected={handleSelected} />
        <Content selected={selected} />
      </MenuContainer>
    );
  }
}

export default Menu;