import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header/> */}
      <div className={styles.banner}>
        <div className={styles.containerBooks}>
          {/* <Image
            src="/images/book.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
          <p>Recomendações</p>
        </div>
      </div>
     <div className={styles.container}>
      <div className={styles.containerProducts}>
        <div cla
      </div>
     </div>
    </main>
  );
}
