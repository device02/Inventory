// Load inventory from local storage or initialize an empty array

let inventory = JSON.parse(localStorage.getItem("inventory")) || []; 
// Function to render the inventory table to the page
function renderTable() {
    const table = document.getElementById("inventoryTable");
    table.innerHTML = ""; // Clear the table before re-rendering
    
    // Loop through inventory array and display each item
    inventory.forEach((item, index) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price}</td>
                <td>
                    <button onclick="editItem(${index})">Edit</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                    <button onclick="dispenseItem(${index})">Dispense</button>
                </td>
            </tr>
        `;
    });
    
    // Save updated inventory data to local storage
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

// Function to add a new item to the inventory
function addItem() {
    const name = document.getElementById("itemName").value;
    const quantity = document.getElementById("itemQuantity").value;
    const price = document.getElementById("itemPrice").value;
    
    // Check if inputs are valid before adding item
    if (name && quantity && price) {
        inventory.push({ name, quantity: parseInt(quantity), price }); // Add new item to inventory array
        renderTable(); // Update table display
    }
}

// Function to edit an existing item
function editItem(index) {
    const item = inventory[index]; // Get the selected item
    
    // Prompt user to enter new values
    const newName = prompt("Enter new name", item.name);
    const newQuantity = prompt("Enter new quantity", item.quantity);
    const newPrice = prompt("Enter new price", item.price);
}
    // Update the item if new values are provided
    if (newName && newQuantity && newPrice) {
        inventory[index] = { name: newName, quantity: parseInt(newQuantity), price: newPrice };
        renderTable(); // Update
    }