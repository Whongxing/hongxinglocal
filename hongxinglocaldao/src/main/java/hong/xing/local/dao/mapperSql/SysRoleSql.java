package hong.xing.local.dao.mapperSql;

import org.apache.ibatis.jdbc.SQL;

import java.util.Map;

public class SysRoleSql {
    public  String  selectRole(Map<String,Object> params){
        return new SQL(){
            {
                SELECT("id as 'key',role_name, role_remark, role_cdate");
                FROM("hx_role");
            }
        }.toString();
    }
}
