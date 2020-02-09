import React from 'react';
import { TabCard, TabCardText } from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';

interface ITabProps {
    icon: string;
    text: string;
}

export default function Tab({ icon, text }: ITabProps) {
    return (
        <TabCard>
            <Icons size={24} name={icon} color="#fff" />
            <TabCardText>{text}</TabCardText>
        </TabCard>
    );
}
