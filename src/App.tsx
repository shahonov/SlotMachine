import * as React from 'react';
import { Configs } from './configs';
import { SlotGrid } from './components/SlotGrid';

export interface State {
  rowsCount: number;
  columnsCount: number;
}

export class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      rowsCount: Configs.rowsCount,
      columnsCount: Configs.columnsCount
    }
  }

  public render(): React.ReactNode {
    const {
      rowsCount,
      columnsCount
    } = this.state;
    return (
      <div>
        <SlotGrid rowsCount={rowsCount} columnsCount={columnsCount} />
      </div>
    );
  }
}