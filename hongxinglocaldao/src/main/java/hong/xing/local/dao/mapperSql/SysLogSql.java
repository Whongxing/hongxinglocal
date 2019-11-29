package hong.xing.local.dao.mapperSql;

import org.apache.ibatis.jdbc.SQL;

import java.util.Map;

public class SysLogSql {

    public String  selectLog(Map<String,Object> params){
        return new SQL() {
            {
                SELECT("log_id as 'key' ,log_name,log_desc,log_type,log_data,log_date");
                FROM("hx_log");
//                if (desc!=null&&desc!=" ") {
//                    WHERE("menu_desc like '"+desc+"-"+"%'");
//                }

            }
        }.toString();
    }

}
