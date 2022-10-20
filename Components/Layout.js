import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header></Header>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
