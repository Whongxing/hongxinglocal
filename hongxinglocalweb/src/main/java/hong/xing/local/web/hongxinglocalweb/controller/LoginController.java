package hong.xing.local.web.hongxinglocalweb.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Map;


@RestController
@RequestMapping("/Log")
@Slf4j
public class LoginController {

    @CrossOrigin
    @RequestMapping("/loginUser")
    public void getMenuData(@RequestBody  Map<String,Object> params){
        log.info("login  name:  password{ } "+params+"");
    }

}
