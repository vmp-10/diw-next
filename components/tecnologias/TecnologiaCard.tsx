import React from 'react'
import Image from 'next/image'

interface TecnologiaProps {
    
}

export default function TecnologiaCard({title, description, image}) {
  return (
    <div className='flex flex-row gap-3 p-2 m-2 '>
                            <Image
                                src={image}
                                alt={title}
                                width={60}
                                height={60}
                            />
                            <h3 className="text-lg font-semibold">{title}</h3>
    
                            <p className="text-sm text-gray-600 text-center">
                                {description}
                            </p>
                        </div>
  )
}
