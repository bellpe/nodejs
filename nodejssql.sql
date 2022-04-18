#데이터베이스 설정
show databases;
#데이터베이스 생성
create database nodejs;
#데이터베이스 사용 ★★(켤때마다 실행)
use nodejs;

#테이블생성
create table nodejs_member(
	id varchar(100),
    pw varchar(100),
    nick varchar(100)
);
#데이터입력
insert into nodejs_member values('1','1','1');
#데이터검색
select*from nodejs_member;
#데이터수정
update nodejs_member 
set pw = '1234' 
where id = '1';
#데이터삭제
delete from nodejs_member where id = '1'