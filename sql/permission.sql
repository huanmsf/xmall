CREATE TABLE jhi_permission
(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    target varchar(64) NOT NULL,
    permission varchar(64) NOT NULL COMMENT '权限'
);
CREATE UNIQUE INDEX jhi_permission_id_uindex ON jhi_permission (id);
ALTER TABLE jhi_permission COMMENT = '权限表';


CREATE TABLE jhi_user_permission
(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    permission_id int NOT NULL
);
CREATE UNIQUE INDEX jhi_user_permission_id_uindex ON jhi_user_permission (id);
ALTER TABLE jhi_user_permission COMMENT = '用户权限关联表';