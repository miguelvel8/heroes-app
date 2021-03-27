import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    

    const location = useLocation(); // uso las props predeterminadas para traer la locacion del path/ , se usa con history
    const {q = '' } = queryString.parse(location.search); // convierto el path/ en un string parseado
    console.log(q);

    const [formValues,handleInputChange] = useForm({ // uso useForm para asignarle la caja de texto que necesito el value
        searchText : q
    })

    const {searchText} = formValues; // desestructuro el valor que digitaron

    // const heroesFilter = getHeroesByName(q) // traigo los heroes

    const heroesFilter = useMemo(() => getHeroesByName(q), [q])

    

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchText}`) // le ingreso al path/ lo que va a buscar como url
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>

                        <input
                            type="text"
                            placeholder="Search your hero..."
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <button

                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary">
                        
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    
                      {
                          (q==='')
                          && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                      }

{
                          (q!=='' && heroesFilter.length===0)
                          && 
                            <div className="alert alert-danger">
                                No Heroes with the {q} name
                            </div>
                      }
                    
                    {
                        heroesFilter.map(hero => (

                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}
