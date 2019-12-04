package hong.xing.local.web.hongxinglocalweb.util;

import hong.xing.local.entity.ResponseWrapData;
import org.apache.juli.logging.Log;

public class ResponseWarp {

    public  static ResponseWrapData warp(ResponseWarpReturn returnData,Log logger) {
        ResponseWrapData result = null;
        try {
            Object data = returnData.get();
            result = ResponseWrapData.successed().setDataAndThen(data);
        } catch (Exception e) {
            result = ResponseWrapData.faild();
            result.setMessage(e.getMessage());
            logger.error("请求异常");
        }
        return  result;
    }
}
