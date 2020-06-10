package hong.xing.local.System;

import hong.xing.local.dao.mapper.OcrMapper;
import hong.xing.local.entity.OCRresult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class OcrService {
    @Resource
    private OcrMapper   ocrMapper;

    public   int   insertWaterService( Map<String,Object> params){
         return ocrMapper.insertWater(params);
    }


    public  List<OCRresult>    selectAllOcrService(Map<String,Object> params){
        return  ocrMapper.selectAll(params);
    }

    public  int    UpdateRemarkService(Map<String,Object> params){
            return ocrMapper.UpdateRemark(params);
    }
}
