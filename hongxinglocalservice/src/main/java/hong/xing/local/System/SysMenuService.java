package hong.xing.local.System;
import hong.xing.local.dao.mapper.SysMenuMapper;
import hong.xing.local.entity.SysMenu;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;


@Service
public class SysMenuService {

    @Resource
    private SysMenuMapper  sysMenuMapper;

    public List<SysMenu> getMenuData( Map<String,Object> params){
       return sysMenuMapper.select(params);
    }


    public int updateMenuData( Map<String,Object> params){
        return sysMenuMapper.update(params);
    }

}
