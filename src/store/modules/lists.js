import localStorage from "@/utils/local-storage";
const lists = {
  namespaced: true,
  // TODO: получить из АПИ 
  state: {
    lists: [
      {
        text: "Типы контрагентов",
        value: "counterTypes",
        items: [
          { id: 1, text: "Подрядчик по работам ССМ" },
          { id: 2, text: "Поставщик оборудования ССМ" },
          { id: 3, text: "Поставщик прочего оборудования" },
          { id: 4, text: "Оператор связи" },
          { id: 5, text: "Заказчик" },
          { id: 6, text: "Поставщик услуг" },
        ],
      },
      {
        text: "Тип оборудования",
        value: "deviceTypes",
        items: [
          { id: 1, text: "Трекер" },
          { id: 2, text: "Трекер переносной" },
          { id: 3, text: "Дут 700" },
          { id: 4, text: "Кан Лог" },
          { id: 5, text: "ДУТ 1000" },
          { id: 6, text: "Считыватель карт" },
        ],
      },
      {
        text: "Тип сим-карт",
        value: "simTypes",
        items: [
          { id: 1, text: "Разговорная" },
          { id: 2, text: "Основная" },
          { id: 4, text: "Резервная" },
        ],
      },
      {
        text: "Тип выполненных работ",
        value: "workTypes",
        items: [
          { id: 1, text: "Установлено" },
          { id: 2, text: "Демонтировано" },
          { id: 3, text: "Услуга" },
        ],
      },
      {
        text: "Типы счетов",
        value: "accountTypes",
        items: [
          { id: 1, text: "Услуга" },
          { id: 2, text: "Поставка" },
        ],
      },
    ],
  },
  mutations: {
    deleteItem(state, payload) {
      const { selectedList, id } = payload;
      const editList = state.lists[selectedList];
      editList.items = state.lists[selectedList].items.filter(item => +item.id !== +id);
      state.lists[selectedList] = { ...editList };
    },
    updateLists(state, { selectedList, text }) {
      state.lists[selectedList].items.push({ text });
    },
  },
  getters: {
    getLists: state => {
      return state.lists;
    },
    getListsItem: state => item => {
      return state.lists.find(list => list.value === item)?.items;
    },
  },
  actions: {},
};

export default lists;
