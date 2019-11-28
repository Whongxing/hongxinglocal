package hong.xing.local.web.hongxinglocalweb.annotation;

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
    //操作的名称
    String  desc()  default  "";

    //类型

}
