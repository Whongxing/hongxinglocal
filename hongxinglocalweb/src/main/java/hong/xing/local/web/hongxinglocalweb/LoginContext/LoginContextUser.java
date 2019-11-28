package hong.xing.local.web.hongxinglocalweb.LoginContext;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class LoginContextUser {
     private  static Map<String,String>  userContext = new ConcurrentHashMap<>();
     private  static final String  SESSION_NAME = "MY_LOGIN_USER";

     public static void put(String userId){
          userContext.put(SESSION_NAME,userId);
     }

     public  static String get(){
          return  userContext.get(SESSION_NAME);
     }


     public  static void remove(){
          userContext.remove(SESSION_NAME);
     }
}
