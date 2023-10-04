"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "@/styles/Header.module.scss"

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? styles.active : ""}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
