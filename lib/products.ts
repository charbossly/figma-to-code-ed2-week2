const colors = [
  {
    color: "green",
    code: "#00FF00",
  },
  {
    color: "olive",
    code: "#808000",
  },
  {
    color: "ocean",
    code: "#00FFFF",
  },
];
export const getColorsAndSizes = (product: any) => {
  const sizes = [
    {
      type: "small",
      code: "XS",
    },
    {
      type: "medium",
      code: "M",
    },
    {
      type: "large",
      code: "L",
    },
  ];

  if (product?.variants?.edges) {
    product.variants.edges.forEach((variant: any) => {
      let [sizeVariant, colorVariant] = variant.node.title
        .split("/")
        .map((item: string) => item.trim());

      if (colorVariant) {
        colorVariant = colors.find((color) => {
          console.log(color.color.toLowerCase(), colorVariant.toLowerCase());
          return color.color.toLowerCase() === colorVariant.toLowerCase();
        })?.code;
        variant.node.color = colorVariant;
      }
      if (sizeVariant) {
        sizeVariant = sizes.find(
          (size) => size.type.toLowerCase() === sizeVariant.toLowerCase()
        )?.code;
        variant.node.size = sizeVariant;
      }
    });
  }
  return product;
};

export const colorName = (color: string) => {
  console.log(
    colors.find((colorE) => {
      return colorE.code === color;
    })?.color
  );
  return colors.find((colorE) => {
    return colorE.code === color;
  })?.color;
};
