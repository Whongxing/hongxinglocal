let MenuDataSource=[
    {
        name:"首页",
        img:"home",
        url:"/",
    },
    {
        key:"sub2",     //控制只展开当前焦点菜单
        name:"权限管理",
        img:"safety",
        url:"/system",
        child:[
            {
                img:"idcard",
                childName:"用户管理",
                url:"/system/User",
            },
            {
                img:"usergroup-add",
                childName:"角色管理",
                url:"/system/Role",
            },
            {
                img:"solution",
                childName:"菜单管理",
                url:"/system/Menu",
            }
        ]
    },
    {
        key:"sub3",
        name:"报表查询",
        img:"table",
        url:"/datatable",
        child:[
            {
                img:"file-search",
                childName:"记录",
                url:"/datatable/TableOne",
            }
        ]
    }
]


// let MenuDataSource=[
//     {
//         name:"首页",
//         img:"home",
//         url:"/",
//         exact:true
//     },
//     {
//         key: "sub2",  //控制只展开当前焦点菜单
//         name: "权限管理",
//         img: "safety",
//     },
//             {
//                 img:"idcard",
//                 name:"用户管理",
//                 url:"#/system/User",
//             },
//             {
//                 img:"usergroup-add",
//                 name:"角色管理",
//                 url:"/system/Role",
//             },
//             {
//                 img:"solution",
//                 name:"菜单管理",
//                 url:"#/system/Menu",
//             },
//
//     {
//         key:"sub3",
//         name:"报表查询",
//         img:"table",
//     },
//             {
//                 img:"file-search",
//                 name:"记录",
//                 url:"#/datatable/TableOne",
//             }
//
//
// ]
export default MenuDataSource;