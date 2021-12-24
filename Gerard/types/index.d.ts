import {Ref} from 'vue';

interface CustomTargetInputEvent extends InputEvent {
    target: HTMLInputElement | null;
}

export interface RawGrocery {
    name: string;
    price: number;
    amount: number;
}

export interface Grocery extends RawGrocery {
    get total(): string;
    update(event: CustomTargetInputEvent): void;
}

export type GroceryList = {
    [name: string]: Grocery;
};
