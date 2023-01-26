import Link from 'next/link'
import Image from 'next/image';

function Header(){
    return(
      <div>
        <div className='header'>
        <Link href='/'><div className='logo'>Mutano's</div></Link>
        <div className='rightSide'>
            <div className='largeMenu'>
            <Link href='/about'><div className='tops' >ABOUT US</div></Link>
            <Link href='/locations'><div className='tops' >LOCATIONS</div></Link>
            <Link href='/order'><div className='tops' >ORDER</div></Link>
            </div>
            <input type='checkbox' id='menushow' />
            <label className='menu' htmlFor='menushow'><Image  src='/menu.png' alt='ig'
          width={40} height={40} priority/></label>
          <ul className='secondMenu' htmlFor='menushow'>
            <Link href='/about'><div className='tops' >ABOUT US</div></Link>
            <Link href='/locations'><div className='tops' >LOCATIONS</div></Link>
            <Link href='/order'><div className='tops' >ORDER</div></Link>
            </ul>
            
            
        </div>
      </div>
      
      </div>
    )
  }
  export default Header;