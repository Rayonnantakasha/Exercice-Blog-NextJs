'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
          


const navLinks = [
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
    { name: 'produit', href: '/produit'} 
];

export const Header = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <ul>
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
                <li key={link.name}>
                    <Link href = 
                    {link.href} 
                    className= {isActive? "text-green-500" : "text-blue-500"}
                    > {link.name} </Link>
                </li>
            )
        })}
    </ul>
  )
}
