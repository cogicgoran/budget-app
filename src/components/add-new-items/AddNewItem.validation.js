export function validateProductName(name) {
  return name.length > 0;
};

export function validateProductPrice(price) {
  return Number(price) > 0 && price.length < 9;
};

export function validateProductDate(date) {
  return date.length !== 0;
}