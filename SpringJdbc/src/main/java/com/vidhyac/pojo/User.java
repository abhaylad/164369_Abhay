package com.vidhyac.pojo;

public class User {
	
	private int userId;
	private String userName;
	private String password;
	private String emailId;
	private long mobileNo;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	/*public User(int userId, String userName, String password, String emailId, long mobileNo) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.mobileNo = mobileNo;
	}*/
	

	
	
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public long getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", emailId=" + emailId
				+ ", mobileNo=" + mobileNo + "]";
	}
	
	

	
	
}
