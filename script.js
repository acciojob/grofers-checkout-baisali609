const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
    let total = 0;
    
    prices.forEach(price => {
    total += parseFloat(price.textContent);
    });

	const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.textContent = `Total Price:  ${total}`;
    totalRow.appendChild(totalCell);
    
    // Append total row to table
    table.appendChild(totalRow);
};


getSumBtn.addEventListener("click", getSum);

