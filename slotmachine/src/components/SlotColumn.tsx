import * as React from 'react';
import styled from 'styled-components';
import apple from '../assets/apple.svg';
import banana from '../assets/banana.svg';
import wildcard from '../assets/wildcard.svg';
import pineapple from '../assets/pineapple.svg';

const images: string[] = [apple, banana, wildcard, pineapple];
const alts: string[] = ['apple', 'banana', 'wildcard', 'pineapple'];

const Image = styled.img`

`;

export class SlotColumn extends React.PureComponent {
    public render(): React.ReactNode {
        const index = this.randomNum(images.length);
        const src = images[index];
        const alt = alts[index];
        return (
            <div>
                <Image src={src} alt={alt} />
            </div>
        );
    }

    private randomNum(max: number): number {
        const rnd = Math.floor(Math.random() * max);
        return rnd;
    }
}