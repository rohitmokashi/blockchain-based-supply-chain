import { useEffect, useState } from "react";
import { BigNumber } from "ethers";

function DisplayWorkers({state}) {
    const [data, setData] = useState();
    const { contract } = state;
    useEffect(() => {
        const dataFunction = async()=>{
            const workersList = await contract.getWorkerssList();
            setData(workersList);
        };
        contract && dataFunction();
        console.log(data);
    }, [contract]);

    return (
        <div className="table-div">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Worker ID</th>
                        <th>Worker Name</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map((row, iterator) => {
                        return (
                            <tr>
                                <td>{iterator+1}</td>
                                <td>{(row.id).toNumber()}</td>
                                <td>{row.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayWorkers;