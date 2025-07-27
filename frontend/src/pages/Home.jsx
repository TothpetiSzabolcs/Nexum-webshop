import { useItems } from "../contexts/useItems.js";
import Header from "../components/Header.jsx";

const Home = () => {
const {items, loading} = useItems()

  if (loading) {
    return <div>Loading...</div>
  }
  return <>
  <Header/>
  <div>
    {items.map((item) => (
      <div key={item._id}>
        <h1>{item.name}</h1>
      </div>
    ))}
  </div>;
    </>
};

export default Home;
