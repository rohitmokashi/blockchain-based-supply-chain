import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

function DisplayProducts({ state }) {
  const [id, setId] = useState(1);
  const [data, setData] = useState();
  const { contract } = state;
  useEffect(() => {
    const dataFunction = async () => {
      const productsList = await contract.getProducts();
    //   productsList.map((row, iterator) => {
    //     console.log(row.name);
    //   });
    setData(productsList);
    console.log(typeof data[0]);
    };
    contract && dataFunction();
  }, [contract]);

  return (
    <div className="table-div">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>S No</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Description</th>
            <th>Required Temp</th>
            <th>Required Humidity</th>
            <th>Manufacturer</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((row, iterator) => {
            return (
              <tr>
                <td>{iterator+1}</td>
                <td>{row.name}</td>
                <td>{row.id.toNumber()}</td>
                <td>{row.description}</td>
                <td>{row.reqtemperature}</td>
                <td>{row.reqhumidity}</td>
                <td>{row.manufacturing}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayProducts;
