import React from 'react'
import { NavLink } from 'react-router-dom'



class Character extends React.Component{



    // clickheart = (evt) => {
    //     evt.target.classList.toggle("active")
    // }

    // moreInfoCharacter = (routerProps) => {
    //   return <CharacterInfoPage character={this.props.character}/>
    // }



    render(){
        let {id, name, imageURL} = this.props.character
        
        return(
            <div class="singleCard five wide column">
                

                <h3>{name}</h3>
                <NavLink to={`/characters/${name}`}>  
                    <img src={imageURL}  />
                </NavLink>
            
                <div class="ui heart rating" data-rating="1" data-max-rating="5" >
                    <i className="icon active"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                </div>
        
                 
            </div>
        )
    }
}

export default Character