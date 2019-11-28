package hong.xing.local.entity;

import lombok.Data;

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
    private  Integer  id;

    private  String  name;

    private  String  password;
}
