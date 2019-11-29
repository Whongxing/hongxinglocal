package hong.xing.local.web.hongxinglocalweb.annotation.Aspect;

import com.alibaba.fastjson.JSON;
import hong.xing.local.System.WaterLogService;
import hong.xing.local.entity.LogData;
import hong.xing.local.web.hongxinglocalweb.LoginContext.LoginContextUser;
import hong.xing.local.web.hongxinglocalweb.annotation.WriteLog;
import javafx.scene.input.DataFormat;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.boot.jackson.JsonObjectSerializer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.security.auth.login.LoginContext;
import java.lang.reflect.Method;
import java.util.Date;

@Aspect
@Component
@Slf4j
public class WriteLogAspect {

    @Resource
    private WaterLogService  waterLogService;

    @Pointcut("execution(* hong.xing.local.web.hongxinglocalweb.controller.*.*(..))")
//    @Pointcut("@annotation(hong.xing.local.web.hongxinglocalweb.annotation.WriteLog)")
    public void logPointCut() {}

    @Before("logPointCut()")
    public void doBefor(JoinPoint joinPoint){
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        //注解类的属性
        WriteLog  writeLog = method.getAnnotation(WriteLog.class);
        if(writeLog!=null){
            Object[]  obj = joinPoint.getArgs();
            LogData logWater = new LogData();
            logWater.setLog_name(LoginContextUser.get());
            logWater.setLog_desc(writeLog.desc());
            logWater.setLog_type(writeLog.logType().toString());
            logWater.setLog_data(JSON.toJSONString(obj));
            waterLogService.LogWater(logWater);
        }
    }


}
