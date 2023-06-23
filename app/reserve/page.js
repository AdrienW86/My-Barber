import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import CalendarByDay from '../../components/CalendarByDay'

const Reserved = () => {
  return (
    <>
     <Nav />
      <main>
        <Title title = "Réservations"/>
         <CalendarByDay />      
      </main>
     <Footer />
    </>
  )
}
export default Reserved