import  SysUser from "../component/system/SysUser";
import  SysRole from "../component/system/SysRole";
import  SysMenu from "../component/system/SysMenu";
import  Home from "../component/Home";
import  TablbOne from "../component/datatable/TableOne";
import  R403 from "../component/Res404/R403";
import  LogWater from "../component/Log/LogWater";
import  Test  from "../component/test/TestUtill";

let Routes= [
    {
        key:"Home",
        path:"/",
        component:Home,

    },
    {
        key:"Test",
        path:"/test",
        component:Test,

    },
    {
        key:"SysUser",
        path:"/system/User",
        component:SysUser
    },
    {
        key:"SysMenu",
        path:"/system/Menu",
        component:SysMenu
    },
    {
        key:"SysRole",
        path:"/system/Role",
        component:SysRole
    },
    {
        key:"TablbOne",
        path:"/datatable/TableOne",
        component:TablbOne,
    },
    {
        key:"LogWater",
        path:"/log/water",
        component:LogWater,
    },
    {
        key:"R403",
        path:"/Response/R403",
        component:R403,
    },
]
export  default  Routes;