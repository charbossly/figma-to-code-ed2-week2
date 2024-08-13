interface Product {
  node: {
    id: string;
    title: string;
    description: string;
    availableForSale: boolean;
    featuredImage: {
      url: string;
    };
    tags: string[];
    variants: {
      edges: {
        node: {
          price: {
            amount: number;
          };
        };
      }[];
    };
  };
}
export default Product;
