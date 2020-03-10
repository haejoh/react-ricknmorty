// Write a function component 
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.

// I USED BOOTSTRAP INSTEAD OF CARDS
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Character.module.css";
import globalStyles from "../../assets/bootstrap.module.css"
import cx from 'classnames'

function Character(passed) {
    return (
        
        <Link to={{ pathname: `/character/${passed.character.id}`, state: { char: passed } }} className={styles.characterCard}>
            <div className={ cx( styles.card, globalStyles['card']) } id={passed.character.id} style={{width:'400px'}} >
                <img src={passed.character.image} alt={passed.character.name} className={cx( globalStyles['card-img-top'], styles.img )}/>
                <div className={cx( globalStyles['card-body'])}>
                    <h4 className={cx(styles.link, globalStyles['card-title'])}>
                        {passed.character.name}
                    </h4>
                </div>
            </div>
        </Link>
        
    );
}

export default Character;