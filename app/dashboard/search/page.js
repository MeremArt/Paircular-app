/* search.js */
import { DashboardLayout } from "@/components/Dashboard/Layout";

import styles from "./search.module.css";

const Search = ({ children }) => {
  return (
    <>
      <DashboardLayout>
        <main>
          <section>
            <div className={styles.container}>
              <form>
                <div className={styles.wrapper}>
                  <div className={styles.searchcontainer}>
                    <input
                      type="text"
                      className={styles.inputstyle}
                      placeholder="Location"
                    />
                    <input
                      type="text"
                      className={styles.inputstyle}
                      placeholder="Check In "
                    />
                    <input
                      type="text"
                      className={styles.inputstyle}
                      placeholder="Number of people"
                    />
                    <button type="submit" className={styles.button}>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Search;
