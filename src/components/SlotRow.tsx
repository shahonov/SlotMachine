import * as React from 'react';
import { SlotColumn } from './SlotColumn';

export interface Props {
    count: number;
}

export class SlotRow extends React.Component<Props> {
    public render(): React.ReactNode {
        return (this.generateColumns());
    }

    private generateColumns(): React.ReactNode {
        const { count } = this.props;
        const columns = [];
        for (let i = 0; i < count; i++) {
            columns.push(<SlotColumn isLoading={true} />);
        }
        return <>{columns}</>;
    }
}