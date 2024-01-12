

function AddStatus({state}) {

    const addStatus = async()=>{
        const {contract} = state;
        event.preventDefault();

        const w_id = document.querySelector("#worker-id").value;
        const p_id = document.querySelector("#product-id").value;
        const loacation = document.querySelector("#location").value;
        const recorderdTemp = document.querySelector("#recorded-temp").value;
        const recorderdHumidity = document.querySelector("#recorded-humidity").value;
        const quantity = document.querySelector("#quantity").value;
        const flag = document.querySelector("#flag").value;

        const transaction = await contract.AddStatus(loacation, recorderdTemp, recorderdHumidity, w_id, p_id, quantity, flag);
        console.log(loacation, recorderdTemp, recorderdHumidity, w_id, p_id, quantity, flag);
        await transaction.wait();
        alert("Transaction is successful");
        window.location.reload();
    }

    return (
        <div className="container">
            <h2 className="">Add Product Status</h2>
            
            <form onSubmit={addStatus}>
                    <div className="mb-3">
                            <label className="form-label">Worker ID</label>
                            <input type="text" required className="form-control" id="worker-id" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Product ID</label>
                            <input type="text" required className="form-control" id="product-id" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Location</label>
                            <input type="text" required className="form-control" id="location" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Temperature</label>
                            <input type="text" required className="form-control" id="recorded-temp" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Humidity</label>
                            <input type="text" required className="form-control" id="recorded-humidity" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="text" required className="form-control" id="quantity" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Flag</label>
                            <input type="text" required className="form-control" id="flag" placeholder=" " />
                    </div>

                    <div className="col-12">
                        <input className="btn btn-primary" type="submit" value="Add Status" />
                    </div>
            </form>
        </div>
    )
}

export default AddStatus;