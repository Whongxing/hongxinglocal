package hong.xing.local.dao.mapperSql;

import org.apache.ibatis.jdbc.SQL;

import java.util.Map;

public class OcrSql {
     public  String   selectAllOcr(Map<String,Object> params){
          return  new SQL(){
              {
                  String a = params.get("tf_status").toString();
                  SELECT("name  as  file_name,number as words_result_num, logid as log_id ,result as words_result,cdate as c_date,  status as f_status, fuser as   f_user");
                  FROM("hx_orc");
                  if (a!=null&&a!="") {
                    WHERE("status = #{tf_status}");
                 }
              }
          }.toString();
     }
}
