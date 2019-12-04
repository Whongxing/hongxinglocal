package hong.xing.local.entity;

import lombok.Data;

import java.util.Date;

/**
 * 王红星
 * 2019/11/27
 * 用户信息对象
 */
@Data
public class SysUser {

    /**
     * 用户id
     */
    private  Integer  key;

    private  String  user_name;

    private  String  user_nick;

    private  String  password;

    private  Integer  user_status;

    private  Date user_date;

    private  String  user_phone;
}
