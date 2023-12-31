
// class Dog {
//     constructor(name, age, injection, favorite) {
//       this.name = name;
//       this.age = age;
//       this.injection = injection;
//       this.favorite = favorite;
//     }
//     walkInPark() {
//       console.log(`${this.name}이(가) 산책합니다.`);
//     }
//   }

//   const d1 = new Dog('뽀삐');
//   const d2 = new Dog('초코');

//   d1.walkInPark();
//   d2.walkInPark();


// 하나의 상품 객체 설계도
class Product {
  // 객체를 만들 때 초기값을 세팅하는 용도
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}
// 객체 생성
const p1 = new Product(
  '냠냠이',
  'data:image/jpeg;base64,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',
  5000,
  '맛 좋은 김 팔아요',
);
const p2 = new Product(
  '쩝쩝이',
  'data:image/jpeg;base64,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',
  3000,
  '국밥 마이쩡',
);

// 속성 객체를 만드는 클래스
class Attribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

// DOM을 생성하는 공통 클래스
class Component {
  // tagId : 부모태그 역할을 할 태그의 id속성값
  constructor(tagId) {
    this.tagId = tagId;
  }
  // 태그를 생성하는 함수
  // classnames = 'box blue circle'
  createElement(
    tagName = "",
    classnames = "",
    childHtml = "",
    attributes = []
  ) {
    const $newTag = document.createElement(tagName);
    if (classnames) $newTag.className = classnames;
    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) => {
        $newTag.setAttribute(attr.name, attr.value);
      });
    }
    if (childHtml) $newTag.innerHTML = childHtml;
    document.getElementById(this.tagId).appendChild($newTag);
    return $newTag;
  }
}

// 화면 가장 상단부에 들어갈 장바구니 총액 정보 태그 생성 클래스
class ShoppingCart extends Component {
  constructor(tagId) {
    super(tagId);
    // 장바구니에 담은 Product들을 저장
    this.cartItems = [];
  }

  render() {
    const childHtml = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;
    this.createElement("section", "cart", childHtml, [
      new Attribute("id", "cart-id"),
      new Attribute("title", "add to cart"),
    ]);
  }
}

// 한개의 LI태그를 생성하는 컴포넌트 클래스 설계
class ProductItem extends Component {
  constructor(product, tagId) {
    super(tagId);
    this.product = product;
  }

  // 담기버튼 클릭이벤트 핸들러
  addToCartHandler() {
    console.log("장바구니에 상품을 추가함!");
    // 이 핸들러에서 누른 그 상품의 정보를 알아야 한다.
    console.log(this.product);
  }

  render() {
    const childHtml = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}원</h3>
        <p>${this.product.description}</p>
        <button>담기</button>
      </div>
    </div>
    `;
    const $prod = this.createElement("li", "product-item", childHtml);

    const $addCartBtn = $prod.querySelector("button");
    $addCartBtn.addEventListener("click", () => this.addToCartHandler());
    return $prod;
  }
}

// 한 개의 UL을 생성하는 클래스
class ProductList extends Component {
  constructor(tagId) {
    super(tagId);
    // 상품들을 모아 놓은 배열
    this.products = [
      p1,
      p2,
      new Product(
        "햄버거",
        "https://images.chosun.com/resizer/5jStJ5InVS4u3iHvEzB8y_tGrr8=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HV765ADF7VF4FLG5KISDNFMUJ4.PNG",
        16900,
        "꽈뜨로 맥씨멈 스테카 버거~"
      ),
      new Product(
        "애플워치",
        "https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510",
        400000,
        "APPLE watch 2세대 2022"
      ),
      new Product(
        "애플망고",
        "https://m.thegiboon.com/web/product/big/202104/ea08c22e8939ab1977487abc826b8ab8.jpg",
        60000,
        "맛있는 맹고~ 당장 사먹어야지~"
      ),
    ];
  } // end constructor

  render() {
    this.createElement("ul", "product-list", "", [
      new Attribute("id", "prod-list"),
    ]);

    this.products.forEach((prod) => {
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();
    });
  }
}

// ShoppingCart와 ProductList를 합쳐서 렌더링처리하는 클래스
class Shop {
  constructor() {
    this.render();
  }

  render() {
    new ShoppingCart("app").render();
    new ProductList("app").render();
  }
}

// 렌더링 명령
new Shop();
