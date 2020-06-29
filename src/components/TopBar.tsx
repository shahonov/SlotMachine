import * as React from 'react';
import styled from 'styled-components';
import { CenterFlex } from '../styled-components/Containters';

const Wrapper = styled(CenterFlex)`
    width: 100%;
`;

export class TopBar extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Wrapper>
                <input />
                <button>Deposit</button>
            </Wrapper>
        );
    }
}