import * as React from 'react';
import { SlotRow } from './SlotRow';
import { CardsInfo } from '../models/CardsInfo';

export interface Props {
    cardsInfo: CardsInfo;
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        const { cardsInfo } = this.props;
        const { cards } = cardsInfo;
        return (
            <div>
                <SlotRow coefficient={cardsInfo.row1Coefficient}
                    card1={cards[0]} card2={cards[1]} card3={cards[2]} />
                <SlotRow coefficient={cardsInfo.row2Coefficient}
                    card1={cards[3]} card2={cards[4]} card3={cards[5]} />
                <SlotRow coefficient={cardsInfo.row3Coefficient}
                    card1={cards[6]} card2={cards[7]} card3={cards[8]} />
                <SlotRow coefficient={cardsInfo.row4Coefficient}
                    card1={cards[9]} card2={cards[10]} card3={cards[11]} />
            </div>
        );
    }
}