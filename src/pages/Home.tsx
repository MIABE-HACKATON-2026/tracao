import Actors from "../components/organisms/home/Actors"
import Band from "../components/organisms/home/Band"
import CTA from "../components/organisms/home/CTA"
import Hero from "../components/organisms/home/Hero"
import Problem from "../components/organisms/home/Problem"
import Solution from "../components/organisms/home/Solution"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Actors />
      <CTA />
      <Band />
    </div>
  )
}

export default Home
