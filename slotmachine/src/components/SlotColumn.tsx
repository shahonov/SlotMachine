import * as React from 'react';
import styled from 'styled-components';
import apple from '../assets/apple.svg';

const Image = styled.img`

`;

export class SlotColumn extends React.PureComponent {

    public render(): React.ReactNode {
        return (
            <div>
                <Image src={this.src} alt={this.alt} />
            </div>
        );
    }

    private get alt(): string {
        return 'coin';
    }

    private get src(): string {
        return apple;
    }
}