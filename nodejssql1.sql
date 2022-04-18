#데이터베이스설정
show databases;
#데이터베이스 생성
create database nodejs;
#데이터베이스 사용 **(켤때마다 실행)
use nodejs;

#테이블 생성
create table message_member(
    email varchar(100),
    pw varchar(100),
    tel varchar(100),
    address varchar(100),
    Join_date date
);
#데이터입력
insert into nodejs_member values('1', '1', '1'); 
#데이터검색
select * from nodejs_member;
select * from message_member;

select * from sessions;
#데이터수정
update nodejs_member 
set nick = '1234'
where id = '1';

#데이터삭제
delete from nodejs_member where id = '1';


grant all privileges on *.* to ‘root’@‘%’ identified by ‘1234’

grant all privileges on *.* root@"%" identified by '1234' with grant option;