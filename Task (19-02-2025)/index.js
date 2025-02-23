///! style and cssText
// const header = document.querySelector("h1"); // object
// header.style.backgroundColor = "red";
// header.style.color = "white";
// header.style.padding = "2em";
// header.style.cssText = `background-color:red ; color:white ; padding:2em`;
// console.log(header.style.backgroundColor = "red");
///! classList
// header.classList.add("active")
// header.classList.remove("active")
// header.classList.replace("active" , "demo")
// console.log(header.classList.contains("active")); // true or false
// header.classList.toggle("demo") // add or remove

///! dataset
// header.dataset.productId="100"
// console.log(header.dataset.productId);
///! attributes
// 1- id and class
// console.log(header.id);
// console.log(header.className); //getter
// console.log(header.className = "active demo test"); //setter
// 2- attributes
// console.log(header.attributes); // object
// console.log(header.attributes.id); // key form object
// console.log(header.attributes.id.value); // value from key
// 3- setAttributes and getAttributes
// console.log(header.getAttribute("data-product-id")); /// image src
// header.setAttribute("data-test","test100")
///! events
// 1- click
// const toggleBtn = document.querySelector(".toggleBtn");
// toggleBtn.onclick = () => {
//     header.classList.toggle("active");
// };

// 2- change
// const textInput =document.getElementById("textInput");
// const textInput = document.querySelector("#textInput");
// textInput.onchange = () => {
//     console.log("change..");

// };
// 3- input
// textInput.oninput = () => {
//     console.log("change..", textInput.value);
// };
// 4- focus
// textInput.onfocus = () => {
//     textInput.style.border = `2px solid red`;
//     textInput.style.outline = `0`;
//     console.log("change..", textInput.value);
// };
// 5- blur
// textInput.onblur = () => {
//     textInput.style.border = `2px solid black`;
//     textInput.style.outline = `0`;
// };
// 6- mouse mover
// window.onmousemove = (e) => {
//     document.querySelector(".custom_mouse").style.left = `${e.clientX -20}px`;
//     document.querySelector(".custom_mouse").style.top = `${e.clientY -20}px`;
//     // console.log("move" , e.target);
//     // console.log("move" , e.clientX , e.clientY);
// }
// 7- mouse enter
// header.onmouseenter = (e) => {
//     document.body.style.background = "red";
// }
// 8- mouse leave
// header.onmouseleave = (e) => {
//     document.body.style.background = "white";
// }
///! Practical Tasks
// 1- navbar menu
// const navbarMenu = Array.from(document.querySelectorAll(".navbar a")); // []
const navbarMenu = document.querySelectorAll(".navbar a"); // nodeList
navbarMenu.forEach((link) => {
    link.onclick = () => {
        //remove active class
        removeActiveClass();
        link.classList.add("active");
    };
});
function removeActiveClass() {
    navbarMenu.forEach((link) => {
        link.classList.remove("active");
    });
}
// 2- navbar toggle active calss
const toggleMenu = document.querySelector(".toggleMenu");
const mobile_Menu = document.querySelector(".mobile_Menu");
const mobile_Menu_list = document.querySelector(".mobile_Menu ul");
const closeMenu = document.querySelector(".closeMenu");
toggleMenu.onclick = () => {
    mobile_Menu.classList.add("active");
    mobile_Menu_list.classList.add("active");
};
closeMenu.onclick = () => {
    mobile_Menu.classList.remove("active");
    mobile_Menu_list.classList.remove("active");
};
// 3- display product and change color text theme
// https://preview.themeforest.net/item/grabit-multipurpose-ecommerce-react-nextjs-template/full_screen_preview/55940002?_ga=2.23464442.1740541596.1739912889-568678468.1724007581

const products = [
    {
        id: Math.random(),
        slug: "mixed-nuts-berries-pack",
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
        category: "Dried Fruits",
        title: "Mixed Nuts Berries Pack",
        rate: 4,
        newPrice: 45,
        oldPrice: null,
        isSale: true,
        isNew: false,
    },
    {
        id: Math.random(),
        slug: "multi-grain-combo-cookies",
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
        category: "Cookies",
        title: "Multi Grain Combo Cookies",
        rate: 2,
        newPrice: 25,
        oldPrice: 30,
        isSale: false,
        isNew: false,
    },
    {
        id: Math.random(),
        slug: "fresh-mango-juice-pack",
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
        category: "Foods",
        title: "Fresh Mango juice pack",
        rate: 3,
        newPrice: 46,
        oldPrice: 65,
        isSale: false,
        isNew: true,
    },
    {
        id: Math.random(),
        slug: "dates-value-fresh-pouch",
        image: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
        category: "Dried Fruits",
        title: "Dates Value Fresh Pouch",
        rate: 5,
        newPrice: 78,
        oldPrice: 85,
        isSale: false,
        isNew: false,
    },
];
const palettes = [
    {
        code: "#fb8500",
    },
    {
        code: "#219ebc",
    },
    {
        code: "#606c38",
    },
];
const mode_color = [
    {
        title: "dark",
        code: "#171717",
    },
    {
        title: "light",
        code: "#f8f8f8",
    },
];
products.map((product) => {
    let temp = ``;
    temp += `
    <div class="swiper-slide">
    <div class="product_card" data-slug="${product.slug}">
                        <div class="product_card_image product_ele">
                            <img src="${product.image}" alt="">
                        </div>
                        <div class="product_card_info">
                            <span>${product.category}</span>
                            <h3 class="product_ele">${product.title}</h3>
                            <div class="product_card_info_rate">
                                ${new Array(5)
                                    .fill(0)
                                    .map(
                                        (_, index) => `<svg stroke="currentColor" fill="${product.rate >= index ? "#FFC107" : "#D3D3D3"}" stroke-width="0" viewBox="0 0 576 512" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                    </path>
                                </svg>`,
                                    )
                                    .join("")}
                            </div>
                            <div class="product_card_info_price">
                            ${
                                product.oldPrice
                                    ? `<strong>$${product.newPrice}</strong>
                            <del>$${product.oldPrice}</del>`
                                    : `<strong>$${product.newPrice}</strong>`
                            }
                            
                            </div>
                        </div>
                    </div></div>
     `;
    document.querySelector(".product_cards_container").innerHTML += temp;
});

const product_card = document.querySelectorAll(".product_ele");
const popup_close = document.querySelector(".popup_close");
const popup_products = document.querySelector(".popup_products");
function closePopup() {
    document.querySelector(".popup_products").classList.add("deactive");
}
function openPopup() {
    document.querySelector(".popup_products").classList.remove("deactive");
}
function renderPopup(data) {
    let temp = ``;
    temp += `<div class="popup_products_container_data_info">
                        <div class="popup_products_container_data_info_image">
                            <img src="${data.image}" alt="${data.title}">
                        </div>
                        <div class="popup_products_container_data_info_data">
                            <h2>${data.title}</h2>
                            <p>${data.description}</p>
                        </div>
                    </div>`;
    document.querySelector(".popup_products_container_data").innerHTML = temp;
}
popup_close.onclick = () => {
    closePopup();
};
// window.addEventListener("", () => { }, {

// })
window.onclick = (e) => {
    if (e.target.classList.contains("popup_products")) {
        closePopup();
    }
};
product_card.forEach((ele) => {
    ele.onclick = () => {
        let productSlug = ele.closest(".product_card").dataset.slug;
        const filterProductBySlug = products.find((item) => item.slug == productSlug);
        openPopup();
        renderPopup(filterProductBySlug);

        // console.log(ele.dataset.slug);
        // console.log(ele.closest(".product_card").dataset.slug); //100%
    };
});

palettes.map((color) => {
    let temp = ``;
    temp += `<div class="palettes_color" data-theme="${color.code}"></div>`;
    document.querySelector(".palettes").innerHTML += temp;
});
const palettes_color = document.querySelectorAll(".palettes_color");
const dataColorSet = document.querySelectorAll("[data-color]");
console.log(dataColorSet);

palettes_color.forEach((ele) => {
    ele.style.background = ele.dataset.theme;
    ele.onclick = () => {
        changeModeTextColor(ele.dataset.theme);
    };
});

function changeModeTextColor(color) {
    dataColorSet.forEach((item) => {
        item.style.color = color;
    });
}
const settings_container_icon = document.querySelector(".settings_container_icon");
settings_container_icon.onclick = () => {
    document.querySelector(".settings").classList.toggle("active");
    document.querySelector(".settings_container").classList.toggle("active");
    settings_container_icon.classList.toggle("active");
};

// mode switcher
mode_color.map((color) => {
    let temp = ``;
    temp += `<div class="mode_card">
                            <div class="mode_card_color" data-theme="${color.code}" data-${color.title}>

                            </div>
                            <span>Dark</span>
                        </div>`;
    document.querySelector(".mode_container").innerHTML += temp;
});

const mode_card_color = document.querySelectorAll(".mode_card_color");
mode_card_color.forEach((ele, index) => {
    ele.style.background = ele.dataset.theme;
    ele.onclick = () => {
        document.body.style.backgroundColor = ele.dataset.theme;
        for (const element in ele.dataset) {
            if (element == "dark") {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        }
        // if (document.body.classList.contains("dark")) {
        //     document.body.classList.remove("dark");
        // } else {
        //     document.body.classList.add("dark");
        // }
    };
    document.querySelectorAll(".mode_card span")[index].textContent = mode_color[index].title;
    // document.querySelectorAll(".mode_card span").forEach((item ,index) => {
    //     item.textContent = mode_color[index].title;
    // });
});
