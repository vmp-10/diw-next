'use client'
import { useParams } from 'next/navigation'
import tecnologias from '@/data/tecnologias.json'

export default function page() {
    const params = useParams()
    const id = Number(params.tecnologia)

  return (
    <>
      <h2>{tecnologias[id].title}</h2>
      <p>{tecnologias[id].description}</p>
    </>
  )
}
