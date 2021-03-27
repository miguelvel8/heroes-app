import React from 'react'
import { getHeroesByPubliser } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {
    
    const heroes = getHeroesByPubliser(publisher);
    
     return (
        
            <div className="card-columns animate__animated animate__fadeIn">

                {
                    heroes.map( hero => (
                        
                        <HeroCard key={hero.id}
                            {...hero}
                        />
                        
                    ))
                
                
                }
            </div>  
        
    )
}
