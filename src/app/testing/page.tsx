"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const page = () => {
  const [data, setData] = useState([]);
  const [filteredObj, setFilteredObj] = useState<any>(1);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/quotes");
      const result = await res.json();
      setData(result.quotes);
    }
    fetchData();
  }, []);

  function idGet(id: number) {
    const result = data.find((items:any)=>items.id===id);
    console.log(result);
    setFilteredObj(result);
  }

  useEffect(() => {
    if (firstButtonRef.current) {
      firstButtonRef.current.click();
    }
  }, [data]);
  
  return (
    <>
      <style jsx>{`
        ._data {
          display: flex;
          align-items: flex-start;
          padding: 30px;
        }

        ._data1 {
          flex: 0 0 230px;
        }

        ._data1 li {
          margin-bottom: 10px;
        }
      `}</style>

      <div>
        <div className="_data">
          <ul className="_data1">
            {data.map((items: any) => (
              <li key={items.id}>
                <button ref={items.id === 1 ? firstButtonRef : null} onClick={() => idGet(items.id)}>
                  {items.author}
                </button>
              </li>
            ))}
          </ul>
          <div className="_data2">
            <h4>{filteredObj.author}</h4>
            <h5>{filteredObj.id}</h5>
            <p>{filteredObj.quote}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
