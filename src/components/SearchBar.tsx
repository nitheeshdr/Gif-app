import React, { type ChangeEvent } from 'react'

interface Props{
    query:string,
    setQuery:(value:string) => void
}



const SearchBar:React.FC<Props> = ({query,setQuery}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setQuery(e.target.value);

}
  return (
    <input type="text"
    value={query}
    onChange={handleChange}
    placeholder='Search For the Mood'
    className='w-full px-4 py-2 border rounded-md shadow-sm'/>
  )
}

export default SearchBar