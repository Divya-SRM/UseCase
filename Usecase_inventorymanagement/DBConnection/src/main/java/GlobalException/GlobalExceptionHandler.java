package GlobalException;

import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler  {
	
	@ExceptionHandler(value={Exception.class})
	public ResponseEntity<APIError> Exception(Exception ex,WebRequest req)
	{
		 APIError apiErr = new APIError();
	        apiErr.setId(System.currentTimeMillis()+"");
	        apiErr.setErrCode("ERR001");
	        apiErr.setMessage("Student data empty");
	        apiErr.setCategory("General RunTime");
	        apiErr.setTs(new Date());
	        System.err.println("Error Occured..." + ex.toString());    
	        ex.printStackTrace();

	        return new ResponseEntity<APIError>(apiErr,HttpStatus.BAD_REQUEST);
		
	}
	
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?>Errorhandling(MethodArgumentNotValidException exception){
		APIError apiErr = new APIError();
        apiErr.setId(System.currentTimeMillis()+"");
        apiErr.setErrCode("ERR002");
        apiErr.setMessage("Student data empty");
        apiErr.setCategory("Exception");
        apiErr.setTs(new Date());
        System.err.println("Error Occured..." + exception.toString());    
        exception.printStackTrace();

        return new ResponseEntity<APIError>(apiErr,HttpStatus.BAD_REQUEST);
		
	}
	
}