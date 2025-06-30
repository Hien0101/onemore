const contentWire = document.querySelectorAll(".content-wire-left");
contentWire.forEach(function (element) {
  element.addEventListener("click", function () {
    location.reload();
  });
});
const contentWireee = document.querySelectorAll(".content-cart-left-texts");
contentWireee.forEach(function (element) {
  element.addEventListener("click", function () {
    location.reload();
  });
});
const contentText = document.querySelectorAll(".content-font-left");
contentText.forEach(function (element) {
  element.addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});
const returnLoadBtn = document.querySelector(".return-load");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    returnLoadBtn.style.display = "block";
  } else {
    returnLoadBtn.style.display = "none";
  }
  if (returnLoadBtn) {
    returnLoadBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
let cartItems = [];
const fontTimeBtn = document.querySelector(".fonttime-button");
const procenterNice = document.getElementById("procenter-nice");
const productesion = [
  {
    id: 1,
    images: "./onemore/img/sanpham1.webp",
    name: " Nụ Hồng Trong Nắng Ban Mai",
    price: "1.730.000đ",
    oldPrice: "290.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 2,
    images: "./onemore/img/sanpham2.webp",
    name: "Giấc Mơ Da Mịn Như Tơ",
    price: "730.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 3,
    images: "./onemore/img/sanpha3.webp",
    name: "Làn Gió Mới Cho Da Em",
    price: "830.000đ",
    oldPrice: "290.000đ",
    perCent: "-20%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 4,
    images: "./onemore/img/sanpham4.webp",
    name: "Ánh Nhìn Nhẹ Như Mây",
    price: "890.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];
function displayfontTime(products) {
  fontTimeBtn.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-item");
    productCard.innerHTML = `
    <div class="product-image-container">
    <img src="${product.images}" alt="${product.name}" class="product-img" /> ${
      product.perCent ? `<span class=""></span>` : ""
    }
    <div class="product-overlay">
    <button class="view-now">Xem Ngay</button>
    <button class="buy-now">Mua Ngay</button>
    </div>
    </div>
    <h4 class="product-name">${product.name}</h4>
    <p class="product-pacess">
    <span > ${product.price}</span>${
      product.oldPrice ? `<span  class= ""  > </span>` : ""
    }
    </p>
    `;
    fontTimeBtn.appendChild(productCard);
    productCard.querySelectorAll(".view-now").forEach((button) => {
      button.addEventListener("click", () => {
        showpopup(product);
      });
    });
    productCard.querySelectorAll(".buy-now").forEach((button) => {
      button.addEventListener("click", () => {
        buypopup(product);
      });
    });
  });
}
displayfontTime(productesion);

const productListContainer = document.getElementById("product-list");
const filterButton = document.querySelectorAll(".filter-btn");

const productList = [
  {
    id: 1,
    images: "./onemore/img/sanpham1.webp",
    name: "Chạm Nhẹ Vào Làn Da Xinh",
    price: "1.230.000đ",
    oldPrice: "1.590.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 2,
    images: "./onemore/img/sanpham2.webp",
    name: "Em Là Hương Sớm Tinh Khôi",
    price: "2.130.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 3,
    images: "./onemore/img/sanpha3.webp",
    name: "Hương Hoa Dịu Dàng Cho Mái Tóc",
    price: "2.230.000đ",
    oldPrice: "2.790.000đ",
    perCent: "-10%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 4,
    images: "./onemore/img/sanpham4.webp",
    name: "Suối Tóc Dài – Mềm Như Nhung",
    price: "930.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 5,
    images: "./onemore/img/sanpham5.webp",
    name: "Dầu Gội Thảo Mộc Cho Da Đầu Khỏe",
    price: "4.630.000đ",
    oldPrice: "4.990.000đ",
    perCent: "-12%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 6,
    images: "./onemore/img/sanpham6.webp",
    name: "Tóc Mượt Như Chạm Lụa",
    price: "1.430.000đ",
    oldPrice: "1.790.000đ",
    perCent: "-22%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 7,
    images: "./onemore/img/sanpham7.webp",
    name: "Sữa Tắm Dưỡng Da Từ Thiên Nhiên",
    price: "930.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 8,
    images: "./onemore/img/sanpham8.webp",
    name: "Tắm Như Ôm Trọn Mây Trời",
    price: "2.230.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-24%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 9,
    images: "./onemore/img/sanpham9.webp",
    name: "Tinh Dầu Hoa Cho Tóc Bồng Bềnh",
    price: "6.230.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 10,
    images: "./onemore/img/sanpham10.webp",
    name: "Dưỡng Da Trong Từng Bọt Nhẹ",
    price: "2.630.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-27%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];
function displayProducts(products) {
  productListContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-item");
    productCard.innerHTML = `
    <div class="product-image-container">
    <img src="${product.images}" alt="${product.name}" class="product-img" /> ${
      product.perCent
        ? `
      <span class="product-percentafge">${product.perCent}</span>`
        : ""
    }
            <div class="product-overlay">
              <button class="view-now">Xem Ngay</button>
              <button class="buy-now">Mua Ngay</button>
            </div>
          </div>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-pacess">
          <span > ${product.price}</span>${
      product.oldPrice
        ? `
          <span  class= "product-oldPrice"  > ${product.oldPrice}</span>`
        : ""
    }
          </p>
        `;
    productListContainer.appendChild(productCard);
    productCard.querySelectorAll(".view-now").forEach((btn) => {
      btn.addEventListener("click", () => {
        showpopup(product);
      });
    });

    productCard.querySelectorAll(".buy-now").forEach((btn) => {
      btn.addEventListener("click", () => {
        buypopup(product);
      });
    });
  });
}
function buypopup(product) {
  const found = cartItems.find((item) => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  showPopup();
  const popup = document.createElement("div");
  popup.classList.add("product-popup");
  popup.innerHTML = `
  <div class="popup-fullner">
    <div class="popup-center">
    <h2 class="popup-sectent"> &#10004; Sản phẩm vừa được thêm vào giỏ hàng</h2>
    <span class="close-btnner">&times;</span>
    </div>
    <div class="popup-setuptofile">
    <div class="popup-middble">
     <img src="${product.images}" alt="Product Large">
     <div class="popup-filenight">
     <h2>${product.name}</h2>
     <p class="popup-double">  ${product.price}</p>
     </div>
    </div>
    </div>
    <div class="popup-finnoler">
     <p class="popup-hightlight"> &#10148; Giỏ Hàng Hiện Có Sản Phẩm Này </p>
     <div class="popup-sailamogif">
     <h2 class="popup-senninor"> Tiến Hành Thanh Toán &#10140;</h2>
     </div>
    </div>
    </div>
    `;
  document.body.appendChild(popup);
  popup.querySelectorAll(".close-btnner").forEach((button) => {
    button.addEventListener("click", () => {
      document.body.removeChild(popup);
    });
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      document.body.removeChild(popup);
    }
  });
  popupBox.classList.add("active");
  buttonBox.classList.add("hidden");
  renderCartItems();
}

function renderCartItems() {
  const cartList = popupBox.querySelector(".cart-list");
  if (cartItems.length === 0) {
    cartList.innerHTML = "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
    updateCartCount();
    return;
  }
  cartList.innerHTML = "";
  cartItems.forEach((item, idx) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.setAttribute("data-index", idx);
    cartItem.innerHTML = `
    <img src="${item.images}" alt="${item.name}" class="cart-item-img" />
    <div class="cart-item-info">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <div class="item-counter">
          <button class="decrease">-</button>
          <div class="value">${item.quantity}</div>
          <button class="increase">+</button>
      </div>
      <div class="item-message"></div>
    </div>
    <div class="cart-item-wash">
      <i class="fa fa-trash-o"></i>
    </div>
  `;
    cartList.appendChild(cartItem);
    const messageDisplay = cartItem.querySelector(".item-message");
    const increaseBtn = cartItem.querySelector(".increase");
    const decreaseBtn = cartItem.querySelector(".decrease");
    const trashBtn = cartItem.querySelector(".fa-trash-o");
    increaseBtn.addEventListener("click", () => {
      cartItems[idx].quantity++;
      renderCartItems();
    });

    decreaseBtn.addEventListener("click", () => {
      if (cartItems[idx].quantity > 1) {
        cartItems[idx].quantity--;
        renderCartItems();
      } else {
        messageDisplay.textContent = "Vui lòng chọn số lượng sản phẩm";
      }
    });
    trashBtn.addEventListener("click", () => {
      cartItems.splice(idx, 1);
      renderCartItems();
    });
  });
  function updateCartCount() {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountMain = document.getElementById("cart-count-main");
    const cartCountPopup = document.getElementById("cart-count-popup");
    const cartCountSonnit = document.getElementById("cart-count-sonnit");
    if (cartCountSonnit) cartCountSonnit.textContent = total > 0 ? total : "";
    if (cartCountMain) cartCountMain.textContent = total > 0 ? total : "";
    if (cartCountPopup) cartCountPopup.textContent = total > 0 ? total : "";
  }
  updateCartCount();
}

function showpopup(product) {
  const popup = document.createElement("div");
  popup.classList.add("product-popup");
  popup.innerHTML = `
   <div class="popup-content">
        <span class="close-btn">&times;</span>
        <div class="popup-image">
          <img src="${product.images}" alt="Product Large">
        </div>
        <div class="popup-info">
          <h2>${product.name}</h2>
          <div class="popup-counter">
            <button id="decrease">-</button>
            <div class="value" id="value">1</div>
            <button id="increase">+</button>
          </div>
          <div id="message" class="popup-message"></div>
          <div class="popup-setfor">
            <p class="popup-paceset">
          <span class="popup-price" > ${product.price}</span>${
    product.oldPrice
      ? `
          <span class="popup-oldPrice"  > ${product.oldPrice}</span>`
      : ""
  }
          </p>

            <button class="buy-now">MUA NGAY</button>
          </div>
          <p class="popup-desc">
            Son Ba Màu Maybelline Bitten 3.9g - Kết cấu ba màu độc đáo tạo hiệu ứng môi ombre 3D thời thượng, màu sắc loang nước sống động cho đôi môi căng mọng đẹp tự nhiên. Công thức Ultra creamy dưỡng ẩm môi suốt 12h liền.
          </p>
        </div>
      </div>
    `;
  document.body.appendChild(popup);
  popup.querySelectorAll(".close-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.body.removeChild(popup);
    });
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      document.body.removeChild(popup);
    }
  });

  popup.querySelectorAll(".buy-now").forEach((button) => {
    button.addEventListener("click", () => {
      buypopup(product);
    });
  });

  const increaseBtn = popup.querySelector("#increase");
  const decreaseBtn = popup.querySelector("#decrease");
  const valueDisplay = popup.querySelector("#value");
  const messageDisplay = popup.querySelector("#message");
  let currentValue = 0;
  increaseBtn.addEventListener("click", () => {
    currentValue++;
    valueDisplay.textContent = currentValue;
    messageDisplay.textContent = "";
  });
  decreaseBtn.addEventListener("click", () => {
    if (currentValue > 0) {
      currentValue--;
      valueDisplay.textContent = currentValue;
      messageDisplay.textContent = "";
    } else {
      messageDisplay.textContent = "Vui lòng chọn số lượng sản phẩm ";
    }
  });
}
displayProducts(productList);

const cartIconsel = document.getElementById("cartIconsel");
const filterBtnsel = document.getElementById("filterBtnsel");
const filterBtn = document.getElementById("filterBtn");
const popupBox = document.getElementById("popupBox");
const buttonBox = document.getElementById("buttonBox");
const closePopup = document.getElementById("closePopup");
const orderPopup = document.getElementById("orderPopup");

function showPopup() {
  popupBox.classList.add("active");
  buttonBox.classList.add("hidden");
}

function hidePopup() {
  popupBox.classList.remove("active");
  setTimeout(() => {
    buttonBox.classList.remove("hidden");
  }, 450);
}

cartIcon.addEventListener("click", showPopup);
cartIconsel.addEventListener("click", showPopup);
filterBtnsel.addEventListener("click", showPopup);
filterBtn.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
orderPopup.addEventListener("click", showPopup);

const proDuctList = [
  {
    id: 6,
    images: "./onemore/img/sanpham6.webp",
    name: "Làn Da Dịu Êm Sau Mỗi Lần Tắm",
    price: "1.210.000đ",
    oldPrice: "1.890.000đ",
    perCent: "-27%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 7,
    images: "./onemore/img/sanpham7.webp",
    name: "Dưỡng Da Trong Từng Bọt Nhẹ",
    price: "2.030.000đ",
    perCent: "",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 8,
    images: "./onemore/img/sanpham8.webp",
    name: "Làn Da Em Mịn Như Mơ",
    price: "5.730.000đ",
    oldPrice: "6.190.000đ",
    perCent: "-10%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 9,
    images: "./onemore/img/sanpham9.webp",
    name: "Kem Dưỡng Ẩm Dịu Nhẹ",
    price: "930.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 10,
    images: "./onemore/img/sanpham10.webp",
    name: "Hương Hoa Mơ Cho Làn Da",
    price: "2.230.000đ",
    oldPrice: "2.890.000đ",
    perCent: "-15%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 11,
    images: "./onemore/img/sanpham11.webp",
    name: "Kem Dưỡng Mỗi Đêm",
    price: "1.110.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 11,
    images: "./onemore/img/sanpham11.webp",
    name: "Kem Dưỡng Da ",
    price: "2.030.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 12,
    images: "./onemore/img/sanpham12.webp",
    name: "Hương Hoa Mơ Cho Làn Da Nhẹ Nhàng",
    price: "1.230.000đ",
    oldPrice: "1.590.000đ",
    perCent: "-20%",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 13,
    images: "./onemore/img/sanpham13.webp",
    name: "Vỗ Về Làn Da Sau Một Ngày Dài",
    price: "2.130.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 14,
    images: "./onemore/img/sanpham14.webp",
    name: "Làn Da Em Mịn Như Mơ",
    price: "1.230.000đ",
    oldPrice: "1.790.000đ",
    perCent: "-20%",

    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 15,
    images: "./onemore/img/sanpham15.webp",
    name: "Tắm Xong Chỉ Muốn Ôm Lấy Da Mình",
    price: "4.230.000đ",
    perCent: "",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 16,
    images: "./onemore/img/sanpham16.webp",
    name: "Mỗi Ngày Một Chút Dịu Dàng Cho Da  ",
    price: "5.230.000đ",
    oldPrice: "6.290.000đ",
    perCent: "-20%",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 17,
    images: "./onemore/img/sanpham5.webp",
    name: "Tái Tạo Da Với Tinh Túy Thiên Nhiên",
    price: "1.230.000đ",
    perCent: "",
    category: "dau-goi",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 18,
    images: "./onemore/img/sanpham11.webp",
    name: "Hương Hoa Mơ Cho Làn Da Nhẹ Nhàng",
    price: "2.430.000đ",
    oldPrice: "2.990.000đ",
    perCent: "-20%",
    category: "sua-rua-mat",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 19,
    images: "./onemore/img/sanpham8.webp",
    name: "Kem Dưỡng Ẩm Dịu Nhẹ Tự Nhiên",
    price: "2.230.000đ",
    oldPrice: "2.690.000đ",
    perCent: "-20%",
    category: "sua-tam",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
  {
    id: 20,
    images: "./onemore/img/sanpham12.webp",
    name: "Tinh Chất Dưỡng Mềm Như Tơ",
    price: "900.000đ",
    perCent: "",
    category: "kem-duong-da",
    description: "Dưỡng ẩm sâu, phù hợp mọi loại da.",
  },
];
const showMoreBtn = document.getElementById("showMoreBtn");
const hiddenProducts = document.getElementById("hiddenProducts");
const label = showMoreBtn.querySelector(".setup-content-siuver-xiuxiu");

let productRendered = false;

showMoreBtn.addEventListener("click", () => {
  const isActive = hiddenProducts.classList.toggle("active");

  if (isActive) {
    label.textContent = "Ẩn bớt";

    if (!productRendered) {
      proDuctList.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-item", "hidden-product-item");
        productCard.innerHTML = `
      <div class="product-image-container">
            <img src="${product.images}" alt="${
          product.name
        }" class="product-img" /> ${
          product.perCent
            ? `
      <span class="product-percentafge">${product.perCent}</span>`
            : ""
        }
            <div class="product-overlay">
              <button class="view-now">Xem Ngay</button>
              <button class="buy-now">Mua Ngay</button>
            </div>
          </div>
          <h4 class="product-name">${product.name}</h4>
          <p class="product-pacess">
          <span > ${product.price}</span>${
          product.oldPrice
            ? `
          <span  class= "product-oldPrice"  > ${product.oldPrice}</span>`
            : ""
        }
          </p>
        `;

        productListContainer.appendChild(productCard);
        productCard.querySelectorAll(".view-now").forEach((button) => {
          button.addEventListener("click", () => {
            showpopup(product);
          });
        });
        productCard.querySelectorAll(".buy-now").forEach((button) => {
          button.addEventListener("click", () => {
            buypopup(product);
          });
        });
      });
      productRendered = true;
    }
  } else {
    label.textContent = "Xem thêm ";
    document
      .querySelectorAll(".hidden-product-item")
      .forEach((item) => item.remove());
    allProducts = [...productList];
    productRendered = false;
  }
});
filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    filterButton.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    if (filter === "all") {
      displayProducts(allProducts);
    } else {
      const filtered = allProducts.filter((p) => p.category === filter);
      displayProducts(filtered);
    }
  });
});

const saiontime = document.querySelector(".saiontime");
saiontime.addEventListener("click", function (e) {
  e.preventDefault();
  const nameInput = document.querySelector(".seon-name");
  const emailInput = document.querySelector(".seoun-email");
  const messageInput = document.querySelector(".seon-message");

  const Name = nameInput.value.trim();
  const Email = emailInput.value.trim();
  const message = messageInput.value.trim();

  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const messageError = document.querySelector(".message-error");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (!Name) {
    nameError.textContent = " ! Vui lòng nhập tên của bạn ";
    return;
  }
  if (!Email) {
    emailError.textContent = " ! Vui lòng nhập Email của bạn ";
    return;
  }
  if (!message) {
    messageError.textContent = " ! hãy nhập nội dung bạn cần viết ";
    return;
  }
  alert("gửi thành công ");
});
