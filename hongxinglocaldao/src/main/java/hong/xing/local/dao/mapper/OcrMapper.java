package hong.xing.local.dao.mapper;


import hong.xing.local.dao.mapperSql.OcrSql;
import hong.xing.local.entity.OCRresult;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

@Mapper
public interface OcrMapper {

    @Insert("insert  into   hx_orc (name,number,logid,result,cdate,status,fuser)  values(#{Fname},#{Fnumber},#{Flogid},#{Fcontent},now(),0,#{Fuser})")
    int  insertWater( Map<String,Object> params);

    @SelectProvider(type= OcrSql.class, method ="selectAllOcr")
    List<OCRresult>   selectAll(Map<String,Object> params);

    @Update("update  hx_orc   set  status = #{f_status}  where  logid = #{log_id}")
    int  UpdateRemark(Map<String,Object> params);
}
