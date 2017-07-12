import { SortableItem } from './../shared/interfaces';
import { List } from './../list/list.model';

// Lesson 3: Implement the Card model
export class Card implements SortableItem {
    description: string;
    dueDate: date;
    list: string;

    // constructor(rawObj) {
    constructor({description,dueDate,list}) {
        this.description=description;
        this.dueDate=dueDate;
        this.list=list;
    }

    setList(id) {

    }
}
