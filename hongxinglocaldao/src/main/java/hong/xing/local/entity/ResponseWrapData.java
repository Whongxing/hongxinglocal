package hong.xing.local.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @param <T> 王红星 by  2019/12/14
 */
@Data
public class ResponseWrapData<T>  implements Serializable {
    public  static  final  Integer  CODE_SESSED = 200;
    public  static  final  Integer  CODE_ERROR = 500;

    /**
     *  返回的结果码 200/500
     */
    private   Integer  status;

    /**
     * 返回信息
     */
    private  String  message;

    /**
     * 返回的结果数据
     */
    private T  data;

    private  boolean  success;

    public ResponseWrapData(boolean success , Integer status, String  message) {
        this.success = success;
        this.status = status;
        this.message = message;
    }

    public static ResponseWrapData successed(){
        return new ResponseWrapData(true,CODE_SESSED,"success");
    }

    public  static ResponseWrapData faild(){
        return new ResponseWrapData(false,CODE_ERROR,"success");
    }

    public ResponseWrapData  setDataAndThen(T data){
        setData(data);
        return this;
    }
}
