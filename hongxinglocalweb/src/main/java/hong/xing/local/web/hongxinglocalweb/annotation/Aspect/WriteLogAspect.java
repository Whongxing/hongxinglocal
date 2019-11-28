package hong.xing.local.web.hongxinglocalweb.annotation.Aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Aspect
@Component
@Slf4j
public class WriteLogAspect {



    @Pointcut("execution(* hong.xing.local.web.hongxinglocalweb.controller.*.*(..))")
    public void logPointCut() {}

    @Before("logPointCut()")
    public void doBefor(JoinPoint joinPoint){
       log.info("用户登录操作");
    }


}
