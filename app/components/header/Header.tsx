import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
      <Image
          className="dark:invert"
          src="/sellcre_logo.svg"
          alt="Next.js logo"
          width={180}
          height={38} 
          priority
        />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#">feature</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <button className={styles.tryButton}>try for free</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
