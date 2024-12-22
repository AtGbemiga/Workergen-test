import { Aside } from "./components/Aside";
import { Dashboard } from "./components/Dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <aside>
          <Aside />
        </aside>
        <section className={styles.dashboardWrapper}>
          <Dashboard />
        </section>
      </main>
    </div>
  );
}
