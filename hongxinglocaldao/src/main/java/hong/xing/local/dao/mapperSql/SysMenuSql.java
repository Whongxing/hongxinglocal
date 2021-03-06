package hong.xing.local.dao.mapperSql;
import org.apache.ibatis.jdbc.SQL;

import java.util.Map;

public class SysMenuSql {
    public String  selectMeun(Map<String,Object> params){
        return new SQL() {
            {
                String desc =(String) params.get("desc");
                SELECT("menu_name  as  name,menu_img as img, menu_path as path ,menu_desc as 'desc',id as 'key',menu_status as 'status'");
                FROM("hx_menu");
                if (desc!=null&&desc!="") {
                        WHERE("menu_desc like '"+desc+"-"+"%'");
                }

            }
        }.toString();
    }


    public String  updateMenu(Map<String,Object> params){
        return new SQL() {
            {
                String desc =(String) params.get("desc");
                UPDATE("hx_menu");
                SET("menu_status=#{status}");
                if (desc.length()==3&&desc!="0-0") {
                    WHERE("menu_desc like '"+desc+"%'");
                }else{
                    WHERE("menu_desc = #{desc}");
                }

            }
        }.toString();
    }
}
