import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const TabsWrapp = styled.View`
    padding: 20px 0;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 20,
        paddingRight: 10,
    },
})`
    flex-direction: row;
`;

export const TabCard = styled(RectButton)`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    padding: 10px;
    justify-content: space-between;
    margin-right: 10px;
`;

export const TabCardText = styled.Text`
    color: #fff;
    font-family: sans-serif;
`;
