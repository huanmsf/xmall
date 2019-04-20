package com.example.user.repository;


import com.example.user.entity.User;
import com.xh.mall.base.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 4:13 PM
 */
@Repository
public interface UserRepository extends IBaseRepository<User, Long> {

}
