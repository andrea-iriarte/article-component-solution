type Author = {
  author: string,
  date: string,
  profilePic: string
}

const CardAuthor = ({ author, date, profilePic}: Author) => {
  return (
    <div className='flex items-center gap-4'>
      <div className={`bg-[url(${profilePic})] bg-profile h-[2rem] w-[2rem] rounded-full bg-cover bg-center cursor-pointer`}/>

      <div>
        <h2 className='text-[13px] text-dark-gray-blue font-semibold cursor-pointer'>
          {author}
        </h2>
        <p className='text-[12px] text-dark-blue'>
          {date}
        </p>
      </div>
    </div>
  )
}

export default CardAuthor