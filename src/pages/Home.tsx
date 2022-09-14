import styles from "./Home.module.css";

import { AppHeader } from "../components/header/AppHeader";
import { ServiceModal } from "../components/serviceModal/ServiceModal";
import CustomServices from "../components/customServices/CustomServices";

export const Home = () => {
  return (
    <div>
      <div className={styles["img-container"]}>
        <div className="d-flex">
          <AppHeader />
        </div>
      </div>
      <ServiceModal />
      <div className={styles["home-content"]}>
      <CustomServices/>
      </div>
    </div>
  );
};
