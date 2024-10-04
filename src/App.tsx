import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Table from "./components/Table";
import styles from "./styles/app.module.scss";
import { VscSettings } from "react-icons/vsc";
import FilterModal from "./components/FilterModal";
import { TypeFilterSelected } from "./const";
import ButtonDateOption from "./components/ButtonOption";
import Loading from "./assets/loading.json";
import Lottie from "lottie-react";
import { DataResult } from "./components/Table/types";

function App() {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const [result, setResult] = useState<Array<DataResult>>();
  const [loading, setLoading] = useState(false);
  const [filterDate, setFilterDate] = useState(TypeFilterSelected.MONTH);

  const handleClickOpenModal = () => {
    setIsOpenFilterModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://bold-fe-api.vercel.app/api");
        const json = await response.json();
        setResult(json.data);
      } catch (_) {
        throw new Error("Fail get result");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      {loading ? (
        <div className={styles.loadingContent}>
          <Lottie
            style={{ width: 200, height: 200 }}
            animationData={Loading}
            loop={true}
          />
        </div>
      ) : (
        <div className={styles.mainContent}>
          <div className={styles.containerOptions}>
            <Card filterDate={filterDate} />
            <div className={styles.containerButtons}>
              <ButtonDateOption
                filterDate={filterDate}
                setFilterDate={setFilterDate}
              />
              <button
                onClick={handleClickOpenModal}
                className={styles.containerFilter}
              >
                Filtrar
                <VscSettings />
              </button>
              {isOpenFilterModal && (
                <div>
                  <FilterModal setIsOpenFilterModal={setIsOpenFilterModal} />
                </div>
              )}
            </div>
          </div>
          {result && <Table data={result} filterDate={filterDate} />}
        </div>
      )}
    </div>
  );
}

export default App;
