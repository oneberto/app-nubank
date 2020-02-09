import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#81269d" />
            <Routes />
        </>
    );
};

export default App;
