import React from 'react'

import { ButtonBack2, ButtonFront2 } from './index'

const Button2 = (props) => (
    <ButtonBack2 alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
        <ButtonFront2 alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront2>
    </ButtonBack2>
);

export default Button2