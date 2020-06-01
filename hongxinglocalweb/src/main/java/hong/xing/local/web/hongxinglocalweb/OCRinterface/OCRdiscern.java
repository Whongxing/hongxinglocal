package hong.xing.local.web.hongxinglocalweb.OCRinterface;

import com.alibaba.fastjson.JSONObject;
import hong.xing.local.web.hongxinglocalweb.util.Base64Util;
import hong.xing.local.web.hongxinglocalweb.util.FileUtil;
import hong.xing.local.web.hongxinglocalweb.util.HttpUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Ocrapi")
public class OCRdiscern {

    @CrossOrigin
    @RequestMapping("/OcrResult")
    public   String   OCRcore(@RequestBody Map<String,Object> params){
        // 请求url
        String url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic";
        try {
//            // 本地文件路径
            String filePath = "D:/OCRTest/"+params.get("filename");
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");
            System.out.println(imgParam);
            String param = "image=" + imgParam;
            // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
            String accessToken = "24.e9bdfa2339c85dd2abda07c8c08ad1b0.2592000.1593563087.282335-20163785";
            String result = HttpUtil.post(url, accessToken, param);
            System.out.println(result);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
