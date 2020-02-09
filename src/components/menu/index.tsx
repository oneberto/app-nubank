import React from 'react';

// Assets
import {
    MenuContainer,
    QRCode,
    AccountDetails,
    AccountDetailsText,
    MenuList,
    MenuItem,
    MenuItemText,
    SignOutButton,
    SignOutButtonText,
} from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
    const items = [
        {
            text: 'Me ajuda',
            icon: 'help-outline',
        },
        {
            text: 'Perfil',
            icon: 'help-outline',
        },
    ];

    return (
        <MenuContainer>
            <AccountDetails>
                <QRCode />

                <AccountDetailsText>
                    Banco 260 - Nu Pagamentos S.A.
                </AccountDetailsText>
                <AccountDetailsText>Agência 0001</AccountDetailsText>
                <AccountDetailsText>Conta 123456-7</AccountDetailsText>
            </AccountDetails>

            <MenuList>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        borderBottom={index + 1 === items.length}>
                        <Icons size={24} name={item.icon} color="#fff" />
                        <MenuItemText>{item.text}</MenuItemText>
                        <Icons size={21} name="chevron-right" color="#fff" />
                    </MenuItem>
                ))}
            </MenuList>

            <SignOutButton>
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </MenuContainer>
    );
}
