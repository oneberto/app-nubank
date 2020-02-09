import React from 'react';

// Assets
import { CardItem, CardFooter, CardFooterText } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

export interface ICardProps {
    footer: {
        text: string;
        icon: string;
    };
}

export default function Card({ footer }: ICardProps) {
    return (
        <CardItem>
            <CardFooter>
                <Icons name={footer.icon} size={25} color="#868686" />
                <CardFooterText>{footer.text}</CardFooterText>
                <Icons name="chevron-right" size={25} color="#868686" />
            </CardFooter>
        </CardItem>
    );
}
