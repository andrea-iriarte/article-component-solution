import { Article } from '../data.ts'
import CardAuthor from './CardAuthor.tsx'
import Share from './Share'

const CardBody = ({ headline, bodyPreview, author, profilePic, date }: Article) => {
  return (
    <div className='desktop:w-[60%] w-full desktop:h-full h-[60%] flex flex-col desktop:py-6 py-8 px-10 justify-between gap-4 pb-4 '>

      <div className='flex flex-col gap-4'>
        <h1 className='text-dark-gray-blue font-semibold desktop:text-[18px] text-[16px]'>
        {headline}
        </h1>

        <p className='text-dark-blue desktop:text-[12px] text-[13px]'>
          {bodyPreview}
        </p>
      </div>
      

      <div className='flex justify-between items-center relative'>
        
        <CardAuthor author={author} date={date} profilePic={profilePic} />

        <Share />
        
      </div>

      
    </div>
  )
}

export default CardBody