package com.xh.mall.base.service;

import java.io.Serializable;
import java.util.List;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 3:59 PM
 */
public interface IBaseService<T, ID extends Serializable> {
    /**
     * 查找实体对象
     *
     * @param id ID
     * @return 实体对象，若不存在则返回null
     */
    T find(ID id);

    /**
     * 查找所有实体对象集合
     *
     * @return 所有实体对象集合
     */
    List<T> findAll();

    /**
     * 查找实体对象集合
     *
     * @param ids ID
     * @return 实体对象集合
     */

    List<T> findList(ID... ids);

    T save(T t);
}
