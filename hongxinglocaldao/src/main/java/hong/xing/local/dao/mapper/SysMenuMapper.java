package hong.xing.local.dao.mapper;
import hong.xing.local.dao.mapperSql.SysMenuSql;
import hong.xing.local.entity.SysMenu;
import hong.xing.local.entity.SysRole;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

@Mapper
public interface SysMenuMapper {

//    @Select("select  menu_name as name,menu_img as img, menu_path as path ,menu_key as 'desc',id as 'key',menu_status as 'status'" +
//            "from hx_menu")
    @SelectProvider(type= SysMenuSql.class , method ="selectMeun" )
    List<SysMenu> select(Map<String,Object> params);


    @Select("select  menu_name  from  hx_menu")
    List<SysMenu> selectMenuAllname();

//  @Update("update  hx_menu  set  menu_status=#{status} where menu_name=#{name}")
    @UpdateProvider(type= SysMenuSql.class , method ="updateMenu")
    int update( Map<String,Object> params);

}
