package hong.xing.local.dao.mapper;

import hong.xing.local.entity.OCRresult;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface MonitorMapper {

    @Select("select  cdate  as c_date  from  hx_orc  where  cdate between #{start_date} and  #{end_date}")
    List<OCRresult>   selectAndDay(Map<String,Object> params);
}
