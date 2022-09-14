const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// function makeGetRequest(url, callback) {
//     let xhr;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

class GoodsList {
    constructor(container ='.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
        });
    }
    _getProducts(){
        return fetch(`${API_URL}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new GoodsItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class GoodsItem {
    constructor(product) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
    }
    render(){
        return `<div class="products-item" data-id="${this.id_product}">
                    <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                    </div>
                </div>`
    }


}

let list = new GoodsList();
class Basket {
    constructor(container = `.cart-basket`) {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data =>{
                this.goods = data.contents;
                this.render()
            })
    }

    _getBasketItem(){
        return fetch(`${API_URL}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    _clickBasket(){
        document.querySelector(`.cart-button`).addEventListener(`click`, () => {
            document.querySelector(this.container).classList.toggle(`invisible`);
            });
    }

    addGood(){

    }
    removeGood(){

    }
    changeGood(){

    }
    render(){
        const block = document.querySelector(`${this.container}`);
        for (let product of this.goods){
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

}
class BasketItem{
    render(product) {
        return `<div class="cart-basket-item" data-id="${product.id_product}">
                    <div class="product-bio">
                        <div class="desc">
                            <h3>${product.product_name}</h3>
                            <p>Quantity: ${product.quantity}</p>
                            <p>${product.price} each</p>
                            <button class="buy-btn">Купить</button>
                        </div>
                    </div>
                    <div class="sum-basket">
                        <p class="product-price">${product.price * product.quantity}</p>
                        <button class="del-item-btn">x</button>                  
                    </div>
                </div>`
    }
}

new Basket();




