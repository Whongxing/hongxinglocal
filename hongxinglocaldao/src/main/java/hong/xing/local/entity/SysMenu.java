package hong.xing.local.entity;
import lombok.Data;

import java.io.Serializable;

@Data
public class SysMenu implements Serializable {

    //序号
    private Integer key;
    //名字
    private String  name;
    //图片
    private String img;
    //路径
    private String path;
    //描述
    private String desc;
    //状态
    private int status;
}
