package hong.xing.local.System;

import hong.xing.local.dao.mapper.SysUserMapper;
import hong.xing.local.entity.SysUser;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class SysUserService {

    @Resource
    private SysUserMapper  sysUserMapper;

    public List<SysUser>   getAllUser(){
       return  sysUserMapper.getAllUser();
    }
}
