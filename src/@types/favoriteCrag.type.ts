import type {User} from "./user.type.ts";
import type {Crag} from "./crag.type.ts";

export type FavoriteCrag = {
    id: number;
    user: User;
    crag: Crag;
}