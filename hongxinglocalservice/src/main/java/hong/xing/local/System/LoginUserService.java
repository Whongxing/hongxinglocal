package hong.xing.local.System;

import hong.xing.local.dao.mapper.LoginUserMapper;
import hong.xing.local.entity.SysMenu;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class LoginUserService {

    @Resource
    private LoginUserMapper  loginUserMapper;
    public List<SysMenu> loginUser(Map<String,Object> params){

        return  loginUserMapper.UserResponse(params);
    }
}
