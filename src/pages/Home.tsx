import BuildFor from "../components/organisms/home/BuildFor"
import Context from "../components/organisms/home/Context"
import CTAFinal from "../components/organisms/home/CTAFinal"
import EUDREmergency from "../components/organisms/home/EUDREmergency"
import Hero from "../components/organisms/home/Hero"
import HowItWork from "../components/organisms/home/HowItWork"
import Impact from "../components/organisms/home/Impact"
import Problem from "../components/organisms/home/Problem"
import Product from "../components/organisms/home/Product"
import Solution from "../components/organisms/home/Solution"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-harvest">
      <Hero />
      <Context />
      <Problem />
      <EUDREmergency />
      <Solution />
      <HowItWork />
      <BuildFor />
      <Impact />
      <Product />
      <CTAFinal />
    </div>
  )
}

export default Home
