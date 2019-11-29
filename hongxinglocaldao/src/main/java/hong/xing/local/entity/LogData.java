package hong.xing.local.entity;

import lombok.Data;

import java.util.Date;

/**
 * wanghongxing  Create by   2019/11/28
 */
@Data
public class LogData {

    /**
     * 主键
     */
    private  String  key;
    /**
     * 操作人
     */
    private  String  log_name;

    /**
     * 操作描述
     */
    private  String  log_desc;
    /**
     * 操作类型
     */
    private  String  log_type;
    /**
     * 操作时间
     */
    private Date  log_date;

    /**
     * 操作数据
     */
    private String  log_data;
}
