import type {Crag} from "./crag.type.ts";
import type {User} from "./user.type.ts";

export type Session = {
    id: number;
    user: User;
    crag: Crag;
    date: string;
}