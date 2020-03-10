import React, { Component } from 'react'

import styles from "./CharacterDetail.module.css";
import globalStyles from "../../assets/bootstrap.module.css";
import cx from 'classnames'

export class CharacterDetail extends Component {
    render() {
        const { char }= this.props.location.state;
        return (
            <container className={styles.test}>
            <div className={styles.card}>
                <img src={char.character.image} alt={char.character.name} className={styles.insetimg}/>
                <div className={cx(styles.container, globalStyles[''])}>
                    <h4>{char.character.name}</h4>
                    <p>Status: {char.character.status}</p>
                    <p>Species: {char.character.species}</p>
                    <p>Gender: {char.character.gender}</p>
                    <p>Origin: {char.character.origin.name}</p>
                </div>
            </div>
            </container>
        )
    }
}

export default CharacterDetail
