import React from 'react';
import PlayerProfile from './PlayerProfile'

const PlayerSearch = props => {
  let playerinfo = "";
  if (props.playerinfo !== "" && props.playerinfo !== null) {
    playerinfo =
      <PlayerProfile
      playerinfo={props.playerinfo}
      />
  }

  return (
    <div className="row auth">
      <label htmlFor="firstname">First Name</label><br />
      <input type="text" name="firstname" onChange ={props.handleFirstName}/><br />
      <label htmlFor="lastname">Last Name</label><br />
      <input type="text" name="lastname" onChange={props.handleLastName}/><br />
      <input className="inline text-center button" type="submit" value="Search" onClick={props.handleSubmit}/>
      <p className="inline error">{props.error}</p>
      {playerinfo}
    </div>
  )

}

export default PlayerSearch;