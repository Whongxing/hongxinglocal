package hong.xing.local.web.hongxinglocalweb.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateFormatUtil {

    public  static  String  format(Date d){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(d);
    }

    public  static Date   formatToDate(String s) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try{
           return sdf.parse(s);
        }catch (ParseException e){
            e.getMessage();
        }
        return  null;
    }

}
