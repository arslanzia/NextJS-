import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div>
    <nav className={styles.navbar}>
   <ul>
       <li><Link href={'/'}> Home</Link></li>
       <li><Link href={'/about'}> About</Link></li>
       <li><Link href={'/product'}> Product</Link></li>
       <li><Link href={'/contact'}> Contact Us</Link></li>
 
   </ul>
   </nav>
    </div>
  )
}

export default Navbar