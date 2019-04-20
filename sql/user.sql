create table tb_user (
  id                    bigint not null primary key auto_increment,
  tenant_id             bigint,
  create_time           datetime,
  create_user_id        bigint,
  last_modified_user_id bigint,
  last_modified_date    datetime,
  userName              varchar(64),
  phone                 char(16)
);