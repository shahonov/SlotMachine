import * as React from 'react';
import styled from 'styled-components';
import { Card } from './models/Card';
import { TopBar } from './components/TopBar';
import { CardsInfo } from './models/CardsInfo';
import { SlotGrid } from './components/SlotGrid';
import { CardsGenerator } from './logic/CardsGenerator';
import { CenterFlex } from './styled-components/Containters';

const Wrapper = styled(CenterFlex)`
  
`;

export interface SpinResults {
  isRowWin: boolean;
  coefficient: number;
}

export interface State {
  cardsInfo: CardsInfo;
}

export class App extends React.Component<any, State> {

  private readonly cardsGenerator: CardsGenerator;

  constructor(props: any) {
    super(props);

    this.cardsGenerator = new CardsGenerator();
    const cardsInfo = this.cardsGenerator.generate(12);
    this.state = {
      cardsInfo: cardsInfo
    };

    this.spin = this.spin.bind(this);
    this.reload = this.reload.bind(this);
  }

  public render(): React.ReactNode {
    const { cardsInfo } = this.state;

    return (
      <Wrapper>
        <TopBar />
        <SlotGrid spin={this.spin} reload={this.reload} cardsInfo={cardsInfo} />
        <div>Win coefficient: {this.isAllRevealed ? cardsInfo.totalWinCoefficient : 'click spin...'}</div>
      </Wrapper>
    );
  }

  private get isAllRevealed(): boolean {
    return this.state.cardsInfo.cards.every(x => !x.isLoading);
  }

  private spin(): void {
    this.state.cardsInfo.cards.forEach(x => {
      this.revealCard(x);
    });
  }

  private reload(): void {
    const newCardsInfo = this.cardsGenerator.generate(12);
    this.setState({
      cardsInfo: newCardsInfo
    });
  }

  private revealCard(card: Card): void {
    setTimeout(() => {
      card.isLoading = false;
      this.forceUpdate();
    }, card.timeout);
  }
}