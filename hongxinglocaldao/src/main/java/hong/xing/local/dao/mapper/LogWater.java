package hong.xing.local.dao.mapper;

import hong.xing.local.dao.mapperSql.SysLogSql;
import hong.xing.local.entity.LogData;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.List;
import java.util.Map;

@Mapper
public interface LogWater {

    @Insert("INSERT  INTO  hx_log" +
            "(log_name,log_date,log_type,log_desc,log_data) VALUES " +
            "(#{log_name}, now(),#{log_type},#{log_desc},#{log_data})")
    int  warteLog(LogData logdata);

    @SelectProvider(type= SysLogSql.class , method ="selectLog")
    List<LogData>  allLog(Map<String,Object> params);
}
