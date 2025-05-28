import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Shimmer from "../../components/shimmer/Shimmer";
// import './Header.css';
import "./Section.css";

const URL = "https://dummyjson.com/c/b1d3-e203-4ce7-bbf5";

function Section({ setCartDetails }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = () => {
      fetch(URL)
        .then((res) => res.json())
        .then((lists) => setList(lists));
    };

    getList();
  }, []);

  if (list.length === 0) return <Shimmer />;
  return (
    <>
      <div class="card-container">
        {list.map((item) => (
          <Card
            key={item.id}
            cardDetails={item}
            setCartDetails={setCartDetails}
          />
        ))}
      </div>
    </>
  );
}

export default Section;
