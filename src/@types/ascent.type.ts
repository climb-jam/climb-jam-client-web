import type {Route} from "./route.type.ts";
import type {Session} from "./session.type.ts";
import type {User} from "./user.type.ts";
import type {PickerValue} from "@mui/x-date-pickers/internals";

export type Ascent = {
    id: number;
    user: User;
    route: Partial<Route>;
    session: Partial<Session>;
    date: PickerValue;
    style: string;
    tries: number;
    comment?: string;
}