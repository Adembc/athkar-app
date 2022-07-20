import Azkar from "../component/Azkar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAdhkar } from "../redux/slice/adhkarSlice";

function Home({ type, filter }) {
  const filterApi = "?category=" + filter;
  const dispatch = useDispatch();
  const { adhkar } = useSelector((state) => state.adhkar);
  useEffect(() => {
    if (adhkar[type]?.length === 0) {
      dispatch(getAllAdhkar({ filter: filterApi, type }));
    }
  }, [dispatch, adhkar, filterApi, type]);
  return (
    <main className="main">
      <Azkar azkar={adhkar[type]} />
    </main>
  );
}

export default Home;
