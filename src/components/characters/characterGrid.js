import React from 'react'
import CharacterItem from './characterItem'

const CharacterGrid = ({items, isLoading}) => {
  // if its still loading, show a spinner, if it finished,
  // map through the items passed in and output them as cards
  return isLoading ? (<h1>Loading...</h1>) : (
  <section className='cards'>
    {items.map(item => (
      <CharacterItem key={item.char_id} item= {item} ></CharacterItem>
    ))}
  </section>
  )
}

export default CharacterGrid