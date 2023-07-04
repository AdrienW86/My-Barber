import ServicesCard from '@/components/ServicesCard'
import Title from '@/components/Title'
import { data } from '../data'

const Services = () => {
  return (
    <>
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
    </>
  )
}
export default Services
