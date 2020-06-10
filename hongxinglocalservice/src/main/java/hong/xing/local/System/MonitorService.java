package hong.xing.local.System;

import hong.xing.local.dao.mapper.MonitorMapper;
import hong.xing.local.entity.OCRresult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class MonitorService {
    @Resource
    private MonitorMapper  monitorMapper;

    public List<OCRresult> selectAndDay(Map<String,Object> params){
        return monitorMapper.selectAndDay(params);
    }
}
