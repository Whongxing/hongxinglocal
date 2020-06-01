package hong.xing.local.dao.mapper;

import hong.xing.local.dao.mapperSql.SysRoleSql;
import hong.xing.local.dao.mapperSql.SysUserSql;
import hong.xing.local.entity.SysRole;
import org.apache.ibatis.annotations.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Mapper
public interface SysRoleMapper {

    @Select("select  role_name  from  hx_role ")
    List<SysRole> selectRoleAllname();

    @SelectProvider(type = SysRoleSql.class, method = "selectRole")
    List<SysRole>  selectRole(Map<String, Object> params);

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

    @Select({
            "<script>",
            "select  id  from  hx_role  where role_name in",
                "<foreach collection='list' item='newRoleId' open='(' separator=',' close=')'>",
                "#{newRoleId}",
                "</foreach>",
            "</script>"
    })
    List<Integer> newSelectRole(@Param("list")ArrayList<String> list);
}
