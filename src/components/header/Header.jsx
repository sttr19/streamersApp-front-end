import styles from "../header/Header.module.css";

export function Header() {
  const isAuth = false;
  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <a className={styles.logo} href="/">
          <div>streamers app</div>
        </a>
        {isAuth ? (
          <>
            <div className={styles["buttons-container"]}>
              <a href="/sreamers">
                <button>Add Streamer</button>
              </a>
              <button>LogOut</button>
            </div>
          </>
        ) : (
          <>
            <div className={styles["buttons-container"]}>
              <a href="/login">
                <button>Login</button>
              </a>
              <a href="/register">
                <button>Register</button>
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
