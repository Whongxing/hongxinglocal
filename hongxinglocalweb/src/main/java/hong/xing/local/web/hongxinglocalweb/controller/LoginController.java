package hong.xing.local.web.hongxinglocalweb.controller;

import hong.xing.local.System.LoginUserService;
import hong.xing.local.entity.ResponseLogin;
import hong.xing.local.entity.RoleArry;
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
    public RoleArry getMenuData(@RequestBody  Map<String,Object> params){
        RoleArry  roleArry = new RoleArry();
        List<String> path = new ArrayList<>();
        List<String> data = new ArrayList<>();
        List<ResponseLogin>  list =   loginUserService.loginUser(params);
        for(ResponseLogin login : list){
             path.add(login.getMenu_path());
             if(login.getMenu_data()!=null)  data.add(login.getMenu_data());
        }
        roleArry.setPath(path);
        roleArry.setData(data);
        return roleArry;

    }
}
