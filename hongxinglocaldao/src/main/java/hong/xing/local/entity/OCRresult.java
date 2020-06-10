package hong.xing.local.entity;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;


@Data
public class OCRresult implements Serializable {

    private   String    file_name;

    private   String    log_id;

    private   int       words_result_num;

    private   String    words_result;

    private   Date      c_date;

    private   String    f_user;

    private   int       f_status;

}
