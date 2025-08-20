const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastprice=[25,35,45,34];
const maincourseprice=[25,35,45,34];
const dessertprice=[25,35,45,34];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


let dessertItem='';
for(let x=0;x<dessertMenu.length;x++){
    dessertItem += `<p>Item ${x + 1}: ${dessertMenu[x]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


const temp=breakfastprice.map((itemprice,index)=>
    `<p>Item ${index+1}: ${breakfastMenu[index]} - ${itemprice} </p>`
).join('');

document.getElementById('breakfastMenuItems').innerHTML=temp;