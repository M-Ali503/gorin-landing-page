import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const Plazas = [
    {
      title: "Retail OM",
      icon: "/footerimg1.png",
      description: "strip centers, street retail, vehicle related, and more.",
      fill: true,
    },
    {
      title: "Multi-Family OM",
      icon: "/footerimage2.png",
      description: "garden, low-rise, mid-rise, high-rise.",
    },
    {
      title: "Office OM",
      icon: "/footerimage3.png",
      description: "all classes of office buildings, loft/creative, medical.",
    },
  ];

  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.heading}>
          Sample OMs created with our platform
        </div>
        <div className={styles.grid}>
          {Plazas.map((plaza, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.innerCard}>
                <Image
                  className="dark:invert"
                  src={plaza.icon}
                  alt="Next.js logo"
                  width={350}
                  height={38}
                  priority
                />
                <div className={styles.cardContent}>
                  <h3>{plaza.title}</h3>
                  <p>{plaza.description}</p>
                </div>
                <button
                  className={
                    plaza.fill ? styles.tffButtonFilled : styles.tffButton
                  }
                >
                  View Sample Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
