import Link from "next/link"
import Orgulho from "./Orgulho"

export default function ComponenteProjetos() {
  return (
    <>
      <h2>Segue o link abaixo para veres o meu repositório no GitHub</h2>
      <div className="bg-white p-3 m-3 rounded-xl">
        <Link href= "https://github.com/vmp-10" target='_blank'>Vê o meu repositório</Link>
      </div>
      <h2>Aqui tens os meus projetos da cadeira de DIW</h2>
      <div className="bg-white p-3 m-3 rounded-xl">
        <Link href= "https://vmp-10.github.io/vmp-10/" target='_blank'>Vê os meus projetos de DIW</Link>
      </div>
      <h2>Também criei uma demonstração de uma loja :)</h2>
      <Orgulho nome= "Demonstração Loja"></Orgulho>
    </>
  )
}
