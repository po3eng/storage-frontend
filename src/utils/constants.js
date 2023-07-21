// const API_ROOT = "http://localhost:8080/v1";
const API_ROOT = "https://storageapi.stak63.com/v1";
const REGIONS = [
  { code: 1, name: "Республика Адыгея (Адыгея)" },
  { code: 2, name: "Республика Башкортостан" },
  { code: 3, name: "Республика Бурятия" },
  { code: 4, name: "Республика Алтай" },
  { code: 5, name: "Республика Дагестан" },
  { code: 6, name: "Республика Ингушетия" },
  { code: 7, name: "Кабардино-Балкарская Республика" },
  { code: 8, name: "Республика Калмыкия" },
  { code: 9, name: "Карачаево-Черкесская Республика" },
  { code: 10, name: "Республика Карелия" },
  { code: 11, name: "Республика Коми" },
  { code: 12, name: "Республика Марий Эл" },
  { code: 13, name: "Республика Мордовия" },
  { code: 14, name: "Республика Саха (Якутия)" },
  { code: 15, name: "Республика Северная Осетия — Алания" },
  { code: 16, name: "Республика Татарстан (Татарстан)" },
  { code: 17, name: "Республика Тыва" },
  { code: 18, name: "Удмуртская Республика" },
  { code: 19, name: "Республика Хакасия" },
  { code: 20, name: "Чеченская Республика" },
  { code: 21, name: "Чувашская Республика — Чувашия" },
  { code: 22, name: "Алтайский край" },
  { code: 23, name: "Краснодарский край" },
  { code: 24, name: "Красноярский край" },
  { code: 26, name: "Ставропольский край" },
  { code: 27, name: "Хабаровский край" },
  { code: 28, name: "Амурская область" },
  { code: 29, name: "Архангельская область" },
  { code: 30, name: "Астраханская область" },
  { code: 31, name: "Белгородская область" },
  { code: 32, name: "Брянская область" },
  { code: 33, name: "Владимирская область" },
  { code: 34, name: "Волгоградская область" },
  { code: 35, name: "Вологодская область" },
  { code: 36, name: "Воронежская область" },
  { code: 37, name: "Ивановская область" },
  { code: 38, name: "Иркутская область" },
  { code: 39, name: "Калининградская область" },
  { code: 40, name: "Калужская область" },
  { code: 41, name: "Камчатский край" },
  { code: 42, name: "Кемеровская область — Кузбасс" },
  { code: 43, name: "Кировская область" },
  { code: 44, name: "Костромская область" },
  { code: 45, name: "Курганская область" },
  { code: 46, name: "Курская область" },
  { code: 47, name: "Ленинградская область" },
  { code: 48, name: "Липецкая область" },
  { code: 49, name: "Магаданская область" },
  { code: 50, name: "Московская область" },
  { code: 51, name: "Мурманская область" },
  { code: 52, name: "Нижегородская область" },
  { code: 53, name: "Новгородская область" },
  { code: 54, name: "Новосибирская область" },
  { code: 55, name: "Омская область" },
  { code: 56, name: "Оренбургская область" },
  { code: 57, name: "Орловская область" },
  { code: 58, name: "Пензенская область" },
  { code: 59, name: "Пермский край" },
  { code: 60, name: "Псковская область" },
  { code: 61, name: "Ростовская область" },
  { code: 62, name: "Рязанская область" },
  { code: 63, name: "Самарская область" },
  { code: 64, name: "Саратовская область" },
  { code: 65, name: "Сахалинская область" },
  { code: 66, name: "Свердловская область" },
  { code: 67, name: "Смоленская область" },
  { code: 68, name: "Тамбовская область" },
  { code: 69, name: "Тверская область" },
  { code: 70, name: "Томская область" },
  { code: 71, name: "Тульская область" },
  { code: 72, name: "Тюменская область" },
  { code: 73, name: "Ульяновская область" },
  { code: 74, name: "Челябинская область" },
  { code: 75, name: "Забайкальский край" },
  { code: 76, name: "Ярославская область" },
  { code: 77, name: "город федерального значения Москва" },
  { code: 78, name: "город федерального значения Санкт-Петербург" },
  { code: 79, name: "Еврейская автономная область" },
  { code: 83, name: "Ненецкий автономный округ" },
  { code: 86, name: "Ханты-Мансийский автономный округ — Югра" },
  { code: 87, name: "Чукотский автономный округ" },
  { code: 89, name: "Ямало-Ненецкий автономный округ" },
  { code: 90, name: "Запорожская область" },
  { code: 91, name: "Республика Крым" },
  { code: 92, name: "город федерального значения Севастополь" },
  { code: 93, name: "Донецкая Народная Республика" },
  { code: 94, name: "Луганская Народная Республика" },
  { code: 95, name: "Херсонская область" },
  { code: 99, name: "Иные территории,включая город и космодром Байконур" },
];

export { API_ROOT, REGIONS };

// TODO: сделать и env dev и prod
// prod - git ignore
