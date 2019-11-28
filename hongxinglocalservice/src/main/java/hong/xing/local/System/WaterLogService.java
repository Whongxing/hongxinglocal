package hong.xing.local.System;

import hong.xing.local.dao.mapper.LogWater;
import hong.xing.local.entity.LogData;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class WaterLogService {
    @Resource
    private LogWater  logWater;

    public  int  LogWater(LogData log){
       return  logWater.warteLog(log);
    }
}
