import * as React from 'react';
import { SlotGrid } from './components/SlotGrid';

export class App extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div>
        <SlotGrid countRows={4} countColumns={3} />
      </div>
    );
  }
}