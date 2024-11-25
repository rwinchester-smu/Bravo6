import React from 'react';

function Sound({src, play}) {
    React.useEffect(() => {
        if (play) {
            const audio = new Audio(src);
            audio.play();
        }
    }, [play, src]);

    return null;
}