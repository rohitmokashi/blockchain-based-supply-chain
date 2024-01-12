import "./DisplayData.css";
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";

function DisplayData({ state }) {
  const [id, setId] = useState(-1);
  const [data, setData] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const dataFunction = async () => {
      const dataList = await contract.getProductStatus(BigNumber.from(id));
    //   console.log(dataList);
    //   console.log(BigNumber.from(p_id));
      setData(dataList);
    };
    contract && dataFunction();
  }, [contract, id]);

  const getID = () => {
    const p_id = document.querySelector("#product-id").value;
    setId(p_id);
    console.log(BigNumber.from(id));
  };

  return (
    <div className="d-container" >
      <div className="row d-con-form">
        <div className="col-auto">
          <label className="visually-hidden">Product ID</label>
          <input
            type="number"
            id="product-id"
            className="form-control"
            placeholder="Product ID"
          />
        </div>

        <div className="col-auto">
        <button className="btn btn-primary" onClick={getID}>Set Product</button>
        </div>
      </div>

      <div className="display-data-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="horizontal-timeline">
              <ul className="list-inline items">
                {data?.map((row, iterator) => {
                  return (
                    <li className="list-inline-item items-list">
                      <div className="px-4">
                        <div className="event-date badge bg-info">{iterator*2+1} June</div>
                        <h5 className="pt-2">{row.location}</h5>
                        <p className="text-muted">
                          Temperature: {row.temp}
                          <br/>
                          Humidity: {row.humidity}
                          <br/>
                          Quantity: {row.total_quantity.toNumber()}
                        </p>
                        {/* <div>
                          <a href="#" className="btn btn-primary btn-sm">
                            Read more
                          </a>
                        </div> */}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
