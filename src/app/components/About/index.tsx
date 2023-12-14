import Image from "next/image"
import aboutImage from "../../../../public/undraw_creative_team_re_85gn.svg"
function About() {
  return (
    <main id="Sobre" className="h-[calc(100vh-40vh)] bg-slate-100">
      <div className="flex mt-20 pl-40 w-full justify-around">
        <Image
          src={aboutImage}
          alt="SVG Image"
        />
        <div>
          <h1 className="text-7xl font-semibold leading-[110px]">Sobre nós</h1>
          <div className="font-light">
            <p className="text-4xl mt-9 max-w-5xl">
              Somos uma empresa de desenvolvimento de softwares.
              Pensando em como podemos ajudar você a crescer, nós da Netsoftway
              desenvolvemos softwares com a melhor acessibilidade.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About