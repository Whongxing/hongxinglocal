package hong.xing.local.dao.mapper;

import hong.xing.local.entity.SysRole;
import org.apache.ibatis.annotations.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Mapper
public interface SysRoleMapper {

    @Select("select  role_name  from  hx_role ")
    List<SysRole> selectRoleAllname();

    @Select("select  role_name  from  hx_role  WHERE  id  in" +
            "(select  role_id from  hx_user_role  where  user_id in" +
            "(select  id  from   hx_user  WHERE  name=#{user_name}))")
    List<SysRole> selecMyRoleName(Map<String, Object> params);

    @Delete("delete  from  hx_user_role  where user_id=#{user_id}")
    int deleteMyRoleName(@Param("user_id") int a);

    @Insert({
            "<script>",
            "insert into hx_user_role(role_id, user_id) values ",
            "<foreach collection='list' item='newRoleId' index='index' separator=','>",
            "(#{newRoleId}, #{user_id})",
            "</foreach>",
            "</script>"
    })
    int newInsertRole(@Param("user_id") int user_id, @Param("list") List list);
}
