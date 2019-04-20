package com.xh.mall.base.entity;

import com.xh.mall.base.listener.TenantEntityListener;

import javax.persistence.*;

/**
 * TODO
 *
 * @auther xh
 * @date 4/18/19 3:35 PM
 */
@MappedSuperclass
@EntityListeners(TenantEntityListener.class)
public abstract class TenantBaseEntity extends BaseEntity {
    @Column(name = "tenant_id", nullable = false)
    private Integer tenantId;

    public Integer getTenantId() {
        return tenantId;
    }

    public void setTenantId(Integer tenantId) {
        this.tenantId = tenantId;
    }

    @Override
    public String toString() {
        return "TenantBaseEntity{" +
                "tenantId=" + tenantId +
                '}' + super.toString();
    }
}
