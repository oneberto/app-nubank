import React from 'react';

// Assets
import { TabsContainer, TabsWrapp } from './styles';

// Components
import Tab from './tab';

export default function Tabs() {
    const tabs = [
        {
            icon: 'person-add',
            text: 'Indicar pessoas',
        },
        {
            icon: 'tune',
            text: 'Ajustar limite',
        },
        {
            icon: 'help-outline',
            text: 'Me ajuda',
        },
        {
            icon: 'credit-card',
            text: 'Cartão virtual',
        },
        {
            icon: 'stay-current-portrait',
            text: 'Recarga de Celular',
        },
    ];

    return (
        <TabsWrapp>
            <TabsContainer>
                {tabs.map((tab, index) => (
                    <Tab key={index} icon={tab.icon} text={tab.text} />
                ))}
            </TabsContainer>
        </TabsWrapp>
    );
}
