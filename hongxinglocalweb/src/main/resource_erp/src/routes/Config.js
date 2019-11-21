import  SysUser from "../component/system/SysUser";
import  SysRole from "../component/system/SysRole";
import  SysMenu from "../component/system/SysMenu";
import  Home from "../component/Home";
import TablbOne from "../component/datatable/TableOne";
import R403 from "../component/Res404/R403";

let Routes= [
    {
        path:"/",
        component:Home,

    },
    {
        path:"/system/User",
        component:SysUser
    },
    {
        path:"/system/Menu",
        component:SysMenu
    },
    {
        path:"/system/Role",
        component:SysRole
    },
    {
        path:"/datatable/TableOne",
        component:TablbOne,
    },
    {
        path:"/Response/R403",
        component:R403,
    },
]
export  default  Routes;