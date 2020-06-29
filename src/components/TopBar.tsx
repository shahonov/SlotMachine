import * as React from 'react';
import styled from 'styled-components';
import { Button, InputLabel, TextField } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { CenterFlex } from '../styled-components/Containters';

const Wrapper = styled(CenterFlex)`
    width: 25%;
    margin-bottom: 20px;
`;

const RowWrapper = styled(CenterFlex)`
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export interface Props {
    funds: number;
    depositFunds: (funds: number) => void;
}

export interface State {
    localFunds: number;
}

export class TopBar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            localFunds: 0
        };

        this.changeLocalFunds = this.changeLocalFunds.bind(this);
        this.depositFunds = this.depositFunds.bind(this);
    }

    public render(): React.ReactNode {
        const { localFunds } = this.state;
        const { funds } = this.props;
        return (
            <Wrapper>
                <Slider
                    step={50}
                    min={0}
                    max={1000}
                    marks={true}
                    value={localFunds}
                    valueLabelDisplay={"auto"}
                    onChange={this.changeLocalFunds} />
                <RowWrapper>
                    <Button onClick={this.depositFunds} variant={"outlined"} color={"primary"}>Deposit</Button>
                </RowWrapper>
                <RowWrapper>
                    <InputLabel htmlFor={'funds-input'}>Funds</InputLabel>
                    <TextField id={'funds-input'} size={'small'} value={funds} variant={"outlined"} />
                </RowWrapper>
            </Wrapper>
        );
    }

    private changeLocalFunds(ev: React.ChangeEvent<{}>, value: number | number[]): void {
        this.setState({ localFunds: +value });
    }

    private depositFunds(): void {
        this.props.depositFunds(this.state.localFunds);
        this.setState({ localFunds: 0 });
    }
}