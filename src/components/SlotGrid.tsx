import * as React from 'react';
import { SlotRow } from './SlotRow';

export interface Props {
    rowsCount: number;
    columnsCount: number;
}

export class SlotGrid extends React.Component<Props> {
    public render(): React.ReactNode {
        return (
            <div>
                {this.generateRows()}
            </div>
        );
    }

    private generateRows(): React.ReactNode {
        const {
            rowsCount,
            columnsCount
        } = this.props;
        const rows = [];
        for (let i = 0; i < rowsCount; i++) {
            const row = (
                <div>
                    <SlotRow count={columnsCount} />
                </div>
            );
            rows.push(row);
        }
        return <>{rows}</>;
    }
}