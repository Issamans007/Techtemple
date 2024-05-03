let nav_container=document.getElementById('nav-container');
let open_nav=document.getElementById("nav-icon")
let close_nav=document.getElementById("close-nav")
let categories_button=document.getElementById("categories-button");
let categoriesimg=document.getElementById("categriesimg")
let categories_body=document.getElementById('categories-body')
let cart_button=document.getElementById("main-cart")
let cart_butto2=document.getElementById("header-top-cart-body2")
let cart_container=document.getElementById('cart-container')
let cart_body=document.getElementById('cart-body')
let close_cart=document.getElementById('close-cart')
function totop(){
  window.scroll({
    top: 0, // Vertical scroll position (in pixels)
    behavior: 'smooth' // Optional: smooth scrolling
  });
}
open_nav.addEventListener('click',function(){
nav_container.style.left='0'
})
close_nav.addEventListener('click',function(){
nav_container.style.left='-100%'
})
let filter_By_Category=document.getElementById("filterbycategory")
function filter_By_popular_brands(brand,category){
  filter_By_Category.value=category
  filter_by_range.value=10000;
  range_value.innerText="10000"
  brandfilter.value=brand;
  window.scroll({
    top: 0, // Vertical scroll position (in pixels)
    behavior: 'smooth' // Optional: smooth scrolling
  });
  dispaly_items_dynamic_body(category)
  range_body.style.display="flex"
  setTimeout(() => {
    range_body.style.height='140px'
    range_body.style.width='280px'
  }, 1);
}
categories_button.addEventListener('click', function() {
    if (categories_body.style.display == 'flex') {
        categoriesimg.style.transform = 'rotate(0deg)'; // Rotate to 0 degrees when hiding
        categories_body.style.display = 'none';
    } else {
        categoriesimg.style.transform = 'rotate(180deg)'; // Rotate to 180 degrees when showing
        categories_body.style.display = 'flex';
    }
});
function openthecart(){
    cart_container.style.display='flex';
setTimeout(() => {
    cart_body.style.right='0';
}, 10);
}
function closethecart(){
    cart_body.style.right='-320px';
    setTimeout(() => {
        cart_container.style.display='none';
        
    }, 400);
}
cart_button.addEventListener('click',openthecart)
cart_butto2.addEventListener('click',openthecart)
close_cart.addEventListener('click',closethecart)
//cruds
let items = [
  {
    id: 1,
  title: "ACER",
  price: 300,
  description: "Acer Aspire 3 A315-58 15.6 Laptop - Intel Core i3-1115G4 - RAM 4GB - SSD 256GB | A315-58-34X1",
  category: "laptop",
  rate: 7.2,
  count: 3,
  brand:'acer',
  img: "images/dynamic-page-image/acer.jpeg",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 2,
  title: "acer",
  price: 250,
  description: "Acer Extensa 15 15.6''FHD Laptop - AMD Ryzen 5 3500U - RAM 4GB - HDD 1TB | NX.EG9EM.006",
  category: "laptop",
  rate: 4.5,
  count: 3,
  brand:'acer',
  img: "/images/dynamic-page-image/acer2.jpeg",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 3,
  title: "lenovo",
  price: 600,
  description: "Lenovo ThinkPad L14 Gen 4 14 Laptop - Intel Core i7-1355U - RAM 16GB - SSD 1TB - Intel Iris Xe - Win 11 Pro | 21H1005YED",
  category: "laptop",
  rate: 5.9,
  count: 3,
  brand:'lenovo',
  img: "/images/dynamic-page-image/lenove.jpeg",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 4,
  title: "ASUS",
  price: 950,
  description: "Asus VivoBook 14 Laptop - Intel Core i3-1115G4 - RAM 8GB - SSD 128GB - UHD Graphics| X1400EA-I38128",
  category: "laptop",
  rate: 2.7,
  count: 3,
  brand:'asus',
  img: "/images/dynamic-page-image/asus.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 5,
  title: "LENOVO",
  price: 1100,
  description: "Lenovo Ideapad V14 14 Laptop - Intel Core i5-1035G1 - RAM 8GB - SSD 512GB - Intel UHD | 82C4S0FL00",
  category: "laptop",
  rate: 8.7,
  count: 3,
  brand:'lenovo',
  img: "/images/dynamic-page-image/lenovo2.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 6,
  title: "DELL",
  price: 2100,
  description: "Dell Inspiron 7000 2-in-1 17 Laptop - Intel Core i7-1165G7 - RAM 8GB - SSD 256GB - Intel Iris Xe | I7706-7337SLV-PUS",
  category: "laptop",
  rate: 9.1,
  count: 3,
  brand:"dell",
  img: "/images/dynamic-page-image/dell.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 7,
  title: "HP",
  price: 700,
  description: "HP 250 G10 15.6 FHD Laptop - Intel Core i7-1355U - RAM 16GB - SSD 512GB - Nvidia MX550 | 8X8K6ES#A2N",
  category: "laptop",
  rate: 7.7,
  count: 3,
  brand:'hp',
  img: "/images/dynamic-page-image/hp.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 8,
  title: "HP",
  price: 1200,
  description: "HP 250 G10 15.6 FHD Laptop - Intel Core i7-1355U - RAM 8GB - SSD 512GB - Intel Iris Xe Graphics | 8A515EA#BH5",
  category: "laptop",
  rate: 6.4,
  count: 3,
  brand:'HP',
  img: "/images/dynamic-page-image/hp2.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 9,
  title: "MSI",
  price: 2800,
  description: "MSI GF63 Thin Gaming 15.6 FHD Laptop - Intel Core i5-12450H - RAM 8GB - SSD 512GB - NVIDIA RTX 2050 | 12UCX-428XAE",
  category: "laptop",
  rate: 4,
  count: 9,
  brand:'msi',
  img: "/images/dynamic-page-image/MSI.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 10,
  title: "APPLE",
  price: 3500,
  description: "Apple MacBook Air 13.6 Laptop - Apple M2 Chip - RAM 8GB - SSD 256GB - Midnight | MLY33",
  category: "laptop",
  rate: 8.9,
  count: 3,
  brand:'apple',
  img: "/images/dynamic-page-image/mac.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 11,
  title: "SAMSUNG-A21",
  price: 280,
  description: "Li-Po 5000 mAh, non-removable|25W wired|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
  category: "phone",
  rate: 9.9,
  count: 3,
  brand:"samsung",
  img: "/images/dynamic-page-image/A21.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 12,
  title: "SAMSUNG-A24",
  price: 320,
  description: "Li-Po 4000 mAh, non-removable|Octa-core (4x2.35 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53)|PowerVR GE8320|6.5 inches",
  category: "phone",
  rate: 9.7,
  count: 3,
  brand:"samsung",
  img: "/images/dynamic-page-image/A24.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 13,
  title: "iphone15",
  price: 1400,
  description: "Li-Ion 3349 mAh, non-removable|Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)|Apple GPU (5-core graphics)|6.1 inches, 91.3 cm2",
  category: "phone",
  rate: 8.9,
  count: 3,
  brand:"apple",
  img: "/images/dynamic-page-image/iphone15.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 14,
  title: "iphone11",
  price: 700,
  description: "Li-Ion 3110 mAh, non-removable (11.91 Wh)|Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)|Apple GPU (4-core graphics)|6.1 inches|iOS 13",
  category: "phone",
  rate: 9.4,
  count: 3,
  brand:"apple",
  img: "/images/dynamic-page-image/iphone11.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 15,
  title: "BLACK-VIEWa200",
  price: 650,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 7.4,
  count: 3,
  brand:"blackview",
  img: "/images/dynamic-page-image/BLACKVIEW.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 16,
  title: "BLACK-VIEW8",
  price: 150,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 9.9,
  count: 3,
  brand:"blackview",
  img: "/images/dynamic-page-image/BLACKVIEW2.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 17,
  title: "OPPOA3",
  price: 670,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 3.2,
  count: 3,
  brand:"oppo",
  img: "/images/dynamic-page-image/oppoa3.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 18,
  title: "Xiaomi-Black-Shark",
  price: 1100,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 9.2,
  count: 3,
  brand:"xiaomi",
  img: "images/dynamic-page-image/Xiaomiblackshark.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 19,
  title: "Huawei-P30",
  price: 160,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 4.9,
  count: 3,
  brand:"huawei",
  img: "/images/dynamic-page-image/huawei.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
  {
    id: 20,
  title: "NOKIA-C32",
  price: 320,
  description: "5000 mAh, non-removable|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)|Mali-G57 MC2|6.78 inches|1440p@30fps, 1080p@30fps",
  category: "phone",
  rate: 9.9,
  count: 3,
  brand:"nokia",
  img: "/images/dynamic-page-image/nokiac32.png",
  imgs:["images/dynamic-page-image/acer.jpeg","images/dynamic-page-image/acer.jpeg"]
  },
];
let input_file1=document.getElementById('upload1');
let uploaded_image1=document.getElementById('addimg1')

input_file2=document.getElementById('upload2');
let uploaded_image2=document.getElementById('addimg2')

input_file3=document.getElementById('upload3');
let uploaded_image3=document.getElementById('addimg3')




let id = document.getElementById('iditem');
let title = document.getElementById('titleitem');
let price = document.getElementById('priceitem');
let description = document.getElementById('discreptionitem');
let category = document.getElementById('categryitem');
let rate = document.getElementById('rateitem');
let count = document.getElementById('countitem');

let img1 = uploaded_image1.src;
let img2 = uploaded_image2.src;
let img3 = uploaded_image3.src;

let mood='add';
let addbutton=document.getElementById('addbutton')
let temp;
let brand=document.getElementById("branditem")
let add_product_img=document.getElementById('add-product-img')
let close_edit_container=document.getElementById("close-edit-container")
//let edit_container=document.getElementById("edit-container")
let tools_container=document.getElementById("tools-container")

input_file1.onchange=function(){
let file = new FileReader();
file.readAsDataURL(input_file1.files[0]);
file.onload = function(){
uploaded_image1.src=file.result;
}
}

input_file2.onchange=function(){
  let file = new FileReader();
  file.readAsDataURL(input_file2.files[0]);
  file.onload = function(){
  uploaded_image2.src=file.result;
   }
  }

  input_file3.onchange=function(){
    let file = new FileReader();
    file.readAsDataURL(input_file3.files[0]);
    file.onload = function(){
    uploaded_image3.src=file.result;
    }
    }
    tools_container.style.display="none"

    function clearInputs() {
      document.getElementById("titleitem").value = ""; // Clear the title input
      document.getElementById("priceitem").value = ""; // Clear the price input
      document.getElementById("discreptionitem").value = ""; // Clear the description input
      document.getElementById("categryitem").selectedIndex = 0; // Reset the category select to its default value
      document.getElementById("branditem").selectedIndex = 0;
      document.getElementById("countitem").value = ""; // Clear the count input
      document.getElementById("rateitem").value = ""; // Clear the rate input
      uploaded_image1.src="/images/header-images/add-image.png"
      uploaded_image2.src="/images/header-images/add-image.png"
      uploaded_image3.src="/images/header-images/add-image.png"
      }

function addItem() {
let newItem = {
  id: getNewId(),
  title: title.value,
  price: Number(price.value),
  description: description.value,
  category: category.value,
  rate: Number(rate.value),
  count: Number(count.value),
  brand:brand.value,
  img: uploaded_image1.src,
  imgs:[uploaded_image2.src,uploaded_image3.src]
};

if(mood=='add'){
  items.push(newItem);
  loading_container.style.display="flex"
  clearInputs();
  setTimeout(() => {
    loading_container.style.display="none"
    tools_container.style.display="none";
    
  }, 1500);
  
}else{
  let changeItem={
  id: id.value,
  title: title.value,
  price:Number(price.value),
  description: description.value,
  category: category.value,
  rate: Number(rate.value),
  count: Number(count.value),
  brand:brand.value,
  img: uploaded_image1.src,
  imgs:[uploaded_image2.src,uploaded_image3.src]
}
  items[temp]=changeItem
  control_Items()
  sortItemsByRateDescAndDisplay(items)
  mood = 'add';
  addbutton.innerText = "ADD";
  clearInputs();
  loading_container.style.display="flex"
  setTimeout(() => {
    loading_container.style.display="none"
    tools_container.style.display="none";
    
  }, 1500);
}
showData();
console.log(items)
}

function getNewId() {
let maxId = Math.max(...items.map(item => item.id));
return maxId + 1;
}
console.log(getNewId())




function showData(){
let table = '';

for(let i = 0;i<items.length;i++){

table +=`
<tr>
<td>${items[i].id}</td>
<td>${items[i].title}</td>
<td>${items[i].price}</td>
<td>${items[i].description}</td>
<td>${items[i].category}</td>
<td>${items[i].brand}</td>
<td>${items[i].rate}</td>
<td>${items[i].count}</td>
<td><button onclick="updateData(${i})" id="update">update</button></td>
<td><button onclick="deleteItem(${i}) " id="delete">delete</button></td>

</tr> 
`
}
let tbody=document.getElementById('tbody');
tbody.innerHTML = table;
}
showData();

function updateData(i){
id.value=items[i].id
title.value=items[i].title
price.value=items[i].price
category.value=items[i].category
rate.value=items[i].rate
count.value=items[i].count
brand.value=items[i].brand
description.value=items[i].description
uploaded_image1.src=items[i].img
uploaded_image2.src=items[i].imgs[0]
uploaded_image3.src=items[i].imgs[1]
mood='update'
addbutton.innerText='Update'
temp=i;
if(tools_container.style.display="none"){
    tools_container.style.display="flex"
}

}
let searchMod='name'

let searchbyinput=document.getElementById('searchby');
searchbyinput.addEventListener("change",function(){searchMod=searchbyinput.value;console.log(searchMod)});



function searchby(value) {
let table = '';

for (let i = 0; i < items.length; i++) {
  if (searchMod === 'name' && items[i].title.toLowerCase().includes(value.toLowerCase())) {
      table += `
          <tr>
              <td>${items[i].id}</td>
              <td>${items[i].title}</td>
              <td>${items[i].price}</td>
              <td>${items[i].description}</td>
              <td>${items[i].category}</td>
              <td>${items[i].brand}</td>
              <td>${items[i].rate}</td>
              <td>${items[i].count}</td>
              <td><button onclick="updateData(${i})" class="update">update</button></td>
              <td><button onclick="deleteItem(${i})" class="delete">delete</button></td>
          </tr>
      `;
  } else if (searchMod === 'category' && items[i].category.toLowerCase().includes(value.toLowerCase())) {
      table += `
          <tr>
              <td>${items[i].id}</td>
              <td>${items[i].title}</td>
              <td>${items[i].price}</td>
              <td>${items[i].description}</td>
              <td>${items[i].category}</td>
              <td>${items[i].brand}</td>
              <td>${items[i].rate}</td>
              <td>${items[i].count}</td>
              <td><button onclick="updateData(${i})" class="update">update</button></td>
              <td><button onclick="deleteItem(${i})" class="delete">delete</button></td>
          </tr>
      `;
  }
}

let tbody = document.getElementById('tbody');
tbody.innerHTML = table;
}

add_product_img.addEventListener("click",function(){
tools_container.style.display='flex';
})
close_edit_container.addEventListener("click",function(){
  tools_container.style.display='none';
})
let update =document.getElementById("update");



function deleteItem(i){
  if(confirm()){
        items.splice(i,1);
    setTimeout(() => {
    showData();
    clearInputs();
    mood='add';
    addbutton.innerText='ADD';
    tools_container.style.display='none';
    }, 100);
    control_Items()
    sortItemsByRateDescAndDisplay(items)
  }

}

//cruds
const container = document.getElementById("home-search-container");

//home search
let string_from_input
let search_input=document.getElementById('search-input')
function createItemCards(name) {
  
 string_from_input=String(name)||"";
  container.innerHTML = "";
  let found=false;
  if(string_from_input.trim().length != 0){
   
    for (let i = 0; i < items.length; i++) {
      if (items[i].title.toLowerCase().includes(string_from_input.toLowerCase())){
          found=true;
          if(i==0){
            clearTimeout()
            container.innerText = "";
          container.innerHTML = "";
          }
        if(found){
          clearTimeout();
          container.style.height = '340px';
        }
       
        container.style.display='flex'
        const card = document.createElement("div");
        card.classList.add("search-card");
  
        const imgBody = document.createElement("div");
        imgBody.classList.add("search-card-img-body");
  
        const img = document.createElement("img");
        img.classList.add("search-card-img");
        img.src = items[i].img;
  
        const title = document.createElement("p");
        title.classList.add("search-card-title");
        title.textContent = items[i].title;
  
        const description = document.createElement("p");
        description.classList.add("search-card-description");
        description.textContent = items[i].description;

        let foundedincart=false
        let stringcart='add to cart';
       
            for(let z=0;z<cart.length;z++){
              if(items[i].id==cart[z].id){
                foundedincart=true
                stringcart='added'
                break;
              }
             
            }
  
        const button = document.createElement("button");
        button.textContent = stringcart;
        button.setAttribute("onclick", `addToCart(${i})`);
  
        // Append elements to card
        imgBody.appendChild(img);
        card.appendChild(imgBody);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);
  
        // Append card to container
        container.appendChild(card);   
      }

    }
  }else{
    container.style.display='none';
  }
  if(found==false){
    container.style.display='none';
  }
  
  

}
//home search
let home_button=document.getElementById("home-button")
let edit_button=document.getElementById("edit-button")
let contact_button=document.getElementById("contact-button")
let home=document.getElementById("home")
let cruds=document.getElementById("cruds")

let contact=document.getElementById("contact")
let dynmic_category_page=document.getElementById('dynmic-category-page')
function changePages(page){
    if(page=="home-button"){
        home.style.display="flex";
        cruds.style.display="none";
        contact.style.display="none";
        dynmic_category_page.style.display="none";
        LogIN.style.display='none'
        window.scroll({
          top: 0, // Vertical scroll position (in pixels)
          behavior: 'smooth' // Optional: smooth scrolling
        });
    }else if(page=="edit-button"){
        home.style.display="none";
        contact.style.display="none";
        cruds.style.display="flex";
        dynmic_category_page.style.display="none";
        LogIN.style.display='none'
        window.scroll({
          top: 0, // Vertical scroll position (in pixels)
          behavior: 'smooth' // Optional: smooth scrolling
        });
    }else if(page=="contact-button"){
        home.style.display="none";
        contact.style.display="block";
        cruds.style.display="none";
        dynmic_category_page.style.display="none";
        LogIN.style.display='none'
        window.scroll({
          top: 0, // Vertical scroll position (in pixels)
          behavior: 'smooth' // Optional: smooth scrolling
        });
    }
    nav_container.style.left='-100%'
   
}
//cart
let cart=[];
function addToCart(i){
  console.log(loginobject)
  if(loginobject.username!=null){
    let cartobj=items[i]
    cartobj.countincart=1;
    let found=false;
    for(let j=0;j<cart.length;j++){
     if(items[i].id==cart[j].id){
       found=true;
       break;
     }
    }
    if(found==false){
     cart.push(cartobj);
     console.log(cart)
     displayFromCart(); 
     change_cart_number();
     if(dynmic_category_page.style.display=="flex")
     dispaly_items_dynamic_body(categorychoosen);
    }
    if(container.style.display=='flex')
    createItemCards(string_from_input);
   
    control_Users()
  }else{
    alert("please LOGIN")
  }
 
}
let cartProductsBody = document.querySelector(".cart-products-body");
function displayFromCart() {
  cartProductsBody.innerHTML=""
  for(let i=0;i<cart.length;i++){
    let productHTML = `
      <div class="product">
          <div class="product-img-body">
              <img src="${cart[i].img}" alt="${cart[i].title}" class="product-img">
          </div>
          <div class="product-description-body">
              <p class="product-title">${cart[i].title}</p>
              <p class="product-price price">${cart[i].price}USD</p>
              <div class="product-quantity-body">
                  <button class="increase-product" onclick="decrease_product_countity(${i})">-</button>
                  <p class="product-quntity">${cart[i].countincart}</p>
                  <button class="increase-product" onclick="increase_product_countity(${i})">+</button>
                  <p class="total-per-product price">${getPricePerProduct(i)}USD</p>
              </div>
          </div>
      </div>
  `;
  
  cartProductsBody.innerHTML += productHTML;
  }
  getPriceForAllProduct()
}
function getPricePerProduct(i){
  return cart[i].price*cart[i].countincart;
}
let total_of_products=document.getElementById('total-of-products');
function getPriceForAllProduct(){
  let total=0
  for(let i=0;i<cart.length;i++){
    total+=cart[i].price*cart[i].countincart
  }
  total_of_products.innerText=total+"USD";
}

function change_cart_number(){
  if(cart!=null){
    document.getElementById('cart-number').innerText=cart.length;
    document.getElementById('cart-number2').innerText=cart.length;
  }
 

}
function clear_cart(){
  cart=[];
  displayFromCart();
  createItemCards(string_from_input);
  change_cart_number();
  control_Users();
  if(dynamic_products_body.style.display=="flex")
  dispaly_items_dynamic_body(categorychoosen);
  
}
function increase_product_countity(i){
  if(cart[i].countincart+1<=cart[i].count)
  cart[i].countincart++;
  displayFromCart();
  getPriceForAllProduct();
  control_Users()
}
function decrease_product_countity(i){
cart[i].countincart--;
if(cart[i].countincart==0){
  cart.splice(i,1)
  change_cart_number();
  control_Users()
}
if(dynamic_products_body.style.display=="flex")
dispaly_items_dynamic_body(categorychoosen);
displayFromCart()
getPriceForAllProduct()
createItemCards(string_from_input);

control_Users()

}
function control_cart(){
  getPriceForAllProduct();
  change_cart_number()
  displayFromCart()

}
let loading_container=document.getElementById("loading_container")
function checkouts(){
  
  if(cart.length!=0){
    console.log("clicked")
    for(let i=0;i<cart.length;i++){
      for(let j=0;j<items.length;j++){
        if(cart[i].id==items[j].id){
          items[j].count-=cart[i].countincart;
          if(items[j].count==0)
          items.splice(j,1)
            console.log(cart)
          break;
        }
      }
    }
    if(confirm("comfirm")){
      loading_container.style.display='flex'
      setTimeout(() => {
         clear_cart()
         loading_container.style.display="none"
         setTimeout(() => {
           closethecart()
           if(dynmic_category_page.style.display=='flex'){
             dispaly_items_dynamic_body(categorychoosen)
          }
          if(container.style.display=='flex'){
           createItemCards(string_from_input)
          }
         }, 10);
         control_Items()
         control_Users()
         sortItemsByRateDescAndDisplay(items)
      }, 3000);
    
    }
    setTimeout(() => {
      alert("DONE")
    }, 3500);
    control_Users()
     
  }
}
//cart
//dynamic page
let range_body=document.getElementById("range-body")
let open_filters_container=document.getElementById("open-filters-container")
let dynamic_title=document.getElementById("dynamic-title")
let discreptiontitle=document.getElementById("discreptiontitle");
let dynamic_icon=document.getElementById("dynamic-icon")
let dynamic_products_body=document.getElementById("dynamic-products-body") 
let filter_by_range=document.getElementById("filter-by-range");
let range_value=document.getElementById("range-value")
let categorychoosen;
filter_by_range.addEventListener("input",function(){
  range_value.innerText=filter_by_range.value;
  dispaly_items_dynamic_body(categorychoosen)
})
open_filters_container.addEventListener("click",function(){
  if(range_body.style.height=='140px'){
    range_body.style.height='0px'
    range_body.style.width='0px'
    setTimeout(() => {
      range_body.style.display='none'
    }, 200);
  }else{
    range_body.style.display='flex'
    setTimeout(() => {
      range_body.style.height='140px'
      range_body.style.width='242px'
    }, 1);
   
  }

})


let brandfilter=document.getElementById('brandfilter')
brandfilter.onchange=function(){
  dispaly_items_dynamic_body(categorychoosen)
}
let datafounded=false;
function dispaly_items_dynamic_body(name){
  categorychoosen=name;
  home.style.display='none';
  cruds.style.display='none'
  contact.style.display='none'
  categories_body.style.display='none'
  dynmic_category_page.style.display='flex'
  if(name=="phone"){
    dynamic_title.innerText="SMART PHONES";
   
  }else{
    dynamic_title.innerText="LAPTOPS";
  }
  
  datafounded=false;
 dynamic_products_body.innerHTML=""
for(let i=0;i<items.length;i++){
  let stringcart='Add to cart'
  let functionalty=''
  for(let j=0;j<cart.length;j++){
    if(items[i].id==cart[j].id){
      functionalty='disabled'
        stringcart='Added'
      break;
    }
  }

  if(brandfilter.value=="all"){
    if(items[i].category == name && items[i].price<=filter_by_range.value){
      dynamic_products_body.innerHTML+=`
   <div class="dynamic-product-card">
   <button class="quickviewbutton" onclick="openquickview(${items[i].id})">quick view</button>
   <img src="${items[i].img}" class="dynamic-product-img" alt="product photo">
   <p class="dynamic-product-title">${items[i].title}</p>
   <p class="dynamic-product-description">${items[i].description}</p>
   <p class="dynamic-product-price">${items[i].price}USD</p>
   <div class="card-rate">
            <p>${items[i].rate}</p><img src="/images/dynamic-page-image/star.png" alt="">
           </div>
   <button class="dynamic-product-addToCart" onclick="addToCart(${i})" ${functionalty} >${stringcart}</button>
  </div>
   `
   datafounded=true;
   }

  }
  else{
    if(items[i].category == name && items[i].price<=filter_by_range.value
    && brandfilter.value == items[i].brand){
      dynamic_products_body.innerHTML+=`
   <div class="dynamic-product-card">
   <button class="quickviewbutton" onclick="openquickview(${items[i].id})">quick view</button>
   <img src="${items[i].img}" class="dynamic-product-img" alt="product photo">
   <p class="dynamic-product-title">${items[i].title}</p>
   <p class="dynamic-product-description">${items[i].description}</p>
   <p class="dynamic-product-price">${items[i].price}USD</p>
   <div class="card-rate">
   <p>${items[i].rate}</p><img src="/images/dynamic-page-image/star.png" alt="">
  </div>
   <button class="dynamic-product-addToCart" onclick="addToCart(${i})" ${functionalty} >${stringcart}</button>
  </div>
   `
   datafounded=true;
   }

  }
  
}
if(datafounded==false){
  console.log("no data found")
    for(let z=0;z<items.length;z++){
      let stringcart='Add to cart'
  let functionalty=''
  for(let j=0;j<cart.length;j++){
    if(items[z].id==cart[j].id){
      functionalty='disabled'
        stringcart='Added'
      break;
    }
  }
      if(items[z].category==name){
        dynamic_products_body.innerHTML+=`
    <div class="dynamic-product-card">
    <button class="quickviewbutton" onclick="openquickview(${items[z].id})">quick view</button>
    <img src="${items[z].img}" class="dynamic-product-img" alt="product photo">
    <p class="dynamic-product-title">${items[z].title}</p>
    <p class="dynamic-product-description">${items[z].description}</p>
    <p class="dynamic-product-price">${items[z].price}USD</p>
    <div class="card-rate">
    <p>${items[z].rate}</p><img src="/images/dynamic-page-image/star.png" alt="">
   </div>
    <button class="dynamic-product-addToCart" onclick="addToCart(${z})">${stringcart}</button>
    </div>
    `
    datafounded=true;
         }//if
    }//for
 }//if

}//function
//dynamic page

let home_toprated_body=document.getElementById("home-toprated-body")
console.log(home_toprated_body)
function sortItemsByRateDescAndDisplay(items) {
  home_toprated_body.innerHTML = "";
  
  const sortedItems = items.slice().sort((a, b) => b.rate - a.rate);
  
  let html = "";

  const itemsToDisplay = sortedItems.length >= 8 ? 8 : sortedItems.length;

  for (let i = 0; i < itemsToDisplay; i++) {
      html += `
      <div class="dynamic-product-card">
      <button class="quickviewbutton" onclick="openquickview(${sortedItems[i].id})">quick view</button>
          <img src="${sortedItems[i].img}" class="dynamic-product-img" alt="product photo">
          <p class="dynamic-product-title">${sortedItems[i].title}</p>
          <p class="dynamic-product-description">${sortedItems[i].description}</p>
          <p class="dynamic-product-price">${sortedItems[i].price} USD</p>
          <div class="card-rate">
              <p>${sortedItems[i].rate}</p><img src="/images/dynamic-page-image/star.png" alt="">
          </div>
      </div>`;
  }

  home_toprated_body.innerHTML += html;
}


  sortItemsByRateDescAndDisplay(items);

  window.onload = function() {
    home_toprated_body.scrollLeft = 0;
};

let quickviewContainer=document.getElementById("quickviewContainer")
let mainimg=document.getElementById("main-img")
let quick1=document.getElementById("quick1")
let quick2=document.getElementById("quick2")
let quick3=document.getElementById("quick3")
let close_quickcontainer=document.getElementById("close-quickcontainer")
let quickviewtitle =document.getElementById("quickviewtitle")
let edit_button2=document.getElementById("edit-button2")
edit_button2.style.display="none"
close_quickcontainer.addEventListener('click',function(){
  quickviewContainer.style.display='none'
})

function openquickview(id){
  let index = items.findIndex(element => element.id === id);
  console.log(index)
  quickviewContainer.style.display="flex"
  mainimg.src=items[index].img
  quick1.src=items[index].img
  quick2.src=items[index].imgs[0]
  quick3.src=items[index].imgs[1]
  quickviewtitle.innerText=items[index].title
}
quick1.addEventListener("click",function(){
mainimg.src=quick1.src
})
quick2.addEventListener("click",function(){
  mainimg.src=quick2.src
})
quick3.addEventListener("click",function(){
  mainimg.src=quick3.src
})



//sign 

let signin=false;
let profileContainer=document.getElementById("profile-container")
let profileimg=document.getElementById("profileimg")
let signinbutton=document.getElementById("signinbutton")
let logoutbutton=document.getElementById("logoutbutton")
let LogIN=document.getElementById("LogIN")
profileimg.addEventListener("click",function(){
  if(profileContainer.style.display=="none"){
    profileContainer.style.display='block'
  }else{
    profileContainer.style.display='none'
  }
})

signinbutton.addEventListener("click",function(){
    LogIN.style.display="block"
    home.style.display="none";
    contact.style.display="none";
    dynmic_category_page.style.display="none";
    window.scroll({
      top: 0, // Vertical scroll position (in pixels)
      behavior: 'smooth' // Optional: smooth scrolling
    });
})

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container3 = document.querySelector(".LOG-container");

sign_up_btn.addEventListener('click', () =>{
    container3.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container3.classList.remove("sign-up-mode");
});


let users=[{
  username:"bob",
  password:"123",
  email:"fakih@gmail.com",
  type:"admin",
  cart:[{brand: "samsung",category: "phone",count: 3,countincart: 1,description: "Li-Po 5000 mAh, non-removable|25W wired|Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",id: 11,img: "/images/dynamic-page-image/A21.png",
  imgs: ['images/dynamic-page-image/acer.jpeg', 'images/dynamic-page-image/acer.jpeg'],price: 280,rate: 9.9,
  title: "SAMSUNG-A21"}]
},
{
  username:"issa",
  password:"123",
  email:"issa@gmail.com",
  type:"user",
  cart:[]
}]
loginbool=false;
edit_button.style.display="none"
let loginobject={};
let signupbutton=document.getElementById("signupbutton")
let profile_username=document.getElementById("profile-username")
function credential() {
  let found=false
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
    if(username.trim()!="" && password.trim()!=""){
      for(let i=0;i<users.length;i++){
        if(username==users[i].username
          &&password==users[i].password){
            found=true
            loginbool=true;
            loginobject=users[i];
            cart=users[i].cart
           control_cart()
            profile_username.innerText=`login as ${users[i].username}`
            signinbutton.style.display="none"
            logoutbutton.style.display="block"
            if(users[i].type=='admin'){
              if(window.innerWidth > 760)
              edit_button.style.display="block"
              edit_button2.style.display="block"
            }
            signin=true;
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            changePages("home-button")
            break;
          }
      }
      if(!found){
        alert("invalid inputs")
      }
    }else{
      alert("please fill the required inputs")
    }
}

logoutbutton.addEventListener("click",function(){
  signin=false
  edit_button.style.display="none"
  edit_button2.style.display="none"
  signinbutton.style.display="block"
  logoutbutton.style.display="none"
  loginobject={}
  clear_cart();

  loading_container.style.display="flex"

  setTimeout(() => {
    if(dynmic_category_page.style.display=="flex")
      dispaly_items_dynamic_body(categorychoosen);
     
     if(container.style.display=='flex')
     createItemCards(string_from_input);
  
    profile_username.innerText=`GUEST`
    loading_container.style.display="none"
    
  }, 1500);
  
  
})

function control_Users(){
  for(let i=0;i<users.length;i++){
    let username=loginobject.username
    if(username==users[i].username){
      users[i].cart=cart
      break;
    }
  }
    localStorage.setItem('users', JSON.stringify(users));
  }
  function control_Items(){
    localStorage.setItem('items', JSON.stringify(items));
  }

  let username1=document.getElementById("username1")
  let email=document.getElementById("email")
  let password1=document.getElementById("password1")

  signupbutton.addEventListener("click",function(){
    let bool=false
    let newuser={
      username:username1.value,
      password:password1.value,
      email:email.value,
      type:"user",
      cart:[]
    }
    for(let i=0;i<users.length;i++){
      if(users[i].username==newuser.username){
        bool=true;
        break;
      }
       
    }
    if(!bool){
      users.push(newuser)
      var username = document.getElementById('username').value=`${newuser.username}`;
      var password = document.getElementById('password').value=`${newuser.password}`;
      control_Users()
      credential()
    }else{
      alert("username is used")
    }
   
    
  })

  
function initialize() {
    const usersls = localStorage.getItem('users');
    const itemsls = localStorage.getItem('items');
    if (!usersls) {
      localStorage.setItem('users', JSON.stringify(users));
    }else{
      users = JSON.parse(localStorage.getItem('users'));
    }
    if (!itemsls) {
      localStorage.setItem('items', JSON.stringify(items));
    }else{
      items = JSON.parse(localStorage.getItem('items'));
    }
}
initialize()
//sign in
window.addEventListener('resize', function(){
  if(window.innerWidth >760 && loginobject.type=="admin"){
    edit_button.style.display='block'
    
  }else{
    edit_button.style.display='none'
  }
});
