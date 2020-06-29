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
                <SlotRow isWin={cardsInfo.row1Coefficient > 0}
                    card1={cards[0]} card2={cards[1]} card3={cards[2]} />
                <SlotRow isWin={cardsInfo.row2Coefficient > 0}
                    card1={cards[3]} card2={cards[4]} card3={cards[5]} />
                <SlotRow isWin={cardsInfo.row3Coefficient > 0}
                    card1={cards[6]} card2={cards[7]} card3={cards[8]} />
                <SlotRow isWin={cardsInfo.row4Coefficient > 0}
                    card1={cards[9]} card2={cards[10]} card3={cards[11]} />
            </div>
        );
    }
}