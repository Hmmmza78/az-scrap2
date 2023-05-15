import { Application } from "express"
import user from "./user"
import category from "./category"
import scrap from "./scrap"

export default function Router(app, route = "/admin") {
    app.use(route + "/user", user)
    app.use(route + "/category", category)
    app.use(route + "/scrap", scrap)
}
