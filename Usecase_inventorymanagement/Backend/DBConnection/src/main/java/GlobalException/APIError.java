package GlobalException;

import java.util.Date;



public class APIError {
	private String message;

    private Date ts;

    private String category;

    private String errCode;

    private String id;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getTs() {
		return ts;
	}

	public void setTs(Date ts) {
		this.ts = ts;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getErrCode() {
		return errCode;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "APIError [message=" + message + ", ts=" + ts + ", category=" + category + ", errCode=" + errCode
				+ ", id=" + id + "]";
	}
	

}
