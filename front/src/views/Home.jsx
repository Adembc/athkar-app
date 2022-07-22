import Azkar from "../component/Azkar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAdhkar } from "../redux/slice/adhkarSlice";
import Loading from "../component/Loading";

function Home({ type, filter }) {
  const { loading } = useSelector((state) => state.adhkar);
  const filterApi = "?category=" + filter;
  const dispatch = useDispatch();
  const { adhkar } = useSelector((state) => state.adhkar);
  useEffect(() => {
    if (adhkar[type]?.length === 0) {
      dispatch(getAllAdhkar({ filter: filterApi, type }));
    }
  }, [dispatch, adhkar, filterApi, type]);
  console.log(loading);
  return (
    <main className="main">
      {loading && <Loading />}
      {!loading && <Azkar azkar={adhkar[type]} type={type} />}
    </main>
  );
}

export default Home;
