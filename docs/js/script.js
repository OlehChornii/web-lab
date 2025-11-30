async function loadItems(){
  const res = await fetch('http://localhost:3002/api/items');
  const items = await res.json();
  const list = document.createElement('ul');
  items.forEach(it => {
    const li = document.createElement('li');
    li.textContent = `${it.id}: ${it.text}`;
    list.appendChild(li);
  });
  document.getElementById('about').appendChild(list);
}
document.addEventListener('DOMContentLoaded', loadItems);
