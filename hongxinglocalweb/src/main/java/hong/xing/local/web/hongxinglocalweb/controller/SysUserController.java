package hong.xing.local.web.hongxinglocalweb.controller;


import hong.xing.local.System.SysUserService;
import hong.xing.local.entity.ResponseWrapData;
import hong.xing.local.web.hongxinglocalweb.util.ResponseWarp;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/Sys")
@Slf4j
public class SysUserController {
    private Log logger = LogFactory.getLog(this.getClass());

    @Resource
    private SysUserService   sysUserService;

    @CrossOrigin
    @RequestMapping("/getTreeData")
    public void  getTreeData(){

    }


    @CrossOrigin
    @RequestMapping("/getAllUser")
    public ResponseWrapData getAllUser(){
        return ResponseWarp.warp(()->{
           return  sysUserService.getAllUser();
        },logger);
    }

}
