//sound component used by audio files and sound image
//author: Elyse Louis

import React, {useEffect} from 'react';

const Sound = ({ src, play }) => {
    useEffect(() => {
        if (play) {
            new Audio(src).play();
        }
    }, [play, src]);

    return null;
};

export default Sound;
