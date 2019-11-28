package hong.xing.local.entity;

import lombok.Data;

import java.util.List;


/**
 *  wanghongxing
 * 2019/11/27
 */
@Data
public class ResponseLogin {

    private String  name;

    private String  mas;

    private List<SysMenu> menu;

}
