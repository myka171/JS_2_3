class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render (){
        return `<div class="products-item"> <img src="${this.img}" alt=""> <h3>${this.title}
            </h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    let;
    constructor() {
        this.goods = []
    }
    fetchGoods(){
        this.goods = [
            {title : 'cap', price : 1000, img : 'img/cap.webp'},
            {title : 'scarf', price : 1500, img : 'img/scarf.webp'},
            {title : 'coat', price : 4000, img : 'img/coat.webp'},
            {title : 'pants', price : 2600, img : 'img/pants.webp'}
        ];
    }
    render(){
        let listHtml = '';
        this.goods.forEach(item => {
            const goodItem = new GoodsItem(item.title, item.price, item.img);
           listHtml += goodItem.render();
        });
        document.querySelector('.products-list').innerHTML = listHtml;
    }
    getSum() {
        let s = 0
        this.goods.forEach(item => {console.log( s = 0 + item.price)})
    }
}
class Basket {
    addGood(){

    }
    removeGood(){

    }
    changeGood(){

    }
    render(){

    }

}
class BasketList{
    render() {

    }
}

const  list = new GoodsList();
list.fetchGoods();
list.render();
