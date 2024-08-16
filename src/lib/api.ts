// lib/api.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mock.shop/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//fetching products
export const fetchProducts = async () => {
  try {
    const response = await apiClient.post("", {
      query: `
        query 
          {
            products(first: 10) {
                edges {
                node {
                    id
                    title
                    description
                    availableForSale
                    featuredImage {
                        url
                    }
                    tags
                    variants(first: 1) {
                        edges {
                            node {
                                price {
                                    amount
                                }
                            }
                        }
                    }
                }
            }
        }
        }
      `,
    });
    if (response.data && response.data.data && response.data.data.products) {
      return response.data.data.products.edges;
    } else {
      console.error("Invalid response structure:", response.data);
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};

//fetching product by id
export const fetchProductById = async (id: string) => {
  try {
    const response = await apiClient.post("", {
      query: `
            query($id: ID!) {
              product(id: $id) {
                    id  
                    title
                    description
                    featuredImage {
                    id
                    url
                    }
                    variants(first: 4) {
                    edges {
                        cursor
                        node {
                        id
                        title
                        image {
                            url
                        }
                        price {
                            amount
                            currencyCode
                        }
                        }
                    }
                    }
                }
            }`,
      variables: { id },
    });
    if (response.data && response.data.data && response.data.data.product) {
      return response.data.data.product;
    } else {
      console.error("Invalid response structure:", response.data);
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};

//fetching tags (categories)

export const fetchTags = async () => {
  try {
    const response = await apiClient.post("", {
      query: `
        query {
          productTags(first: 10) {
            edges {
              node
            }
          }
        }
      `,
    });

    if (response.data && response.data.data && response.data.data.productTags) {
      return response.data.data.productTags.edges;
    } else {
      console.error("Invalid response structure:", response.data);
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};

//fetching products by categories
export const fetchProductsByCategories = async (tag: string) => {
  try {
    const response = await apiClient.post("", {
      query: `
        query($tag: String) {
          products(first:200, query:$tag) {
            edges {
                node {
                    id
                    title
                    description
                    availableForSale
                    featuredImage {
                        url
                    }
                    tags
                    variants(first: 4) {
                        edges {
                            node {
                                price {
                                    amount
                                }
                            }
                        }
                    }
                }
            }
          }
        }
      `,
      variables: { tag },
    });
    console.log(response.data.data.products.edges);
    if (response.data && response.data.data && response.data.data.products) {
      return response.data.data.products.edges;
    } else {
      console.error("Invalid response structure:", response.data);
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};

//get count of categories
export const fetchTagsCount = async (tag: string[]) => {
  const counts = [];
  try {
    for (let i = 0; i < tag.length; i++) {
      const response = await apiClient.post("", {
        query: `
        query($tag: String) {
          products(first:200, query:$tag) {
            edges {
              node {
                title
                tags
              }
            }
          }
        }
      `,
        variables: { tag: tag[i] },
      });
      if (
        response.data &&
        response.data.data &&
        response.data.data.products &&
        response.data.data.products.edges
      ) {
        counts.push(response.data.data.products.edges.length);
      } else {
        counts.push(0);
      }
    }
    if (counts) {
      return counts;
    } else {
      console.error("Invalid response structure:");
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};

export const fetchCollections = async () => {
  try {
    const response = await apiClient.post("", {
      query: `
        query {
            collections(first: 2) {
              edges {
                cursor
                node {
                  id
                  title
                  description
                  image {
                    url
                  }
                }
              }
            }
          }

      `,
    });
    if (response.data && response.data.data && response.data.data.collections) {
      return response.data.data.collections.edges;
    } else {
      console.error("Invalid response structure:", response.data);
      return [];
    }
  } catch (error: any) {
    console.error("Network or API error:", error.message || error);
    return [];
  }
};
