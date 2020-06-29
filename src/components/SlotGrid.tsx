import * as React from 'react';
import styled from 'styled-components';
import { SlotRow } from './SlotRow';
import spinIcon from '../assets/spin.svg';
import reloadIcon from '../assets/reload.svg';
import { CardsInfo } from '../models/CardsInfo';
import { IconSpinPulse } from '../styled-components/Icons';
import { CenterFlex } from '../styled-components/Containters';

const Wrapper = styled(CenterFlex)`
    width: 100%;
`;

const ButtonWrapper = styled(CenterFlex)`
    width: 100%;
    margin: 10px 0;
`;

export interface Props {
    spin: () => void;
    reload: () => void;
    disableSpin: boolean;
    cardsInfo: CardsInfo;
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        const { cardsInfo } = this.props;
        const { cards } = cardsInfo;
        return (
            <Wrapper>
                <CenterFlex>
                    {this.getIcons()}
                </CenterFlex>
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
            </Wrapper>
        );
    }

    private getIcons(): React.ReactNode {
        const { spin, reload, disableSpin } = this.props;
        if (disableSpin && this.allCardsReady) {
            return (
                <>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={spin} src={spinIcon} alt={'spin-button'} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <IconSpinPulse onClick={reload} src={reloadIcon} alt={'reload-button'} />
                    </ButtonWrapper>
                </>
            );
        } else if (disableSpin && this.allCardsLoading) {
            return (
                <>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={spin} src={spinIcon} alt={'spin-button'} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={reload} src={reloadIcon} alt={'reload-button'} />
                    </ButtonWrapper>
                </>
            );
        }

        if (this.someLoadingSomeReady) {
            return (
                <>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={spin} src={spinIcon} alt={'spin-button'} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={reload} src={reloadIcon} alt={'reload-button'} />
                    </ButtonWrapper>
                </>
            );
        } else if (this.allCardsLoading) {
            return (
                <>
                    <ButtonWrapper>
                        <IconSpinPulse onClick={spin} src={spinIcon} alt={'spin-button'} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={reload} src={reloadIcon} alt={'reload-button'} />
                    </ButtonWrapper>
                </>
            );
        } else if (this.allCardsReady) {
            return (
                <>
                    <ButtonWrapper>
                        <IconSpinPulse className={'disabled'} onClick={spin} src={spinIcon} alt={'spin-button'} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <IconSpinPulse onClick={reload} src={reloadIcon} alt={'reload-button'} />
                    </ButtonWrapper>
                </>
            );
        }
        return false;
    }

    private get someLoadingSomeReady(): boolean {
        const { cards } = this.props.cardsInfo;
        const someLoading = cards.some(x => x.isLoading);
        const someReady = cards.some(x => !x.isLoading);
        return someLoading && someReady;
    }

    private get allCardsLoading(): boolean {
        const { cards } = this.props.cardsInfo;
        const allLoading = cards.every(x => x.isLoading);
        return allLoading;
    }

    private get allCardsReady(): boolean {
        const { cards } = this.props.cardsInfo;
        const allReady = cards.some(x => !x.isLoading);
        return allReady;
    }
}