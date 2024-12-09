// TODO: ALL THE REQUESTS TO API WILL STAY HERE

// NOTE: API TO GET ALL PRODUCTS

export const getAllProducts = async function () {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

// NOTE: API TO GET LIMITED PRODUCTS

export const getLimitedProducts = async function (limit) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// NOTE: API TO GET CATEGORY OF THE PRODUCTS

export const getCategories = async function () {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// NOTE: API TO GET PRODUCTS BY CATEGORY
export const getProductsByCategory = async function (category) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// NOTE: API TO GET DETAILS OF THE PRODUCT
export const getProductById = async function (productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
