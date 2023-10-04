import Navigation from "./Navigation"
import styles from "@/styles/Header.module.scss"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

const navItems = [
  { label: "Create New", href: "/" },
  { label: "Employees", href: "/employees" },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
      <div className={styles.logo}>
        <div className={styles.title}>
          <h1>HRnet</h1>
          <h2>Wealth Health</h2>
        </div>
        <Link href="/" className={styles.container}>
          <Image
            src={logo}
            alt="Wealth Health logo"
            priority
            height={100}
            width={100}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
