package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.OcrService;
import hong.xing.local.entity.ResponseWrapData;
import hong.xing.local.web.hongxinglocalweb.annotation.Aspect.LogType;
import hong.xing.local.web.hongxinglocalweb.annotation.WriteLog;
import hong.xing.local.web.hongxinglocalweb.util.ResponseWarp;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Map;

@RequestMapping("/Ocrapi")
@RestController
@Slf4j
public class OCRController {
    private Log logger = LogFactory.getLog(this.getClass());
    @Resource
    private OcrService  ocrService;

    @CrossOrigin
    @RequestMapping("/insertWater")
    @WriteLog(desc = "调用了测试接口",logType = LogType.INSERT)
    public ResponseWrapData insertWater(@RequestBody Map<String,Object> params){
        return ResponseWarp.warp(()->{
            return  ocrService.insertWaterService(params);
        },logger);
    }

    @CrossOrigin
    @RequestMapping("/selectWater")
    public   ResponseWrapData  selectWater(@RequestBody Map<String,Object> params){
         return  ResponseWarp.warp(()->{
             return  ocrService.selectAllOcrService(params);
         },logger);
    }

    @CrossOrigin
    @RequestMapping("/UpdateRemark")
    @WriteLog(desc = "标记了某个图片信息",logType = LogType.INSERT)
    public ResponseWrapData UpdateRemark(@RequestBody Map<String,Object> params){
        return ResponseWarp.warp(()->{
            return  ocrService.UpdateRemarkService(params);
        },logger);
    }
}
