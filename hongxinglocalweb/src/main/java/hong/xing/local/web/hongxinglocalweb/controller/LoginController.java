package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.LoginUserService;
import hong.xing.local.entity.ResponseLogin;
import hong.xing.local.entity.SysMenu;
import hong.xing.local.web.hongxinglocalweb.LoginContext.LoginContextUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import javax.annotation.Resource;
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
    public ResponseLogin getMenuData(@RequestBody  Map<String,Object> params){
         ResponseLogin  login =  new ResponseLogin();
         int u = loginUserService.selectUser(params);
         if(u<=0){
             login.setMas("用户不可用");
             return login;
         }else{
             String name = params.get("username").toString();
             LoginContextUser.put(name);
             login.setName(name);
             List<SysMenu>  menu = loginUserService.loginUser(params);
                 login.setMenu(menu);
                 return login;
         }
    }
}
