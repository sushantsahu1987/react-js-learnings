import { decorate, observable, action, computed } from 'mobx';

class TodoStore {

    tododatalist = [];

    add = (text) => {
        console.log(`text ${text}`);
        this.tododatalist.push(text);
    }

    get count() {
        return this.tododatalist.length;
    }

}

decorate(TodoStore, {
    tododatalist: observable,
    add: action,
    count: computed
})

const todoStore = new TodoStore();

export default todoStore;