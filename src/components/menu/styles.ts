import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const MenuContainer = styled.ScrollView.attrs({
    contentContainerStyle: { alignItems: 'center' },
    showsVerticalScrollIndicator: false,
})`
    overflow: hidden;
    margin: 0 20px;
`;

export const AccountDetails = styled.View`
    align-items: center;
`;

export const AccountDetailsText = styled.Text`
    color: #fff;
    font-size: 13px;
    padding-bottom: 4px;
`;

export const QRCode = styled.Image.attrs({
    source: require('../../assets/qrcode.png'),
})`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

export const MenuList = styled.View`
    width: 100%;
    padding: 20px;
`;

export const MenuItem = styled.View<{ borderBottom?: boolean }>`
    border-top-width: 1px;

    border-color: rgba(255, 255, 255, 0.15);
    flex-direction: row;
    align-items: center;
    padding: 10px 2px;

    ${({ borderBottom }) =>
        borderBottom &&
        css`
            border-bottom-width: 1px;
        `}
`;

export const MenuItemText = styled.Text`
    color: #fff;
    flex: 1;
    padding: 0 10px;
`;

export const SignOutButton = styled(RectButton)`
    background: transparent;
    margin: 25px 20px;
    align-self: stretch;
`;

export const SignOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    border-color: rgba(255, 255, 255, 0.15);
    border-width: 1px;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
`;
