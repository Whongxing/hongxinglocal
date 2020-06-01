package hong.xing.local.entity;

import lombok.Data;

import java.util.Date;

@Data
public class SysRole {
    private  Integer key;

    private  String  role_name;

    private  String  role_remark;

    private  Date   role_cdate;
}
