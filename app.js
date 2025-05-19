const menu = [
  {
    id: 1,
    title: "فطور شرقي تقليدي",
    category: "فطور",
    price: 35.99,
    img: "./images/item-1.jpeg",
    desc: `وجبة شرقية غنية بالمكونات التقليدية الشهية، لتبدأ يومك بنشاط.`,
  },
  {
    id: 2,
    title: "برجر لحم مميز",
    category: "غداء",
    price: 45.5,
    img: "./images/item-2.jpeg",
    desc: `برجر لحم طازج مع صوص خاص وخبز طري، مثالي للغداء.`,
  },
  {
    id: 3,
    title: "عصير فاخر مع آيس كريم ودونات",
    category: "مشروبات",
    price: 25.0,
    img: "./images/item-3.jpeg",
    desc: `عصير طبيعي بارد يقدم مع آيس كريم ودونات لذيذة.`,
  },
  {
    id: 4,
    title: "بيض مقلي مع خبز طازج",
    category: "فطور",
    price: 30.0,
    img: "./images/item-4.jpeg",
    desc: `بيض مقلي طازج يقدم مع شرائح الخبز الطازج والزبدة.`,
  },
  {
    id: 5,
    title: "برجر حار بالنكهات الشرقية",
    category: "غداء",
    price: 48.75,
    img: "./images/item-5.jpeg",
    desc: `برجر لذيذ مع صلصة حارة ولمسة من التوابل الشرقية.`,
  },
  {
    id: 6,
    title: "مشروب الشوكولاتة الغني",
    category: "مشروبات",
    price: 22.5,
    img: "./images/item-6.jpeg",
    desc: `مشروب شوكولاتة ساخن أو بارد، غني بطعم الشوكولاتة الكريمي.`,
  },
  {
    id: 7,
    title: "برجر بالجبنة واللحم الطازج",
    category: "غداء",
    price: 52.0,
    img: "./images/item-7.jpeg",
    desc: `برجر مميز مع شرائح الجبنة الذائبة وقطع اللحم الطازجة.`,
  },
  {
    id: 8,
    title: "برجر كلاسيكي صغير الحجم",
    category: "غداء",
    price: 40.0,
    img: "./images/item-8.jpeg",
    desc: `برجر كلاسيكي مع سلطة وخبز طازج، حجم مناسب وسعر اقتصادي.`,
  },
  {
    id: 9,
    title: "عصير أبيض منعش",
    category: "مشروبات",
    price: 18.75,
    img: "./images/item-9.jpeg",
    desc: `عصير طبيعي أبيض منعش وصحي، مثالي لأي وقت.`,
  },
  {
    id: 10,
    title: "شرائح الستيك المشوية",
    category: "عشاء",
    price: 65.0,
    img: "./images/item-10.jpeg",
    desc: `شرائح لحم الستيك المشوية بتتبيلة خاصة وتقديم أنيق.`,
  },
];

// العناصر الأساسية
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// عرض عناصر القائمة
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item"   direction: rtl;>
          <img src=${item.img} alt="${item.title}" class="photo" />
          <div class="item-info"   direction: rtl;>
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">₪${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  sectionCenter.innerHTML = displayMenu.join("");
}

// عرض أزرار التصنيف
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["الكل"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id="${category}">
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === category;
      });

      if (category === "الكل") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
