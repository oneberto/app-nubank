import React from 'react';

// Assets
import { HeaderContainer, HeaderLogo, HeaderTop, HeaderName } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTop>
                <HeaderLogo />
                <HeaderName>Jose</HeaderName>
            </HeaderTop>
            <Icons name="keyboard-arrow-down" size={20} color="#FFF" />
        </HeaderContainer>
    );
}
