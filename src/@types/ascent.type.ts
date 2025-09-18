import type {Route} from "./route.type.ts";
import type {Session} from "./session.type.ts";
import type {User} from "./user.type.ts";

export type Ascent = {
    id: number;
    user: User;
    route: Route;
    session: Session;
    date: string;
    style: string;
    tries: number;
    comment?: string;
}