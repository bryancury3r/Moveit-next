import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengesContext);
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/bryancury3r.png" alt="Bryan cury"/>
            <div>
                <strong>Gabriel Curi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    {level}
                </p>
            </div>
        </div>
    );
}