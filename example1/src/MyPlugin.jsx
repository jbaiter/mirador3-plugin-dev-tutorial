import React from 'react';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';

const btn = (props) => (
    <MiradorMenuButton
        aria-label="Hello World"
        onClick={() => console.log('Hello World from the window title bar!')}
    >
        <FlashOnIcon />
    </MiradorMenuButton>
);

export default btn;