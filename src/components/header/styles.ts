import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    align-items: center;
    padding: 20px 0;
`;

export const HeaderTop = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const HeaderLogo = styled.Image.attrs({
    source: require('../../assets/logo.png'),
})``;

export const HeaderName = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
    font-size: 18px;
    font-family: sans-serif;
`;
