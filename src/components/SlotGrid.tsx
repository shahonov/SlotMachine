import * as React from 'react';
import { SlotRow } from './SlotRow';

export interface Props {
    countRows: number;
    countColumns: number;
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        return (
            <div>
                <SlotRow count={3} />
                <SlotRow count={3} />
            </div>
        );
    }
}