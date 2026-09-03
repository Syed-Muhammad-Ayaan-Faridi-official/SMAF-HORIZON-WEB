const OFFER_END_DATE = new Date('2026-09-10T23:59:59')
const DISCOUNT_RATE = 0.15

export const isDiscountActive = () => {
    return new Date() <= OFFER_END_DATE
}

export const getDiscountedFee = (fee) => {
    return isDiscountActive() ? Math.round(fee * (1 - DISCOUNT_RATE)) : fee
}