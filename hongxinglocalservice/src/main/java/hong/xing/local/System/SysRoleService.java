package hong.xing.local.System;

import hong.xing.local.dao.mapper.SysRoleMapper;
import hong.xing.local.entity.SysRole;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class SysRoleService {

    @Resource
    private SysRoleMapper  sysRoleMapper;

    public List<SysRole>  getAllTreeName(){
      return   sysRoleMapper.selectRoleAllname();
    }

    public List<SysRole>  getMyTreeName(Map<String,Object> params){
        return  sysRoleMapper.selecMyRoleName(params);
    }

    @Transactional(propagation= Propagation.REQUIRED,isolation = Isolation.READ_COMMITTED,rollbackFor = Throwable.class)
    public void  setMyTreeName(Map<String,Object> params){
         int  userId = Integer.parseInt(params.get("user_id").toString());
//         sysRoleMapper.deleteMyRoleName(userId);
          List<String> list = (List)params.get("val");

        if (list != null && list.size() > 0) {
            log.info(list.toString());
            sysRoleMapper.newInsertRole(userId,list);
        }
    }
}
