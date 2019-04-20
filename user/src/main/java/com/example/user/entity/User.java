package com.example.user.entity;

import com.xh.mall.base.entity.TenantBaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 4:19 PM
 */
@Table(name = "tb_user")
@Entity
public class User extends TenantBaseEntity {
    @Column(name = "user_name")
    private String userName;
    @Column(name = "phone")
    private String phone;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", phone='" + phone + '\'' +
                '}' + super.toString();
    }
}
