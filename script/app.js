const $categorycards = document.querySelector(".categories_wrapper");
const $itemsWrapper = document.querySelector(".items-wrapper");

axios("https://api.escuelajs.co/api/v1/categories")
.then(response => renderInfodata(response.data))
.catch(error => console.log(error))


function renderInfodata(infodata){
    const categoryFragment = document.createDocumentFragment();
    infodata.map(category => {
        const a = document.createElement("a");
        a.className = "card-category";
        a.href = `/pages/category.html?id=${category.id}`
        a.innerHTML = `
        <img src="${category.image}" />
        <p>${category.name}</p>
        `
        categoryFragment.appendChild(a);
    })
    $categorycards.appendChild(categoryFragment);
    console.log(categoryFragment);
}

axios("https://api.escuelajs.co/api/v1/products")
.then(response => renderProductsData(response.data))
.catch(error => console.log(error.message))

function renderProductsData(infos){
    console.log(infos)
    const firstFragment = document.createDocumentFragment()
    infos.slice(45).map(data => {
        const div = document.createElement("div");
        div.className = "item-add";
        div.innerHTML = `
        <img src="${data.images[2]}" />
        <p>${data.price}$</p>
        `
        firstFragment.appendChild(div);
    })
    $itemsWrapper.appendChild(firstFragment)
}
 