import React from 'react';

// Assets
import { CardContainer, CardWrapp } from './styles';
import Card, { ICardProps } from './card';

export default function Cards() {
    const cards: ICardProps[] = [
        {
            footer: {
                icon: 'local-dining',
                text:
                    'Última compra feita em Pag*Monteazeite no valor de R$60,00',
            },
        },
    ];

    return (
        <CardWrapp>
            <CardContainer>
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </CardContainer>
        </CardWrapp>
    );
}
