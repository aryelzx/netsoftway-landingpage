import Image from 'next/image'
import logoImage from '../../../../public/netsoftwayLogo.png'
import { OptionsNav } from "./mock/options"
function NavBar() {
  return (
    <div className="bg-transparent h-[calc(100vh-80vh)] flex justify-around items-center text-white">
      <div className="w-1/6">
        <Image src={logoImage} alt="Logo" />
      </div>
      <div className="flex w-2/3 gap-40">
        {OptionsNav.map((option, index) => (
          <a href={`#${option}`} key={index} className="flex text-center text-3xl font-sans focus:border-b-4 border-emerald-500">{option}</a>
        ))
        }
      </div>
    </div>
  )
}

export { NavBar }

