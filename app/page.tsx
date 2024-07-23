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
        <div className={styles.portrait}>
          <div className={styles.bookimage}>
          <Image
            src="/images/book.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          </div>
          <div className={styles.bookinfos}>
            <h1 className={styles.title}>Nome do livro</h1>
            <p className={styles.author}>Autor</p>
            <div className={styles.prices}>
              <p className={styles.price}>R$ 100,00</p>
            </div>          
            </div>
            <div className={styles.ratings}>
              <p>5,0⭐</p>
            </div>
        </div>
      </div>
     </div>
    </main>
  );
}
