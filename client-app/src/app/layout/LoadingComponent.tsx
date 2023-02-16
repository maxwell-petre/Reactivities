import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';
import { StringLiteral } from 'typescript';

interface Props {
    inverted?: boolean;
    content?: String;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content}/>
        </Dimmer>
    )
}