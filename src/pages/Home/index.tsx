import React from 'react';

// Components
import Header from '../../components/header';
import Cards from '../../components/cards';
import Tabs from '../../components/tabs';

// Assets
import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <Header />
            <Cards />
            <Tabs />
        </Container>
    );
}
