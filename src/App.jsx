import styles from "./app.module.scss";
import Content from "./components/Content";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>BETT TOKEN (BTX)</h1>
        <h1 className={styles.subtitle}>Whitepaper</h1>
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default App;
