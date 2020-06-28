import * as React from 'react';
import { Spinners, Pair } from './cardConfigs';
import { SlotGrid } from './components/SlotGrid';
import { Parameters } from './components/Parameters';
import { Credit } from './creditConfigs';

export interface State {
  pairs: Pair[];
  isLoading: boolean;
}

export class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      pairs: Spinners.pairs,
      isLoading: false
    };

    this.spin = this.spin.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.setLoadingFalse = this.setLoadingFalse.bind(this);
  }

  public render(): React.ReactNode {
    const { pairs, isLoading } = this.state;
    return (
      <div>
        <SlotGrid isLoading={isLoading} pairs={pairs} />
        <Parameters credit={Credit.credit} />
        <button onClick={this.spin}>Spin!</button>
      </div>
    );
  }

  private spin(): void {
    this.setState({ isLoading: true });
    Spinners.spinAll(this.forceUpdate);
    Spinners.randomUnspinAll(this.forceUpdate, this.setLoadingFalse);
  }

  private setLoadingFalse(): void {
    this.setState({ isLoading: false });
  }
}