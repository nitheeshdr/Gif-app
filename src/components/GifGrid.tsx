import { fetchGifs } from '@/lib/giphy'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Toaster, toast } from 'sonner' 

interface Props {
  query: string
}

export const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGifs = async () => {
      setLoading(true)
      toast("fetch gifs", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      try {
        const res = await fetchGifs(query)
        setGifs(res)
      } catch (error) {
        console.log("error fetching gifs", error)
        toast.error("Error fetching GIFs")
      } finally {
        setLoading(false)
      }
    }
    getGifs()
  }, [query])

  return (
    <>
      <Toaster /> 
      {loading ? (
        <p>Loading gif...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gifs.map((gif) => (
            <Card key={gif.id} className="w-full max-w-sm overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardTitle>
                <p className="px-2 py-1">{gif.title}</p>
              </CardTitle>
              <CardDescription />
            </Card>
          ))}
        </div>
      )}
    </>
  )
}