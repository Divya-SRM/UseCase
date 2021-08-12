package com.rsc.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class UserDetail {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@NotNull
	private Integer userid;
	
	@NotNull
	private String username;
	
	@NotNull
	private String userdob;
	
	@NotNull
	private String useremail;
	private String usermobil;
	
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserdob() {
		return userdob;
	}
	public void setUserdob(String userdob) {
		this.userdob = userdob;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUsermobil() {
		return usermobil;
	}
	public void setUsermobil(String usermobil) {
		this.usermobil = usermobil;
	}
	

}
