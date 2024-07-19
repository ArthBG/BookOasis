import styles from "./signIn.module.css";
import { FormControl } from "@mui/base/FormControl";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Login</h1>
      </div>

      <div className={styles.center}>
        <form className={styles.form}>
          <FormControl className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </FormControl>
          <FormControl className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </FormControl>
          <button type="submit" className={styles.submitButton}>
            Entrar
          </button>
        </form>

        <div className={styles.links}>
          <a href="/signUp"></a>
        </div>
      </div>
    </main>
  );
}
