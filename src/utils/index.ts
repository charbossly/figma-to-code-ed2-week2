const reduceText = (text: string) => {
  return text.split(" ").slice(0, 10).join(" ") + "..." || "";
};

export { reduceText };
