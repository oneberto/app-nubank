import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

import { RectButton } from 'react-native-gesture-handler';

export const CardWrapp = styled.View`
    flex: 1;
    justify-content: center;
`;

export const CardContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 0,
    },
})`
    flex-direction: row;
    z-index: 5;
`;

export const CardItem = styled.View`
    background: #fff;
    border-radius: 4px;
    width: ${SCREEN_WIDTH - 40}px;
    max-height: 400px;
    height: 400px;
    margin-right: 20px;
`;

export const CardFooter = styled(RectButton)`
    background: #f7f7f7;
    padding: 20px 20px;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
`;

export const CardFooterText = styled.Text.attrs({ numberOfLines: 2 })`
    color: #868686;
    flex: 1;
    padding: 0 20px;
    font-size: 13px;
`;
