import * as React from 'react';
import styled from 'styled-components';
import { Card } from './models/Card';
import { TopBar } from './components/TopBar';
import { CardsInfo } from './models/CardsInfo';
import { SlotGrid } from './components/SlotGrid';
import { CardsGenerator } from './logic/CardsGenerator';
import { CenterFlex } from './styled-components/Containters';
import { BottomBar } from './components/BottomBar';
import { Player } from './models/Player';

const Wrapper = styled(CenterFlex)`
  
`;

export interface State {
  cardsInfo: CardsInfo;
  player: Player;
}

export class App extends React.Component<any, State> {

  private readonly cardsGenerator: CardsGenerator;

  constructor(props: any) {
    super(props);

    this.cardsGenerator = new CardsGenerator();
    const cardsInfo = this.cardsGenerator.generate(12);
    const player = new Player(0, 5);
    this.state = {
      cardsInfo: cardsInfo,
      player: player
    };

    this.spin = this.spin.bind(this);
    this.reload = this.reload.bind(this);
    this.changeStake = this.changeStake.bind(this);
    this.depositFunds = this.depositFunds.bind(this);
  }

  public render(): React.ReactNode {
    const { player, cardsInfo } = this.state;
    return (
      <Wrapper>
        <TopBar />
        <SlotGrid
          spin={this.spin}
          reload={this.reload}
          cardsInfo={cardsInfo} />
        <BottomBar
          player={player}
          changeStake={this.changeStake}
          depositFunds={this.depositFunds}
          isAllRevealed={this.isAllRevealed}
          winCoefficient={cardsInfo.totalWinCoefficient} />
      </Wrapper>
    );
  }

  private changeStake(newStake: number): void {
    const { player } = this.state;
    const newPlayer = new Player(player.funds, newStake);
    this.setState({
      player: newPlayer
    });
  }

  private depositFunds(funds: number): void {
    const { player } = this.state;
    const newPlayer = new Player(player.funds + funds, player.stake);
    this.setState({
      player: newPlayer
    });
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