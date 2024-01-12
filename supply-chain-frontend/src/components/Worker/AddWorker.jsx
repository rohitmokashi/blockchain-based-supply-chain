
function AddWorker({state}) {

    const addWorker = async()=>{
        const {contract} = state;
        event.preventDefault();

        const workerName = document.querySelector("#worker-name").value;
        const transaction = await contract.addWorker(workerName);
        await transaction.wait();
        alert("Transaction is Successful");
        window.location.reload();

    }

    return (
        <div className="container">
            <form onSubmit={addWorker}>
                <h1>Set Worker</h1>

                <div className="mb-3">
                    <label className="form-label">Worker Name</label>
                    <input type="text" id="worker-name" className="form-control" placeholder=" " />
                </div>

                <div className="col-12">
                    <input className="btn btn-primary" type="submit" value="Set Worker" />
                </div>
            </form>
        </div>
    )
}

export default AddWorker;