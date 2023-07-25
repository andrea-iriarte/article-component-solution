import { IoIosShareAlt } from 'react-icons/io'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoPinterest } from 'react-icons/bi'
import { useState } from 'react'
const Share = () => {

  const [isShare, setIsShare] = useState(false); 
  const [isTooltip, setIsTooltip] = useState(false);
  return (

    <div>

      { (isShare || isTooltip) &&
        <div className='desktop:hidden flex bg-dark-gray-blue h-[4rem] w-[21rem] absolute top-[-.6rem] left-[-2.5rem] rounded-b-[15px] items-center px-10 gap-3'
          onMouseOver={() => setIsTooltip(true)}
          onMouseOut={() => setIsTooltip(false)}
        >
      
            <p className='text-gray-blue desktop:text-[10px] text-[13px] tracking-[.2rem] font-light'>
              SHARE
            </p>
            <AiFillFacebook color="white" size="24px" className="cursor-pointer" />
            <AiOutlineTwitter color="white" size="24px" className="cursor-pointer"  />
            <BiLogoPinterest color="white" size="24px" className="cursor-pointer" />

        </div>
      }
      <div className={`h-[1.5rem] w-[1.5rem] ${(isShare || isTooltip) ? 'w-[2rem] h-[2rem]' : ''}  desktop:${(isShare || isTooltip) ? 'w-[1.5rem]' : ''} desktop:${(isShare || isTooltip) ? 'h-[1.5rem]' : ''} rounded-full bg-light-gray-blue flex items-center justify-center relative cursor-pointer hover:bg-dark-blue`}
      onMouseOver={() => setIsShare(true)}
      onMouseOut={() => setIsShare(false)}>
        <IoIosShareAlt color={isShare ? "white" : "hsl(214, 17%, 51%)"}/>

        {(isShare || isTooltip) && <>
          <div className='h-[1rem] w-[1rem] rotate-45 bg-dark-gray-blue absolute top-[-27px] shadow-gray-blue/30 shadow-lg desktop:flex hidden'/>

          <div className='absolute desktop:h-[2.2rem] desktop:w-[10rem] bg-dark-gray-blue desktop:rounded-[5px] desktop:top-[-50px] items-center desktop:justify-center gap-2 desktop:flex hidden '>
            
            <p className='text-gray-blue desktop:text-[10px] text-[13px] tracking-[.2rem] cursor-default'>
              SHARE
            </p>
            <AiFillFacebook color="white"/>
            <AiOutlineTwitter color="white"/>
            <BiLogoPinterest color="white" />
          </div>

          <div className='bg-transparent h-[4rem] w-[10.5rem] absolute top-[-50px]'
          onMouseOver={() => setIsTooltip(true)}
          onMouseOut={() => setIsTooltip(false)}
          />
        
        </>}

      
      </div>
    </div>
    
    
  )
}

export default Share