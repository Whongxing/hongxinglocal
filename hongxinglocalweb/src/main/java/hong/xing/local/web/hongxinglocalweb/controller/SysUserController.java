package hong.xing.local.web.hongxinglocalweb.controller;


import hong.xing.local.System.SysRoleService;
import hong.xing.local.System.SysUserService;
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
@RequestMapping("/Sys")
@Slf4j
public class SysUserController {
    private Log logger = LogFactory.getLog(this.getClass());

    @Resource
    private SysUserService   sysUserService;

    @Resource
    private SysRoleService   sysRoleService;

    @CrossOrigin
    @RequestMapping("/getAllTree")
    public ResponseWrapData  getTreeData(){
       return  ResponseWarp.warp(()->{
           return  sysRoleService.getAllTreeName();
       },logger) ;
    }

    @CrossOrigin
    @RequestMapping("/getMyTree")
    public ResponseWrapData  getMyTreeData(@RequestBody Map<String,Object> params){
        return  ResponseWarp.warp(()->{
            return  sysRoleService.getMyTreeName(params);
        },logger) ;
    }

    @CrossOrigin
    @RequestMapping("/setMyTree")
    public ResponseWrapData  setMyTreeData(@RequestBody Map<String,Object> params){
        return  ResponseWarp.warp(()->{
             sysRoleService.setMyTreeName(params);
             return  1;
        },logger) ;
    }


    @CrossOrigin
    @RequestMapping("/getAllUser")
    public ResponseWrapData getAllUser(){
        return ResponseWarp.warp(()->{
           return  sysUserService.getAllUser();
        },logger);
    }

}
