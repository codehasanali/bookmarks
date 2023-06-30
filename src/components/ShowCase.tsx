
import Login from "./Login"

import { ArrowRight } from "iconoir-react"

const Showcase = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Login className="animate-fade-up animate-duration-500">Get Started Now <ArrowRight width={16} /></Login>   
    </div>
  )
}

export default Showcase