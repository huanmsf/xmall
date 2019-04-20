package com.xh.mall.base.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

import com.xh.mall.base.listener.BaseEntityListener;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 3:35 PM
 */
@MappedSuperclass
@EntityListeners(BaseEntityListener.class)
public abstract class BaseEntity implements Serializable {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "create_time")
    private Date createTime;

    @CreatedBy
    @Column(name = "create_user_id")
    private Long createUserId;

    @LastModifiedBy
    @Column(name = "last_modified_user_id")
    private Long LastModifiedUserId;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    private Date LastModifiedDate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }

    public Long getLastModifiedUserId() {
        return LastModifiedUserId;
    }

    public void setLastModifiedUserId(Long lastModifiedUserId) {
        LastModifiedUserId = lastModifiedUserId;
    }

    public Date getLastModifiedDate() {
        return LastModifiedDate;
    }

    public void setLastModifiedDate(Date lastModifiedDate) {
        LastModifiedDate = lastModifiedDate;
    }

    @Override
    public String toString() {
        return "BaseEntity{" +
                "id=" + id +
                ", createTime=" + createTime +
                ", createUserId=" + createUserId +
                ", LastModifiedUserId=" + LastModifiedUserId +
                ", LastModifiedDate=" + LastModifiedDate +
                '}';
    }
}
