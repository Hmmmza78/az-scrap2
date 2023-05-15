// routers
import UserRouter from './paths/user/routes/'
import AdminRouter from './paths/admin/routes/'

export default function ROUTER(app) {
    UserRouter(app);
    AdminRouter(app);
}
