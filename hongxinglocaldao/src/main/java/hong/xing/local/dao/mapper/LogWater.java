package hong.xing.local.dao.mapper;

import hong.xing.local.entity.LogData;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LogWater {

    @Insert("INSERT  INTO  hx_log(log_name,log_date,log_type,log_desc) VALUES (#{log_name}, now(),#{log_type},#{log_desc})")
    int  warteLog(LogData logdata);
}
