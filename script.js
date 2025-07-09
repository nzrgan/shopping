let shoppingList = [
  { name: "Хліб", quantity: 1, bought: false, price: 20, total: 20 },
  { name: "Молоко", quantity: 2, bought: true, price: 30, total: 60 },
  { name: "Яблука", quantity: 3, bought: false, price: 10, total: 30 }
];

function renderList() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  const sorted = [...shoppingList].sort((a, b) => a.bought - b.bought);
  sorted.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.quantity} шт – ${item.price} грн – ${item.total} грн – ${item.bought ? "Куплено" : "Не куплено"}`;
    li.className = item.bought ? "bought" : "not-bought";
    list.appendChild(li);
  });
}

function buyProduct(name) {
  const product = shoppingList.find(item => item.name === name);
  if (product) product.bought = true;
}

function deleteProduct(name) {
  shoppingList = shoppingList.filter(item => item.name !== name);
}

function addProduct(name, quantity, price) {
  const existing = shoppingList.find(item => item.name === name);
  if (existing) {
    existing.quantity += quantity;
    existing.total = existing.quantity * existing.price;
  } else {
    shoppingList.push({ name, quantity, bought: false, price, total: quantity * price });
  }
}

addProduct("Хліб", 2, 20);
buyProduct("Яблука");
deleteProduct("Молоко");
renderList();