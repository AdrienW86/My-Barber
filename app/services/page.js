import Nav from '@/components/Nav'
import ServicesCard from '@/components/ServicesCard'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import { data } from '../data'

const Services = () => {
 
  return (
    <>
     <Nav />
      <main>
        <Title title = "Services"/>
          {data.map((el, index) =>  {
            return <ServicesCard 
              key = {index}
              title = {el.title}
              picture = {el.picture}
              description = {el.description}
              price = {el.price}
              url = '/reserve'            
            />
        })}            
      </main>
     <Footer />
    </>
  )
}
export default Services
