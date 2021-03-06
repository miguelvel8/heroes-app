import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroesScreen = ({history}) => {
    
    const {heroeId} = useParams();
    console.log(heroeId);
    const hero = getHeroById(heroeId);

    if(!hero){
        return <Redirect to='/'/>
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} = hero;

    const handleReturn = () => {
        switch (publisher) {
            case 'DC Comics':
                history.push('/dc');
                    break;
            case 'Marvel Comics':
                 history.push('/marvel');
                    break;
                    default:
                    history.push('/');
            }
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item"> <b>Alter Ego: </b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"> <b>First Appearance: </b> {first_appearance}</li>

                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}>
                    
                    Return
                </button>
            </div>
        </div>
    )
}
