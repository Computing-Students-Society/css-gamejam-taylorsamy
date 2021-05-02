import React from 'react'
import useKeyPress from '../../Util/UseKeyPress';
import animateCharacter from '../../Util/AnimateCharacters';

import sprites from './../../Images/spritesheet.png'

import styles from './Player.module.scss'
const Player = props => {
    const SPRITE_SIZE = 64;
    const MAX_STEPS = 3;
    const WALK_SPEED = 1;

    const {
        step,
        direction,
        DIRECTION_MAP,
        animate
    } = animateCharacter(MAX_STEPS, WALK_SPEED);

    useKeyPress((e) => {
        let dir = DIRECTION_MAP[e.key.toLowerCase()]
        animate(dir)
    })



    return (
        <div className={styles.Player}
             style={{
                 height: SPRITE_SIZE,
                 width: SPRITE_SIZE,
                 backgroundImage: `url(${sprites})`,
                 backgroundPosition: `${step * SPRITE_SIZE * -1}px ${direction* SPRITE_SIZE * -1}px`
             }}
        >

        </div>
    )
}

export default Player;