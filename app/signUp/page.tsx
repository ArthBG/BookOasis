import styles from "./signUp.module.css";
import { FormControl } from '@mui/base/FormControl';

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Registrar</h1>
      </div>

      <div className={styles.center}>
        <form className={styles.form}>
          <FormControl className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </FormControl>
          <FormControl className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </FormControl>
          <FormControl className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </FormControl>
          <button type="submit" className={styles.submitButton}>
            Registrar
          </button>
        </form>

        <div className={styles.links}>
          <a href="/signIn">Entrar</a>
          </div>
      </div>
    </main>
  );
}
