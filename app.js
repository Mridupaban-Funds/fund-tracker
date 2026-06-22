let all=[];
fetch('funds.json').then(r=>r.json()).then(data=>{
const cards=document.getElementById('cards');
const tbody=document.querySelector('#table tbody');
function render(items){
tbody.innerHTML='';
items.forEach(s=>tbody.innerHTML+=`<tr><td>${s.stock}</td><td>${s.weight}</td><td>${s.fund}</td></tr>`);
}
data.funds.forEach(f=>{
const c=document.createElement('div');
c.className='card';
c.textContent=f.name;
c.onclick=()=>render(f.holdings.map(h=>({...h,fund:f.name})));
cards.appendChild(c);
all.push(...f.holdings.map(h=>({...h,fund:f.name})));
});
render(all);
document.getElementById('search').oninput=e=>{
const q=e.target.value.toLowerCase();
render(all.filter(x=>x.stock.toLowerCase().includes(q)));
};
});