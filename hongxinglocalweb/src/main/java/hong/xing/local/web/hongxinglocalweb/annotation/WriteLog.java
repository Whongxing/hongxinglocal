package hong.xing.local.web.hongxinglocalweb.annotation;

import hong.xing.local.web.hongxinglocalweb.annotation.Aspect.LogType;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
*  日志注解类
*  * hongxing  on  2019/11/27
*/
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface WriteLog {

    /**
     * 操作人
     * @return
     */
    String  name()  default  "";

    /**
     * 日志操作描述
     * @return
     */
    String  desc()  default  "";

    /**
     * 日志操作类型  insert  update  delete
     * @return
     */
    LogType  logType();


}
