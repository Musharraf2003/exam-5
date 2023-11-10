const categoryid = new URLSearchParams(window.location.search).get("id");
const $featuredimg = document.querySelector(".featured-img");
const $categoryProducts = document.querySelector("#category-products-wrapper");

axios(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryid}`)
.then(response => renderProducts(response.data))
.catch(err => console.log(err))

function renderProducts(productsData){
    // let productbla = productsData.map(item => item.images[0]);
    // console.log(productbla);
    $featuredimg.src = `${productsData[0].images[0]}`;
    const productFragment = document.createDocumentFragment();
    productsData.map(item => {
        const div = document.createElement("a");
        div.className = "cat-product";
        div.href = `/pages/individual.html?id=${item.id}`
        div.innerHTML =`
        <img src="${item.images[0]}" />
        <p>${item.title}</p>
        <p>${item.description}</p>
        <strong>${item.price} $</strong>
        `
        productFragment.appendChild(div);
    })
    $categoryProducts.appendChild(productFragment);
}