import React from 'react'
import{
    Search,
    Heart,
    ShoppingCart,
    UserRound
} from "lucide-react"

const Navbar = () => {
  return (
    <div>
        <div className='bg-black px-60  text-center font-sans min-w-10  text-fuchsia-100'>
            <h3>Complimetary Shipping on all orders over $250</h3>
        </div>
        <nav className='flex items-center p-4'>
           
        <div className='flex gap-6 ml-10'>
            <a href='https://hello.com'>New In</a>
            <a href='https://hello.com'>Women</a>
            <a href='https://hello.com'>Men</a>
            <a href='https://hello.com'>Accessories</a>
            <a href='https://hello.com'>Collection</a>
            <a href='https://hello.com'>Journal</a>
</div>
<h3 className=' brand-name text-3xl ml-auto' >AURELIEN</h3>
<div className='flex items-center gap-5 ml-10'>
 <Heart size={22}/>
 <ShoppingCart size={22}/>
 <Search size={22}/>
 <UserRound size={22}/>

</div>
 </nav>
    </div>
  )
}

export default Navbar
