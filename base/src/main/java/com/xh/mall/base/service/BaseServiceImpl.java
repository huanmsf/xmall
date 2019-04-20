package com.xh.mall.base.service;

import com.xh.mall.base.repository.IBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 4:01 PM
 */
public class BaseServiceImpl<T, ID extends Serializable> implements IBaseService<T, ID> {

    @Autowired
    private IBaseRepository<T, ID> baseRepository;


    @Override
    public T find(ID id) {
        return baseRepository.findById(id).get();
    }

    @Override
    public List findAll() {
        return baseRepository.findAll();
    }

    @Override
    public List<T> findList(ID... ids) {
        return baseRepository.findAllById(Arrays.asList(ids));
    }

    @Override
    public T save(T t) {
        return baseRepository.save(t);
    }
}
