package hong.xing.local.entity;

import lombok.Data;

import java.util.List;

@Data
public class ResponseLogin {
    //返回路径
    private String  menu_path;
    //返回的组件名称
    private String  menu_data;
}
