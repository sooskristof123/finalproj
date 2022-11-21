import React from 'react';
import {View} from 'react-native'
import { CardViewWithImage } from 'react-native-simple-card-view';

function Card(props) {
    return (
        <CardViewWithImage
        width={190}
        content={ 'Tekintse meg a kurva anyádat' }
        source={require('../img/endOfSeasonSale.jpeg')}
        title={ 'Szezonvégi kiárusítás' }
        imageWidth={ 150 }
        imageHeight={ 130 }
        imageMargin={ {top: 10} }
        roundedImage = {false}
        />
    );
}

export default Card;