package hong.xing.local.dao.mapper;
import hong.xing.local.dao.mapperSql.SysUserSql;
import hong.xing.local.entity.SysUser;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.List;

@Mapper
public interface SysUserMapper {

    @SelectProvider(type = SysUserSql.class, method = "getAllUser")
    List<SysUser> getAllUser();

    @Insert("insert  into  hx_user (id,nick,name,password,status,phone) values(#{id},#{nick},#{name},#{password},#{status},#{phone})")
    int  addNewUser();
}
