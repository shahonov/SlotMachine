import * as React from 'react';
import { CardsInfo } from './models/CardsInfo';
import { SlotGrid } from './components/SlotGrid';
import { CardsGenerator } from './logic/CardsGenerator';

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
  }

  public render(): React.ReactNode {
    const { cardsInfo } = this.state;
    return (
      <div>
        <SlotGrid cardsInfo={cardsInfo} />
        <button onClick={this.spin}>Spin!</button>
      </div>
    );
  }

  private spin(): void {
    const newCardsInfo = this.cardsGenerator.generate(12);
    this.setState({
      cardsInfo: newCardsInfo
    });
  }
}