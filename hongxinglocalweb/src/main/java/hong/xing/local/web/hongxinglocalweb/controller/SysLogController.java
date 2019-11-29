package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.WaterLogService;
import hong.xing.local.entity.LogData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Api")
@Slf4j
public class SysLogController {

      @Resource
      private WaterLogService waterLogService;

      @CrossOrigin
      @RequestMapping("/allLog")
      public List<LogData>  selectLog(@RequestBody Map<String,Object> params){
         return  waterLogService.seletLog(params);
      }
}
