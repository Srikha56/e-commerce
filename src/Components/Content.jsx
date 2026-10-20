import React from 'react'

const Content = () => {
  return (
    <div>
      <h1 className='brand-name text-3xl  ml-auto p-4 gap-5'>
       Shop By Category
      </h1>
      <div className='flex items-start gap-8 p-6'>
      <div className='flex  w-40 shrink -0 flex-col p-6 gap-4'>
        <a href='https:hello.com'>OutWear</a>
        <a href='hhttps:hello.com'>Tailoring</a>
        <a href='https://hello.com'>Shirts</a>
        <a href='https://hello.com'>Accessoris</a>
        <a href='https://hello.com'>Footwear</a>
      </div>
      <div className="flex flex-4 p-4 ml-40 gap-70">
    
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXN3728N8cAqiZVhQh06gD2Oimeshxo3S7K04OMF5vrA&s=10'
            alt='outwear'
            className='w-37 h-48
            object-cover'/>

        </div>
        <div className="flex flex-4 p-4 ml-10 gap-4">
    
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdDNkyI9WX6okAZYR7h5vkIfhbwh5LKN38m6ev6rJbg&s'
            alt='outwear'
            className='w-37 h-48
            object-cover'/>

        </div>
        <div className="flex flex-4 p-4 ml-10 gap-10">
    
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhAwVxPSH_dbi6HllwmtQu_XGY9Qj0_BYzsgnKzI2LQ&s=10'
            alt='outwear'
            className='w-37 h-48
            object-cover'/>

        </div>
        
        

      </div>
      </div>

    
  )
}

export default Content
