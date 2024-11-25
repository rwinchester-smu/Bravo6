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
