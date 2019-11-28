package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.SysMenuService;

import java.util.Map;

import hong.xing.local.entity.SysMenu;
import hong.xing.local.web.hongxinglocalweb.annotation.Aspect.LogType;
import hong.xing.local.web.hongxinglocalweb.annotation.WriteLog;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;


@RestController
@RequestMapping("/Sys")
@Slf4j
public class SysMenuController {

    @Resource
    private SysMenuService sysMenuservice;


    @CrossOrigin
    @RequestMapping("/getMenuData")
    public List<SysMenu> getMenuData(@RequestBody  Map<String,Object> params){
            return sysMenuservice.getMenuData(params);
    }


    @CrossOrigin
    @RequestMapping("/updateMenuData")
    @WriteLog(desc = "更新数据",logType = LogType.UPDATE)
    public int updateMenuData(@RequestBody  Map<String,Object> params){
        try {
            int n = sysMenuservice.updateMenuData(params);
            return n;  
        }catch (Exception e){
            return -1;
        }
    }
}
