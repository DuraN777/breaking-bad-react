import React from 'react'

// I have access to all the data in the 'item' set as prop of CharacterItem in characterGrid: '<CharacterItem key={item.char_id} item= {item} ></CharacterItem>'
const CharacterItem = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className="card-front">
          <img src={item.img} alt='' />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              {/* In order to present array values with ',' and ' ', I used join */}
              <strong>occupation:</strong> {item.occupation.join(", ")}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem