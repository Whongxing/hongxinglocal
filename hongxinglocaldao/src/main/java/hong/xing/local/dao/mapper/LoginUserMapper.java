package hong.xing.local.dao.mapper;

import hong.xing.local.entity.ResponseLogin;
import hong.xing.local.entity.SysMenu;
import hong.xing.local.entity.SysUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface LoginUserMapper {
     @Select(
             "select menu_name  as 'name', menu_path as path ,menu_data as 'data',menu_img as img,menu_desc as 'desc' from  hx_menu  WHERE  id  in " +
             "(select  menu_id from  hx_menu_role WHERE  role_id in" +
             "(select role_id  from  hx_user_role  WHERE  user_id  in" +
             "(select  id  from  hx_user  WHERE  `name` =#{username} and password = #{password}))) ORDER BY menu_desc")
     List<SysMenu>  UserResponse(Map<String,Object> params);

     @Select(
             "select  count('name') from  hx_user  WHERE  `name` =#{username} and password = #{password}"
     )
     int SelectUser(Map<String,Object> params);

}
