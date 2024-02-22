export const phoneRegex = new RegExp(
  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
);
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmailOrPhone = (value: string): boolean => {
  return emailRegex.test(value) || phoneRegex.test(value);
};
