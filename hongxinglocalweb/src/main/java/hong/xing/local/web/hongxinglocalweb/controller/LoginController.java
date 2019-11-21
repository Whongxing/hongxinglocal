package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.LoginUserService;
import hong.xing.local.entity.ResponseLogin;
import hong.xing.local.entity.RoleArry;
import hong.xing.local.entity.SysMenu;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/Log")
@Slf4j
public class LoginController {
    @Resource
    private LoginUserService  loginUserService;

    @CrossOrigin
    @RequestMapping("/loginUser")
    public List<SysMenu> getMenuData(@RequestBody  Map<String,Object> params){
        return loginUserService.loginUser(params);
    }
}
