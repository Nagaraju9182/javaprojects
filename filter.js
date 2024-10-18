const products = [
    { id: 1, title: 'Product 1', company: 'company1', price: 10.99, image: 'image7.jpg' },
    { id: 2, title: 'Product 2', company: 'company2', price: 19.99, image: 'image8.jpg' },
    { id: 3, title: 'Product 3', company: 'company3', price: 14.99, image: 'image9.jpg' }
  ];
  
  // Initial filtered products
  let filteredProducts = [...products];
  const productsContainer = document.querySelector('.products-container');
  
  // Function to display products
  function displayProducts() {
    if (filteredProducts.length < 1) {
      productsContainer.innerHTML = '<h3>No Products Found</h3>';
      return;
    }
    
    productsContainer.innerHTML = filteredProducts.map((product) => {
      return `
        <article class="product">
          <img src="${product.image}" class="product-img" alt="${product.title}">
          <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">$${product.price}</span>
          </footer>
        </article>
      `;
    }).join('');
  }
  
  // Display initial products
  displayProducts();
  
  // Text Filter
  const form = document.querySelector('.input-form');
  const searchInput = document.querySelector('.search-input');
  
  form.addEventListener('keyup', () => {
    const inputValue = searchInput.value.toLowerCase();
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
  });
  
  // Display Filter Buttons
  const companiesContainer = document.querySelector('.companies');
  
  function displayButtons() {
    const companies = ['all', ...new Set(products.map(product => product.company))];
    companiesContainer.innerHTML = companies.map((company) => {
      return <button class="company-btn" data-id="${company}">${company}</button>;
    }).join('');
  }
  
  displayButtons();
  
  // Filter Based on Company
  companiesContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('company-btn')) {
      const company = target.dataset.id;
      searchInput.value = '';
      
      if (company === 'all') {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter((product) => {
          return product.company === company;
        });
      }
      
      displayProducts();
    }
  });
