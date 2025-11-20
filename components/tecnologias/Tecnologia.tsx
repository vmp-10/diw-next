import Image from "next/image"

interface TecnologiaProps {
    title: string
    description: string
    image_url: string
}


export default function Tecnologia({title, description, image_url}: TecnologiaProps) {
  return (
    <>
        <TecnologiaCard
        title = {title} 
        description= {description} 
        image_url= {image_url}></TecnologiaCard>
    </>
  )
}
