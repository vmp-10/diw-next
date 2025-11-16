export default function MagiaDoJSX() {
    const magia = <strong>HTML dentro de JavaScript</strong>
    const tecnologias = "Next.JS e React"

    return (
    <div className="bg-blue-300 p-3 m-3 rounded-xl">
        <p>Este é o meu componente MagiaJSX - {magia}</p>
        <p>Um componente é uma função que retorna JSX</p>
        <p>Os componentes são usados em - {tecnologias}</p>
    </div>
  )
}
