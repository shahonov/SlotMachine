import * as React from 'react';
import styled from 'styled-components';
import { TextField, InputLabel, Slider } from '@material-ui/core';
import { Player } from '../models/Player';
import { CenterFlex } from '../styled-components/Containters';

const RowWrapper = styled(CenterFlex)`
    width: 100%;
    justify-content: space-between;
`;

export interface Props {
    player: Player;
    winCoefficient: number;
    isAllRevealed: boolean;
    depositFunds: (funds: number) => void;
    changeStake: (newStake: number) => void;
}

export class BottomBar extends React.Component<Props> {

    constructor(props: any) {
        super(props);

        this.changeStake = this.changeStake.bind(this);
    }

    public render(): React.ReactNode {
        const { player, isAllRevealed, winCoefficient } = this.props;
        return (
            <>
                <RowWrapper>
                    <Slider
                        step={10}
                        min={10}
                        max={100}
                        marks={true}
                        value={player.stake}
                        valueLabelDisplay={"auto"}
                        onChange={this.changeStake} />
                </RowWrapper>
                <RowWrapper>
                    <InputLabel htmlFor={'stake-input'}>Stake: </InputLabel>
                    <TextField id={'stake-input'} size={'small'} value={player.stake} variant={"outlined"} />
                </RowWrapper>
                {
                    isAllRevealed &&
                    <>
                        <RowWrapper>
                            <InputLabel htmlFor={'coefficient-input'}>Coefficient: </InputLabel>
                            <TextField id={'coefficient-input'} size={'small'} value={winCoefficient} variant={"outlined"} />
                        </RowWrapper>
                        <RowWrapper>
                            <InputLabel htmlFor={'win-amount-input'}>Win Amount: </InputLabel>
                            <TextField id={'win-amount-input'} size={'small'} value={player.stake * winCoefficient} variant={"outlined"} />
                        </RowWrapper>
                    </>
                }
            </>
        );
    }

    private changeStake(ev: React.ChangeEvent<{}>, value: number | number[]): void {
        const { changeStake } = this.props;
        changeStake(+value);
    }
}