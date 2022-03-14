export type TodoType = {
  timestamp: Date;
  id: number;
  title: string;
};

const localStorage = {
  getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  },

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  },

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  },

  getTodo(): TodoType[] | null {
    const todoString = this.getItem('todo-list');

    if (todoString) {
      const sortedOption = localStorage.getItem('sorted') || '';
      const parsedTodos = JSON.parse(todoString);
      switch (sortedOption) {
        case 'sort-by-added-date':
          return parsedTodos.sort((a: TodoType, b: TodoType) => {
            if (a.timestamp < b.timestamp) {
              return -1;
            }
            if (a.timestamp > b.timestamp) {
              return 1;
            }
            return 0;
          });
        case 'sort-by-value':
          return parsedTodos.sort((a: TodoType, b: TodoType) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }

            return 0;
          });
        default:
          return parsedTodos;
      }
    }

    return null;
  },

  deleteById(id: number): TodoType[] | null {
    const todoString = this.getItem('todo-list');

    if (todoString) {
      const filteredById = JSON.parse(todoString).filter(
        (todo: TodoType) => todo.id !== id
      );
      this.setItem('todo-list', JSON.stringify(filteredById));
      return filteredById;
    }

    return null;
  },

  addNewTodo(todoList: TodoType): void {
    const getTodo = this.getTodo();
    getTodo?.push(todoList);
    this.setItem('todo-list', JSON.stringify(getTodo));
  },
};

export { localStorage };
