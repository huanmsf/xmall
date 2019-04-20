package com.xh.mall.base.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 4:13 PM
 */
@Repository
public interface IBaseRepository<T, ID extends Serializable> extends JpaRepository<T, ID> {

}
