import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
           <h1>Marina Collages</h1>
        </div>
        <div className='menu'>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link> 
        <Link href="/contact"><a>Contact</a></Link> 
        <Link href="/shop"><a>Shop</a></Link> 
        </div>
    </nav>
  )
}

export default Navbar