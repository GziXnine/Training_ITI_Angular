/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const productInventoryContainer = document.getElementById(
    "productInventoryContainer"
  );
  const addProductModal = new bootstrap.Modal(
    document.getElementById("addProductModal")
  );
  const productForm = document.getElementById("productForm");
  const saveProductBtn = document.getElementById("saveProductBtn");
  const productIdField = document.getElementById("productId");
  const productNameField = document.getElementById("productName");
  const productPriceField = document.getElementById("productPrice");
  const productQuantityField = document.getElementById("productQuantity");
  const productCategoryField = document.getElementById("productCategory");
  const productImageUrlField = document.getElementById("productImageUrl");

  let products = [
    {
      id: "prod1",
      name: "Laptop",
      price: 999.0,
      quantity: 15,
      category: "Electronics",
      imageUrl: "https://placehold.co/300x200/ffcccb/e6e6fa?text=Laptop",
    },
    {
      id: "prod2",
      name: "Headphones",
      price: 49.0,
      quantity: 0,
      category: "Accessories",
      imageUrl: "https://placehold.co/300x200/004/c3daff?text=Headphones",
    },
    {
      id: "prod3",
      name: "Keyboard",
      price: 29.0,
      quantity: 30,
      category: "Peripherals",
      imageUrl: "https://placehold.co/300x200/f0f0f0/888888?text=Keyboard",
    },
    {
      id: "prod4",
      name: "Wireless Mouse",
      price: 19.0,
      quantity: 2,
      category: "Peripherals",
      imageUrl:
        "https://placehold.co/300x200/f5e5cc/e6c79b?text=Wireless+Mouse",
    },
  ];

  function renderProducts() {
    productInventoryContainer.innerHTML = "";
    products.forEach((product) => {
      const stockStatusClass =
        product.quantity > 0 ? "badge-in-stock" : "badge-out-of-stock";
      const stockStatusText =
        product.quantity > 0 ? "In Stock" : "Out of Stock";

      const productCard = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${
                          product.imageUrl
                        }" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text card-text-price">$${product.price.toFixed(
                              2
                            )}</p>
                            <span class="badge ${stockStatusClass}">${stockStatusText}</span>
                            <div class="mt-3 d-flex justify-content-between">
                                <button type="button" class="btn btn-sm btn-outline-primary" data-id="${
                                  product.id
                                }" data-action="edit">Edit</button>
                                <button type="button" class="btn btn-sm btn-outline-danger" data-id="${
                                  product.id
                                }" data-action="delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      productInventoryContainer.insertAdjacentHTML("beforeend", productCard);
    });

    attachProductCardEventListeners();
  }

  function attachProductCardEventListeners() {
    document.querySelectorAll('[data-action="edit"]').forEach((button) => {
      button.removeEventListener("click", handleEditProduct);
      button.addEventListener("click", handleEditProduct);
    });
    document.querySelectorAll('[data-action="delete"]').forEach((button) => {
      button.removeEventListener("click", handleDeleteProduct);
      button.addEventListener("click", handleDeleteProduct);
    });
  }

  function handleEditProduct(event) {
    const productId = event.target.dataset.id;
    const productToEdit = products.find((p) => p.id === productId);

    if (productToEdit) {
      productIdField.value = productToEdit.id;
      productNameField.value = productToEdit.name;
      productPriceField.value = productToEdit.price;
      productQuantityField.value = productToEdit.quantity;
      productCategoryField.value = productToEdit.category;
      productImageUrlField.value = productToEdit.imageUrl;
      addProductModal.show();
    }
  }

  function handleDeleteProduct(event) {
    const productId = event.target.dataset.id;
    if (confirm("Are you sure you want to delete this product?")) {
      products = products.filter((p) => p.id !== productId);
      renderProducts();
      checkLowStockAlert();
    }
  }

  saveProductBtn.addEventListener("click", () => {
    if (!productForm.checkValidity()) {
      productForm.classList.add("was-validated");
      return;
    }

    const id = productIdField.value;
    const name = productNameField.value;
    const price = parseFloat(productPriceField.value);
    const quantity = parseInt(productQuantityField.value);
    const category = productCategoryField.value;
    const imageUrl = productImageUrlField.value;

    if (id) {
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products[index] = { id, name, price, quantity, category, imageUrl };
      }
    } else {
      const newId = "prod" + (products.length + 1);
      products.push({ id: newId, name, price, quantity, category, imageUrl });
    }

    productForm.reset();
    productForm.classList.remove("was-validated");
    addProductModal.hide();
    renderProducts();
    checkLowStockAlert();
  });

  document
    .getElementById("addProductModal")
    .addEventListener("hidden.bs.modal", () => {
      productForm.reset();
      productForm.classList.remove("was-validated");
      productIdField.value = "";
    });

  document
    .querySelector('[data-bs-target="#addProductModal"]')
    .addEventListener("click", () => {
      productForm.reset();
      productForm.classList.remove("was-validated");
      productIdField.value = "";
    });

  const lowStockAlert = document.getElementById("lowStockAlert");
  function checkLowStockAlert() {
    const lowStockProduct = products.find(
      (p) => p.quantity > 0 && p.quantity <= 2
    );
    if (lowStockProduct) {
      lowStockAlert.querySelector(
        "i"
      ).nextSibling.textContent = ` Low stock alert: Product "${lowStockProduct.name}" has only ${lowStockProduct.quantity} left!`;
      lowStockAlert.classList.remove("d-none");
    } else {
      lowStockAlert.classList.add("d-none");
    }
  }

  renderProducts();
  checkLowStockAlert();
});
