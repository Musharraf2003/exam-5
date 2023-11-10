const $individualItemWrapper =document.querySelector("#one-item-presentation");
const individualid = new URLSearchParams(window.location.search).get("id");
const $itemImg = document.querySelector(".item-img");
const $itemTitle = document.querySelector(".item-title");
const $itemModel = document.querySelector(".model-item");
const $itemCategory = document.querySelector(".item-category");
const $itemPrice = document.querySelector(".price-item");

axios(`https://api.escuelajs.co/api/v1/products/${individualid}`)
.then(response => renderFinalData(response.data))
.catch(err => console.log(err))


function renderFinalData(data){
    $itemImg.src = data.images[0];
    $itemTitle.innerText = data.title + " - " + data.description;
    $itemModel.innerText = "Model: " + data.title;
    $itemCategory.innerText = "Category: " + data.category.name;
    $itemPrice.innerText = "Price: " + data.price + "$";
}
