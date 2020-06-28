import * as React from 'react';
import { SlotColumn } from './SlotColumn';

export interface Props {
    count: number;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        return (
            <div>
                Slotty
                <SlotColumn />
            </div>
        );
    }
}