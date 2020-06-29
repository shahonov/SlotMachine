import * as React from 'react';
import styled from 'styled-components';
import { Card } from './models/Card';
import { Player } from './models/Player';
import { TopBar } from './components/TopBar';
import { CardsInfo } from './models/CardsInfo';
import { SlotGrid } from './components/SlotGrid';
import { BottomBar } from './components/BottomBar';
import { CardsGenerator } from './logic/CardsGenerator';
import { CenterFlex } from './styled-components/Containters';
import { Switch, FormControlLabel } from '@material-ui/core';

const Expandable = styled(CenterFlex)`
    width: 25%;
    margin-bottom: 20px;
`;

const Wrapper = styled(CenterFlex)`
  margin-top: 50px;
`;

export interface Appearance {
  topOptionsExpanded: boolean;
  bottomOptionsExpanded: boolean;
}

export interface State {
  cardsInfo: CardsInfo;
  player: Player;
  visual: Appearance;
}

export class App extends React.Component<any, State> {

  private readonly cardsGenerator: CardsGenerator;

  constructor(props: any) {
    super(props);

    this.cardsGenerator = new CardsGenerator();
    const cardsInfo = this.cardsGenerator.generate(12);
    const player = new Player(100, 10);
    const visual = { topOptionsExpanded: false, bottomOptionsExpanded: true } as Appearance;
    this.state = {
      cardsInfo: cardsInfo,
      player: player,
      visual: visual
    };

    this.spin = this.spin.bind(this);
    this.reload = this.reload.bind(this);
    this.changeStake = this.changeStake.bind(this);
    this.depositFunds = this.depositFunds.bind(this);
    this.toggleTopOptions = this.toggleTopOptions.bind(this);
    this.toggleBottomOptions = this.toggleBottomOptions.bind(this);
  }

  public render(): React.ReactNode {
    const { visual, player, cardsInfo } = this.state;
    const { topOptionsExpanded, bottomOptionsExpanded } = visual;
    const disableSpin = player.funds - player.stake < 0;
    return (
      <Wrapper>
        {
          topOptionsExpanded
            ?
            <Expandable>
              <TopBar
                funds={player.funds}
                depositFunds={this.depositFunds} />
              <FormControlLabel
                label={"Hide Top Options"}
                onChange={this.toggleTopOptions}
                control={<Switch checked={topOptionsExpanded} color="primary" />} />
            </Expandable>
            :
            <FormControlLabel
              label={"Show Top Options"}
              onChange={this.toggleTopOptions}
              control={<Switch checked={topOptionsExpanded} color="primary" />} />
        }
        <SlotGrid
          spin={this.spin}
          reload={this.reload}
          cardsInfo={cardsInfo}
          disableSpin={disableSpin} />
        {
          bottomOptionsExpanded
            ?
            <Expandable>
              <FormControlLabel
                label={"Hide Bottom Options"}
                onChange={this.toggleBottomOptions}
                control={<Switch checked={bottomOptionsExpanded} color="primary" />} />
              <BottomBar
                player={player}
                changeStake={this.changeStake}
                depositFunds={this.depositFunds}
                isAllRevealed={this.isAllRevealed}
                winCoefficient={cardsInfo.totalWinCoefficient} />
            </Expandable>
            :
            <FormControlLabel
              label={"Show Bottom Options"}
              onChange={this.toggleBottomOptions}
              control={<Switch checked={bottomOptionsExpanded} color="primary" />} />
        }
      </Wrapper>
    );
  }

  private changeStake(newStake: number): void {
    const { player } = this.state;
    const newPlayer = new Player(player.funds, newStake);
    this.setState({ player: newPlayer });
  }

  private depositFunds(funds: number): void {
    const { player } = this.state;
    const newPlayer = new Player(player.funds + funds, player.stake);
    this.setState({ player: newPlayer });
  }

  private get isAllRevealed(): boolean {
    return this.state.cardsInfo.cards.every(x => !x.isLoading);
  }

  private spin(): void {
    const { player, cardsInfo } = this.state;
    this.state.cardsInfo.cards.forEach(x => this.revealCard(x));
    const newPlayer = new Player(player.funds - player.stake, player.stake);
    this.setState({ player: newPlayer });
    if (cardsInfo.totalWinCoefficient > 0) {
      this.collectWinAmount();
    }
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

  private collectWinAmount(): void {
    const { player, cardsInfo } = this.state;
    setTimeout(() => {
      const winAmount = player.stake * cardsInfo.totalWinCoefficient;
      const newPlayer = new Player(player.funds - player.stake + winAmount, player.stake);
      this.setState({ player: newPlayer });
    }, 2400);
  }

  private toggleTopOptions(): void {
    const { visual } = this.state;
    this.setState({
      visual: {
        topOptionsExpanded: !visual.topOptionsExpanded,
        bottomOptionsExpanded: visual.bottomOptionsExpanded
      }
    });
  }

  private toggleBottomOptions(): void {
    const { visual } = this.state;
    this.setState({
      visual: {
        topOptionsExpanded: visual.topOptionsExpanded,
        bottomOptionsExpanded: !visual.bottomOptionsExpanded
      }
    });
  }
}