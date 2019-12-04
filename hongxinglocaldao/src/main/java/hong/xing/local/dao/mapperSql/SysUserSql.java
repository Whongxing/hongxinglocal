package hong.xing.local.dao.mapperSql;

import org.apache.ibatis.jdbc.SQL;

public class SysUserSql {

    public  String  getAllUser(){
        return new SQL(){
            {
                SELECT("id as 'key',name as user_name,nick as 'user_nick',date as user_date,status as 'user_status',phone as 'user_phone'");
                FROM("hx_user");
            }
        }.toString();
    }
}
