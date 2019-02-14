package com.vidhyac.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import com.vidhyac.interfaces.IUserDAO;
import com.vidhyac.mapper.UserMapper;
import com.vidhyac.pojo.User;

public class UserDAO implements IUserDAO{
	
	
	private JdbcTemplate jdbcTemplate;
	
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	

	public List<User> getUser(int userId) {
		
		String sqlGetUser=null;
		
		sqlGetUser="select * from userTable1 where userId="+userId;
		List <User> users = jdbcTemplate.query(sqlGetUser, new UserMapper());
		
		return users;
	}

	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		String sqlGetAllUsers;
		sqlGetAllUsers="select * from userTable1";
		List <User> users = jdbcTemplate.query(sqlGetAllUsers, new UserMapper());
		
		return users;
	}

	public int addUser(int userId, String userName, String password, String emailId, long mobileNo) {
		String sqlInsert=null;
		//"insert into userTable values(101,'vidhya','vid','cvs@gmail.com',87444762);
		sqlInsert="insert into userTable1 values("+userId+",'"+userName+"','"+password+"','"+emailId+"',"+mobileNo+")";
		return jdbcTemplate.update(sqlInsert);
	}

	public int remove(int userId) {
		String sqlRemove=null;
		//delete from userTable1 where userId=10;
		sqlRemove="delete from userTable1 where userId="+userId;
		return jdbcTemplate.update(sqlRemove);
	}

	public int update(int userId,String password) {
		
		String sqlUpdate=null;
		sqlUpdate="update userTable1 set password='"+password+"' where userId="+userId;
		return jdbcTemplate.update(sqlUpdate);
	}

	
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("springjdbc.xml");
		UserDAO dao=context.getBean(UserDAO.class);
		/*System.out.println(dao.addUser(101,"vidhya","vid","cvs@gmail.com",87444762));
		System.out.println(dao.addUser(102,"mallika","mal","mal@gmail.com",762436));
		System.out.println(dao.addUser(103,"chaitali","cha","cha@gmail.com",8128536));*/
		//System.out.println(dao.remove(101));
		//System.out.println(dao.getUser(102));
		//System.out.println(dao.getAllUsers());
		System.out.println(dao.update(101, "hello"));
	}
	
	
}
