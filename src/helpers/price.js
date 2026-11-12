const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  // Whole amounts read "$120" rather than "$120.00".
  trailingZeroDisplay: 'stripIfInteger',
})

export const formatPrice = (value = 0) => formatter.format(value)

// `discount` is a percentage taken off `price`, e.g. 20 for 20% off.
export const discountedPrice = (price = 0, discount = 0) => price - (price * discount) / 100
