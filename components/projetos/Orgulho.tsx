import Link from 'next/link'

interface OrgulhoProps{
  nome: String
}

export default function Orgulho({nome}: OrgulhoProps) {
  return (
    <>
      <div className="bg-white p-3 m-3 rounded-xl">
        <Link href= "https://vmp-10.github.io/vmp-10/Lab7/index.html" target='_blank'>{nome}</Link>
      </div>
    </>
  )
}
