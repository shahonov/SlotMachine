import * as React from 'react';
import { Spinners, Pair } from './configs';
import { SlotGrid } from './components/SlotGrid';

export interface State {
  pairs: Pair[];
}

export class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      pairs: Spinners.pairs
    };

    this.spin = this.spin.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  public render(): React.ReactNode {
    const { pairs } = this.state;
    return (
      <div>
        <SlotGrid pairs={pairs} />
        <button onClick={this.spin}>Spin!</button>
      </div>
    );
  }

  private spin(): void {
    Spinners.spinAll(this.forceUpdate);
    Spinners.randomUnspinAll(this.forceUpdate);
  }
}