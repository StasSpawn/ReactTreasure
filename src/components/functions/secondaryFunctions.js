export const totalPriceItems = order => order.price * order.count;

export const toLocalStringRub = e => {
  return e.toLocaleString('ru-RU', {
    style: 'currency', currency: 'RUB'
})}