package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.MonitorService;
import hong.xing.local.entity.Monitor;
import hong.xing.local.entity.OCRresult;
import hong.xing.local.entity.ResponseWrapData;
import hong.xing.local.web.hongxinglocalweb.util.DateFormatUtil;
import hong.xing.local.web.hongxinglocalweb.util.ResponseWarp;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.*;

@RestController
@RequestMapping("/Monitor")
@Slf4j
public class MonitorController {
    private Log logger = LogFactory.getLog(this.getClass());
    @Resource
    private MonitorService  monitorService;

    @RequestMapping("/selectDay")
    @CrossOrigin
    public ResponseWrapData selectAndDay(@RequestBody Map<String,Object> params){
        List  t = monitorService.selectAndDay(params);
        int length = t.size();
        OCRresult  ocRresult = new OCRresult();
        List<Integer> listX   = new ArrayList<>();
        List<String> listY   = new ArrayList<>();
        Date s_date = DateFormatUtil.formatToDate(params.get("start_date").toString());
        Date e_date = DateFormatUtil.formatToDate(params.get("end_date").toString());
        int a = (int)(e_date.getTime()-s_date.getTime())/(1000 * 60 * 60 * 24);
        Date  temp = null;
        Calendar  c = Calendar.getInstance();
        c.setTime(s_date);
        for(int i = 0;i <= a;i++ ){
            int x = 0;
            temp = c.getTime();
            listY.add(DateFormatUtil.format(temp));
            for(int j = 0;j < length;j++){
                ocRresult = (OCRresult)t.get(j);
                if(DateFormatUtil.format(temp).equals(DateFormatUtil.format(ocRresult.getC_date()))){
                    x++;
                }
            }
            listX.add(x);
            c.add(Calendar.DATE,1);
        }
        Monitor   m = new Monitor();
        m.setX(listX);
        m.setY(listY);
        return ResponseWarp.warp(()->{
           return  m;
        },logger);

    }

}
