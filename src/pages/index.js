import * as React from "react"
import { useEffect } from "react"
import Header from "../components/header"
import Heading from "../components/heading"
import Uses from "../components/uses"
import Discord from "../components/discord"
import Introduction from "../components/introduction"
import Globe from "../components/globe"
import Seo from "../components/seo" 

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <main className="font-red-hat relative">
        <Introduction />
        <div className='w-full h-[1200px] rounded-full absolute -top-[600px] opacity-30 pointer-events-none'  style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 88, 212, 0.30) 0%, rgba(0, 88, 212, 0.00) 100%)' }}/>
        <Header />
        <Heading />
        <Uses />
        <Discord />
        <Globe />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title='Self Sovereign'
    description='We envision a new form of citizenship where each individual can belong, participate, and be recognized beyond borders and institutions.'
    />
)