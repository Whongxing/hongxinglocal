package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.SysRoleService;
import hong.xing.local.entity.ResponseWrapData;
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

@RestController
@RequestMapping("/SysRole")
@Slf4j
public class SysRoleController {

    private Log logger = LogFactory.getLog(this.getClass());

    @Resource
    private SysRoleService  sysRoleService;


    @CrossOrigin
    @RequestMapping("/selectRole")
    public ResponseWrapData  getAllRole(@RequestBody Map<String,Object> params){
        return ResponseWarp.warp(()->{
                 return sysRoleService.selectRole(params);
            },logger);
    }

}
