import { GifGrid } from '@/components/GifGrid'
import SearchBar from '@/components/SearchBar'
import { useState } from 'react'


const Home = () => {

    const [query,setQuery] = useState("sad")

  return (
    <div className='w-full max-w-4xl mx-auto text-center space-y-6 p-5'>
        <h1 className='text-3xl font-bold'>Gif Search</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <GifGrid query={query} />
    </div>
  )
}

export default Home