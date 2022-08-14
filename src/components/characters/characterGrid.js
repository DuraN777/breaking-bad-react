import React from 'react'
import Spinner from '../ui/spinner'
import CharacterItem from './characterItem'

const CharacterGrid = ({items, isLoading}) => {
  // if it's still loading, show a spinner, if it finished, map through the items passed in and output them as cards
  return isLoading ? (<Spinner />) : (
  <section className='cards'>
    {items.map(item => (
      <CharacterItem key={item.char_id} item= {item} ></CharacterItem>
    ))}
  </section>
  )
}

export default CharacterGrid