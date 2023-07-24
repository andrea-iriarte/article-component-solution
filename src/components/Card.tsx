import { article } from '../data'
import Banner from './Banner'
import CardBody from './CardBody'

const Card = () => {
  return (
    <main className='bg-white desktop:w-[41rem] w-[21rem] desktop:h-[17rem] h-[35rem] rounded-[15px] shadow-xl shadow-gray-blue/30 flex desktop:flex-row flex-col justify-start'>
      <Banner />
      <CardBody { ...article } />
    </main>
  )
}

export default Card