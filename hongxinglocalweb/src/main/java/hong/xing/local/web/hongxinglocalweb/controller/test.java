package hong.xing.local.web.hongxinglocalweb.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class test {

    @RequestMapping("hello")
    public String aaa(){
        return "hello";
    }
}
