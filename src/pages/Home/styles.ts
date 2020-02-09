import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);

export const Container = styled.View`
    background: #81269d;
    flex: 1;
`;

export const Content = styled.View<{ activeMenu: boolean }>`
    flex: 1;

    ${({ activeMenu }) =>
        activeMenu &&
        css`
            position: absolute;
            top: ${SCREEN_HEIGHT}px;
        `}
`;
