// SAMPLE PRODUCT DATA - 70 products (more dresses added)
const products = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80"
  },
  {
    id: 10,
    name: "Laptop Stand",
    category: "Electronics",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: 11,
    name: "USB-C Hub",
    category: "Electronics",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1625841442270-8e0b029c6f1b?w=400&q=80"
  },
  {
    id: 12,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: 13,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80"
  },
  {
    id: 14,
    name: "Webcam HD",
    category: "Electronics",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80"
  },
  {
    id: 15,
    name: "Portable Charger",
    category: "Electronics",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80"
  },
  {
    id: 16,
    name: "Gaming Headset",
    category: "Electronics",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80"
  },

  // Clothing - Original
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
  },
  {
    id: 8,
    name: "Denim Jacket",
    category: "Clothing",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80"
  },
  {
    id: 19,
    name: "Hoodie",
    category: "Clothing",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80"
  },
  {
    id: 20,
    name: "Jeans",
    category: "Clothing",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&q=80"
  },
  {
    id: 21,
    name: "Sneakers",
    category: "Clothing",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80"
  },
  {
    id: 22,
    name: "Cap",
    category: "Clothing",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80"
  },
  {
    id: 23,
    name: "Backpack",
    category: "Clothing",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
  },
  {
    id: 24,
    name: "Sunglasses",
    category: "Clothing",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80"
  },
  {
    id: 25,
    name: "Scarf",
    category: "Clothing",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80"
  },
  {
    id: 26,
    name: "Gloves",
    category: "Clothing",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80"
  },

  // Home
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80"
  },
  {
    id: 7,
    name: "Desk Lamp",
    category: "Home",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1534073828943-f801091a7d58?w=400&q=80"
  },
  {
    id: 29,
    name: "Blender",
    category: "Home",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=400&q=80"
  },
  {
    id: 30,
    name: "Toaster",
    category: "Home",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf3?w=400&q=80"
  },
  {
    id: 31,
    name: "Kettle",
    category: "Home",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3036c64c?w=400&q=80"
  },
  {
    id: 32,
    name: "Cookware Set",
    category: "Home",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1584269600519-112d071b35e6?w=400&q=80"
  },
  {
    id: 33,
    name: "Dinner Set",
    category: "Home",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80"
  },
  {
    id: 34,
    name: "Wall Clock",
    category: "Home",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80"
  },
  {
    id: 35,
    name: "Cushion Cover Set",
    category: "Home",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&q=80"
  },
  {
    id: 36,
    name: "Bed Sheet Set",
    category: "Home",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?w=400&q=80"
  },

  // Sports
  {
    id: 4,
    name: "Running Shoes",
    category: "Sports",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&q=80"
  },
  {
    id: 39,
    name: "Dumbbells Set",
    category: "Sports",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80"
  },
  {
    id: 40,
    name: "Resistance Bands",
    category: "Sports",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80"
  },
  {
    id: 41,
    name: "Jump Rope",
    category: "Sports",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&q=80"
  },
  {
    id: 42,
    name: "Sports Bottle",
    category: "Sports",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1602143407151-11115cd4e69b?w=400&q=80"
  },
  {
    id: 43,
    name: "Gym Bag",
    category: "Sports",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
  },
  {
    id: 44,
    name: "Fitness Tracker",
    category: "Sports",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80"
  },
  {
    id: 45,
    name: "Tennis Racket",
    category: "Sports",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&q=80"
  },
  {
    id: 46,
    name: "Basketball",
    category: "Sports",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80"
  },

  // Clothing - Dresses (NEW)
  {
    id: 51,
    name: "Floral Summer Dress",
    category: "Clothing",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
  },
  {
    id: 52,
    name: "Black Evening Gown",
    category: "Clothing",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  },
  {
    id: 53,
    name: "Casual Maxi Dress",
    category: "Clothing",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8280e970c3e?w=400&q=80"
  },
  {
    id: 54,
    name: "Party Cocktail Dress",
    category: "Clothing",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80"
  },
  {
    id: 55,
    name: "Bohemian Midi Dress",
    category: "Clothing",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80"
  },
  {
    id: 56,
    name: "Wrap Dress",
    category: "Clothing",
    price: 46.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  },
  {
    id: 57,
    name: "A-Line Dress",
    category: "Clothing",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
  },
  {
    id: 58,
    name: "Shirt Dress",
    category: "Clothing",
    price: 41.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80"
  },
  {
    id: 59,
    name: "Bodycon Dress",
    category: "Clothing",
    price: 37.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80"
  },
  {
    id: 60,
    name: "Off-Shoulder Dress",
    category: "Clothing",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8280e970c3e?w=400&q=80"
  },
  {
    id: 61,
    name: "Polka Dot Dress",
    category: "Clothing",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
  },
  {
    id: 62,
    name: "Lace Dress",
    category: "Clothing",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  },
  {
    id: 63,
    name: "Satin Slip Dress",
    category: "Clothing",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80"
  },
  {
    id: 64,
    name: "Knit Sweater Dress",
    category: "Clothing",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80"
  },
  {
    id: 65,
    name: "Printed Sundress",
    category: "Clothing",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8280e970c3e?w=400&q=80"
  },
  {
    id: 66,
    name: "Tiered Ruffle Dress",
    category: "Clothing",
    price: 47.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
  },
  {
    id: 67,
    name: "Halter Neck Dress",
    category: "Clothing",
    price: 43.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
  },
  {
    id: 68,
    name: "Empire Waist Dress",
    category: "Clothing",
    price: 51.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80"
  },
  {
    id: 69,
    name: "Pleated Chiffon Dress",
    category: "Clothing",
    price: 58.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8280e970c3e?w=400&q=80"
  },
  {
    id: 70,
    name: "Velvet Cocktail Dress",
    category: "Clothing",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80"
  }
];

const catalogEl = document.getElementById("catalog");
const searchEl = document.getElementById("search");
const categoryFilterEl = document.getElementById("category-filter");
const cartCountEl = document.getElementById("cart-count");

let cartCount = 0;

function renderProducts(list) {
  catalogEl.innerHTML = "";

  if (list.length === 0) {
    catalogEl.innerHTML = `
      <div class="no-results">
        No products found. Try adjusting your search or filters.
      </div>
    `;
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-image"
      />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;

    catalogEl.appendChild(card);
  });

  // Attach event listeners to "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
    });
  });
}

function filterProducts() {
  const search = searchEl.value.trim().toLowerCase();
  const category = categoryFilterEl.value;

  const filtered = products.filter(p => {
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search);

    const matchesCategory = !category || p.category === category;

    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

// Initial render
renderProducts(products);

// Event listeners
searchEl.addEventListener("input", filterProducts);
categoryFilterEl.addEventListener("change", filterProducts);