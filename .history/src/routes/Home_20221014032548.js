import React from "react";

const Home = () => {
  const onClick = (event) => {
    console.log(event.target);
  };
  return (
    <div>
      <h1>Home</h1>
      <div className="nav">
        <form>
          <div>검색</div>
          <input type="text" />
          <button>검색하기</button>
        </form>
        <div className="keyword">
          <ul>
            <li>
              <span onClick={onClick}>키워드1</span>
            </li>
            <li>
              <span onClick={onClick}>키워드2</span>
            </li>
            <li>
              <span onClick={onClick}>키워드3</span>
            </li>
            <li>
              <span onClick={onClick}>키워드4</span>
            </li>
            <li>
              <span onClick={onClick}>키워드5</span>
            </li>
            <li>
              <span onClick={onClick}>키워드6</span>
            </li>
            <li>
              <span onClick={onClick}>키워드7</span>
            </li>
            <li>
              <span onClick={onClick}>키워드8</span>
            </li>
            <li>
              <span onClick={onClick}>키워드9</span>
            </li>
            <li>
              <span onClick={onClick}>키워드10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
