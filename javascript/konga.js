

let lord = document.querySelector(".grid")

function cartegory() {
    fetch("https://dummyjson.com/products/category/beauty")
        .then((response) => {
            if (response.status == 200) {
                console.log("welcome");
                return response.json();
            } else {
                console.log("Api Error")
            }
        })
        .then((data) => {
            for (let x = 0; x < data.products.length; x++) {
                let item = data.products[x]

                lord.innerHTML += generateListItem(item.thumbnail, item.title, item.price, item.discountPercentage, item.rating)
            }
        })
}
function generateListItem(thumbnail, title, price, discountPercentage, rating) {
    let htmlCode = `
    <div class="gridItem"> 
   
        <img src="${thumbnail}" height="700px"><br/>
         
          <div>
             <p>${title}</p>  
             <div id="price">
                <h4>₦${price}</h4>
                <p id="discount">-${discountPercentage}%</p>
                
              </div>
               <p>Rating:<span id="rat"> ${rating}</span></p>
          </div>
          
    </div>
    `;
    return htmlCode;
}

let drop = document.querySelector('.dropdown-content');
function cat() {
    fetch("https://dummyjson.com/products/categories")
        .then((response) => {
            if (response.status == 200) {
                console.log("is gooing");
                return response.json();
            } else {
                console.log("Api Error")
            }
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let item = data[i]

                drop.innerHTML += generate(item.slug, item.name)
            }
        })
}
function generate(slug, name) {
    let htmlCode = `
      
      <a href="/category/${slug}.html">${name}</a>

    `;
    return htmlCode
}

function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
}


