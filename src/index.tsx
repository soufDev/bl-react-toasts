import * as React from 'react';
import { useInterval } from './useInterval';

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {top: unset; opacity: 0;}
    to {bottom: unset; opacity: 1;}
`;

const fadeOut = keyframes`
    from {bottom: unset; opacity: 1;}
    to {top: unset; opacity: 0;}
`;

const Snackbar = styled.div<{ show: boolean, position: string }>`
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    visibility: ${({ show }) => show ? 'visible': 'hidden' };
    animation: ${({ show }) => (show ? fadeIn : fadeOut)} 1s linear;
    bottom: ${({ position }) => position === 'position_right' || position === 'position_left' || position === 'position_top' ? 'unset': '30px'};
    left: ${({ position }) => {
        if (position === 'position_right') return '90%';
        if (position === 'position_left') return '7%';
        return '50%';
    }};
    top: ${({ position }) => position === 'position_right' || position === 'position_left' || position === 'position_top' ? '30px': 'unset'};
`;

interface Props {
    show: boolean;
    duration: number;
    backgroundColor: string;
    text: string;
    position: string;
}

export const Toast: React.FC<Props> = (props) => {
    const [show, setShow] = React.useState<boolean>(props.show);

    useInterval(() => {
        setShow(false);
    }, props.duration * 1000);

    console.log({ souf: 'souf' })
    return (
        <div>
             <Snackbar show={show} position={props.position} style={{backgroundColor : props.backgroundColor }}>{props.text}</Snackbar>
        </div> 
    )
    
}

export default Toast;