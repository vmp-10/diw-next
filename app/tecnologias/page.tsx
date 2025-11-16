import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image';

export default function page() {
    return (
        <div>
            <h2>Tecnologias Exploradas</h2>
            <div className="flex flex-col gap-6">
                {tecnologias.map((tec, i) => (
                    <div key= {i} className='flex flex-row gap-3 p-2 m-2 '>
                        <Image
                            src={`/tecnologias/${tec.image}`}
                            alt={tec.title}
                            width={60}
                            height={60}
                        />
                        <h3 className="text-lg font-semibold">{tec.title}</h3>

                        <p className="text-sm text-gray-600 text-center">
                            {tec.description}
                        </p>
                        <div className="text-yellow-500 font-bold">
                            {"★".repeat(tec.rating)}{"☆".repeat(5 - tec.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
