const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
] 


async function transfer() {
    if (typeof window.ethereum === "undefined") {
        alert("Please install MetaMask to use this DApp.");
        return;
    }

    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const toAddress = document.getElementById("toAddress").value;
    const amount = document.getElementById("amount").value;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const from = accounts[0];

    const weiAmount = web3.utils.toWei(amount, "ether");

    try {
        await contract.methods.transfer(toAddress).send({ from: from, value: weiAmount });
        document.getElementById("status").innerText = "Transaction Successful!";
    } catch (error) {
        document.getElementById("status").innerText = `Error: ${error.message}`;
    }
}

function viewTransaction() {
    // Placeholder: Add logic to view transaction details
    alert("Viewing transaction details...");
}

function goToMain() {
    // Placeholder: Add logic to navigate to main page
    alert("Going to main page...");
}