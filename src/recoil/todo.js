import { atom, selector } from 'recoil';

export const todoList = atom({
    key: 'todoList',
    default: [
        { id: 1, text: '집가기', isDone: false, isImportant: false },
        { id: 2, text: '영화 보기', isDone: false, isImportant: false },
        { id: 3, text: '아무것도 안하기', isDone: true, isImportant: true }
    ]
})

export const todoFilter = atom({
    key: 'todoFilter',
    default: {keyword: '', category: 'all', value: true}
})

export const filteredTodoList = selector({
    key: 'filteredTodoList',
    get: ({get}) => {
        let filter = get(todoFilter);
        let filteredTodos = [...get(todoList)];

        // 좌측 필터 선택 시
        if (filter.category !== 'all') {
            filteredTodos = filteredTodos.filter((todo) => {
                return todo[filter.category] === filter.value;
            })
        }

        // 검색 시
        if (filter.keyword) {
            filteredTodos = filteredTodos.filter((todo) => {
                return todo.text.includes(filter.keyword);
            })
        }

        return filteredTodos
    }
})