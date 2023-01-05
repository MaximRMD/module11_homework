// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercent(number, percent) {
    if (!Number.isInteger(percent) || percent < 2 || percent > 100) return "данные неверны";
    return Number(number) - ((Number(percent) / 100) * Number(number));
}
// console.log(getPercent(500, 50));