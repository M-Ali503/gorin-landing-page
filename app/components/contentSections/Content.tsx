import styles from "./Content.module.css";
import Image from "next/image";
const Content = () => {
  return (
    <div className={styles.contentBG}>
      <div className={styles.content}>
        <h1>Sell CRE Faster with OMs & Ads created in minutes</h1>
        <p>
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </p>
        <div className={styles.buttons}>
          <button className={styles.tffButton}>Try it free</button>

          <button className={styles.wdButton}>
            <div className={styles.wdButtonInner}>
              <Image
                src="/playButton.png"
                alt="Next.js logo"
                width={25}
                height={38}
                priority
              />
              <div style={{ marginLeft: "10px" }}>Watch Demo</div>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/man-pic.png"
          alt="Next.js logo"
          width={455}
          height={38}
          priority
        />
      </div>
    </div>
  );
};

export default Content;
