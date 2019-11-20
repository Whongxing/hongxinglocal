package hong.xing.local.dao.mapper;

import hong.xing.local.entity.ResponseLogin;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface LoginUserMapper {
     @Select(
             "select  menu_path ,menu_data  from  hx_menu  WHERE  id  in " +
             "(select  menu_id from  hx_menu_role WHERE  role_id in" +
             "(select role_id  from  hx_user_role  WHERE  user_id  in" +
             "(select  id  from  hx_user  WHERE  `name` =#{username} and password = #{password})))")
     List<ResponseLogin>  UserResponse(Map<String,Object> params);

}
