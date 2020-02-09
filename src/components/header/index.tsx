import React from 'react';

// Assets
import { HeaderContainer, HeaderLogo, HeaderTop, HeaderName } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

interface IHeaderProps {
    onPress: () => void;
    activeMenu: boolean;
}

export default function Header({ onPress, activeMenu }: IHeaderProps) {
    return (
        <HeaderContainer onPress={() => onPress()}>
            <HeaderTop>
                <HeaderLogo />
                <HeaderName>Jose</HeaderName>
            </HeaderTop>
            <Icons
                name={activeMenu ? 'expand-less' : 'expand-more'}
                size={20}
                color="#FFF"
            />
        </HeaderContainer>
    );
}
