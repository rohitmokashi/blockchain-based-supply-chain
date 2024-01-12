/**
 *Submitted for verification at Etherscan.io on 2022-04-19
 */

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

contract Supplychain {
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    int product_id = 0;
    int worker_id = 0;

    struct Product {
        int id;
        string name;
        string description;
        string reqtemperature;
        string reqhumidity;
        string manufacturing;
        // uint256 timestamp;
    }

    struct Status {
        int w_id;
        int p_id;
        string location;
        // uint256 timestamp;
        string temp;
        string humidity;
        int total_quantity;
        bool flag;
    }

    struct Worker {
        string name;
        int id;
        // uint256 timestamp;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    Product private productInfo;
    Product[] public products_list;
    Worker private workerInfo;
    Worker[] public workers_list;
    Status private statusInfo;
    mapping(uint256 => Status[]) public product_Status;


    function addWorker(string memory name) public payable {
        workerInfo = Worker(name, worker_id);
        workers_list.push(workerInfo);
        worker_id++;
    }

    function AddProduct(
        string memory name,
        string memory description,
        string memory reqtemperature,
        string memory reqhumidity,
        string memory manufacturing
    ) public payable {
        productInfo = Product(
            product_id,
            name,
            description,
            reqtemperature,
            reqhumidity,
            manufacturing
        );
        products_list.push(productInfo);
        product_id++;
    }

    function AddStatus(
        string memory location,
        string memory temp,
        string memory humidity,
        int wid,
        int pid,
        int total_quantity,
        bool flag
    ) public payable {
        statusInfo = Status(
            wid,
            pid,
            location,
            temp,
            humidity,
            total_quantity,
            flag
        );
        product_Status[uint256(pid)].push(statusInfo);
    }

    function getWorkerssList() public view returns (Worker[] memory) {
        return workers_list;
    }

    function getProductStatus(int id) public view returns (Status[] memory) {
        return product_Status[uint256(id)];
    }

    function getProducts() public view returns (Product[] memory) {
        return products_list;
    }
}
