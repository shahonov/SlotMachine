import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '../styled-components/Icon';
import increateStake from '../assets/increase-stake.svg';
import decreaseStake from '../assets/decrease-stake.svg';

const Label = styled.label`
    font-family: monospace;
`;

const Input = styled.input`
    font-family: monospace;
    width: 30px;
    text-align: center;
`;

const SmallIcon = styled(Icon)`
    width: 25px;
    margin-bottom: -6px;
    &:hover {
        cursor: pointer;
    }
`;

export interface Props {
    credit: number;
}

export class Parameters extends React.Component<Props> {

    constructor(props: any) {
        super(props);

        this.increaseStake = this.increaseStake.bind(this);
        this.decreaseStake = this.decreaseStake.bind(this);
    }

    public render(): React.ReactNode {
        const { credit } = this.props;
        return (
            <>
                <Label>Credit: </Label>
                <Input readOnly={true} value={credit} />
                <Label>Stake: </Label>
                <SmallIcon src={decreaseStake} alt={'decrease-stake'} onClick={this.decreaseStake} />
                <Input readOnly={true} value={0} />
                <SmallIcon src={increateStake} alt={'increase-stake'} onClick={this.increaseStake} />
            </>
        );
    }

    private increaseStake(): void {
    }

    private decreaseStake(): void {
    }
}