package hong.xing.local.web.hongxinglocalweb;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication(scanBasePackages = "hong.xing.local")
@Slf4j
@MapperScan("hong.xing.local.dao.mapper")
public class HongxinglocalwebApplication {

    public static void main(String[] args) {
        SpringApplication.run(HongxinglocalwebApplication.class, args);
    }

}
