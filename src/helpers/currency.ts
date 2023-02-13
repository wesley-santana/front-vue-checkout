export default function currency(paymentValue: string) {
    return parseFloat(paymentValue).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
    });
}