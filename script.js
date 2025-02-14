const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
    let total = 0;
    
    prices.forEach(price => {
    total += parseInt(price.innerText);
    });

	const table1 = document.querySelector("table");
    const totalRow = document.createElement("tr");
	totalRow.id = "ans";
    totalRow.textContent = `Total Price:  ${total}`;
	
    table1.append(totalRow);
};
getSumBtn.addEventListener("click", getSum);

