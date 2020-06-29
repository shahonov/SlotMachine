import * as React from 'react';
import styled from 'styled-components';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import { Player } from '../models/Player';
import { IconPulse } from '../styled-components/Icons';

const Label = styled.label`
    font-family: monospace;
`;

const Input = styled.input`
    font-family: monospace;
    width: 30px;
    text-align: center;
`;

const SmallIcon = styled(IconPulse)`
    width: 25px;
    margin-bottom: -6px;
    &:hover {
        cursor: pointer;
    }
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

        this.increaseStake = this.increaseStake.bind(this);
        this.decreaseStake = this.decreaseStake.bind(this);
    }

    public render(): React.ReactNode {
        const { player, isAllRevealed, winCoefficient } = this.props;
        return (
            <>
                <Label>Funds: </Label>
                <Input readOnly={true} value={player.funds} />
                <Label>Stake: </Label>
                <SmallIcon src={minus} alt={'decrease-stake'} onClick={this.decreaseStake} />
                <Input readOnly={true} value={player.stake} />
                <SmallIcon src={plus} alt={'increase-stake'} onClick={this.increaseStake} />
                <div>Win coefficient: {isAllRevealed ? winCoefficient : 'click spin...'}</div>
            </>
        );
    }

    private increaseStake(): void {
        const { changeStake, player } = this.props;
        const newStake = player.stake + 5;
        changeStake(newStake);
    }

    private decreaseStake(): void {
        const { changeStake, player } = this.props;
        const newStake = player.stake - 5;
        changeStake(newStake);
    }
}