import React from 'react';

import Icons from 'react-native-vector-icons/MaterialIcons';

// Assets
import {
    CardContainer,
    CardItem,
    CardWrapp,
    CardFooter,
    CardFooterText,
} from './styles';

export default function Cards() {
    return (
        <CardWrapp>
            <CardContainer>
                <CardItem>
                    <CardFooter>
                        <Icons name="local-dining" size={25} color="#868686" />
                        <CardFooterText>
                            Compra mais recente em Pag*Monteazeite no valor de
                            R$60,00
                        </CardFooterText>
                        <Icons name="chevron-right" size={25} color="#868686" />
                    </CardFooter>
                </CardItem>

                <CardItem>
                    <CardFooter>
                        <Icons name="local-dining" size={25} color="#868686" />
                        <CardFooterText>
                            Compra mais recente em Pag*Monteazeite no valor de
                            R$60,00
                        </CardFooterText>
                        <Icons name="chevron-right" size={25} color="#868686" />
                    </CardFooter>
                </CardItem>
            </CardContainer>
        </CardWrapp>
    );
}
