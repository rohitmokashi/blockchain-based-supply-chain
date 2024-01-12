
function AddProduct({state}) {

    const addProduct = async()=>{
        const {contract} = state;
        event.preventDefault();

        const productName = document.querySelector("#product-name").value;
        const productDescription = document.querySelector("#product-description").value;
        const requiredTemp = document.querySelector("#required-temp").value;
        const requiredHumidity = document.querySelector("#required-humidity").value;
        const manufacturer = document.querySelector("#manufacturer").value;

        const transaction = await contract.AddProduct(productName, productDescription, requiredTemp, requiredHumidity, manufacturer);
        console.log(productName, productDescription, requiredTemp, requiredHumidity, manufacturer);
        await transaction.wait();
        alert("Transaction is successful");
        window.location.reload();
    }

    return (
        <div className="container">
            <h2 className="">Add Product</h2>
            
            <form onSubmit={addProduct}>
                    <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input type="text" required className="form-control" id="product-name" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" required className="form-control" id="product-description" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Required Temperature</label>
                            <input type="text" required className="form-control" id="required-temp" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Required Humidity</label>
                            <input type="text" required className="form-control" id="required-humidity" placeholder=" " />
                    </div>

                    <div className="mb-3">
                            <label className="form-label">Manufacturer</label>
                            <input type="text" required className="form-control" id="manufacturer" placeholder=" " />
                    </div>

                    <div className="col-12">
                        <input className="btn btn-primary" type="submit" value="Add Product" />
                    </div>
            </form>
        </div>
    )
}

export default AddProduct;