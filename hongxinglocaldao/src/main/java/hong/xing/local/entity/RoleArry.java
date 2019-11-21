package hong.xing.local.entity;

import lombok.Data;

import java.util.List;

@Data
public class RoleArry {
    private  String  name;

    private List<String>  path;

    private List<String>  data;

    private  String  msg;
}
