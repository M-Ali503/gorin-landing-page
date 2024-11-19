import Image from "next/image";
import styles from "./Feature.module.css";

const Header = () => {
  const featureList = [
    { title: "Retail", icon: "/retail-store.png" },
    { title: "Multi-family", icon: "/house.png" },
    { title: "Office", icon: "/building.png" },
    { title: "Industrial", icon: "/warehouse.png" },
    { title: "Hotel", icon: "/hotel2.png" },
    { title: "Land", icon: "/land.png" },
  ];

  return (
    <section className={styles.features}>
      <p className="pHeading">Create OMs and Ads For</p>
      <h1>Various Real Estate Property Types</h1>
      <div className={styles.grid}>
        {featureList.map((feature, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.innerCard}>
              <Image
                className="dark:invert"
                src={feature.icon}
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <p>{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
