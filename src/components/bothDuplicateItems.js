/**
 * Слияние одинаковых товаров
 */

export default function bothDuplicateItems(arr, productValue) {
    const duplIndex = arr.findIndex(
        (item) => item.id === productValue.id && item.size === productValue.size
    );
    if (duplIndex !== -1) {
        arr[duplIndex].count += 1;
        return arr;
    } else {
        return [...arr, productValue];
    }
}
