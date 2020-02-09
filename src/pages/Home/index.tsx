import React, { useState } from 'react';

// Components
import Header from '../../components/header';
import Cards from '../../components/cards';
import Tabs from '../../components/tabs';
import Menu from '../../components/menu';

// Assets
import { Container, Content } from './styles';

export default function Home() {
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <Container>
            <Header
                onPress={() => setActiveMenu(!activeMenu)}
                activeMenu={activeMenu}
            />
            {activeMenu && <Menu />}
            <Content activeMenu={activeMenu}>
                <Cards />
                <Tabs />
            </Content>
        </Container>
    );
}
