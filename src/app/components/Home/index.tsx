import Image from 'next/image'
import svg from '../../../../public/undraw_online_stats_0g94.svg'
function Home() {
  return (
    <main className="w-screen text-white h-[calc(100vh-25vh)] flex pt-14">
      <div className="flex flex-col justify-center w-2/6 ml-44 h-fit">
        <h1 className="text-8xl font-semibold leading-[110px]">TORNAMOS SUA IDEIA EM <span className="text-emerald-400">REALIDADE</span>.</h1>
        <div className="font-light ">
          <p className="text-4xl mt-9">Preparado para turbinar sua empresa?</p>
          <p className="text-4xl">Com a melhor <span className='text-emerald-400'>acessibilidade.</span></p>
        </div>
        <div className='flex text-white text-2xl font-semibold mt-10 items-center gap-10'>
          <button className="border-2 border-emerald-500  px-8 py-4  rounded-lg">ENTRE EM CONTATO</button>
          <p>Orçamento grátis!</p>
        </div>
      </div>
      <div className="w-3/6 ml-60">
        <Image
          src={svg}
          alt="SVG Image"
        />
      </div>
    </main>
  )
}

export { Home }

