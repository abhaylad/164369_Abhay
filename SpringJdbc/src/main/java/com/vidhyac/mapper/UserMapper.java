package com.vidhyac.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.vidhyac.pojo.User;

/*public class UserMapper implements RowCallbackHandler {

	@Override
	public void processRow(ResultSet rs) throws SQLException {
		// TODO Auto-generated method stub

	}

}*/

public class UserMapper implements RowMapper<User> {
	   public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		   User user = new User();
		   //user.setId(rs.getInt("id"));
		   user.setUserId(rs.getInt("userId"));
		   user.setUserName(rs.getString("userName"));
		   user.setPassword(rs.getString("password"));
		   user.setEmailId(rs.getString("emailId"));
		   user.setMobileNo(rs.getLong("mobileNo"));
	      return user;
	   }
	}
