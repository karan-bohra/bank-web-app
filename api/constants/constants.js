var common = {
	baseUrl : process.env.BASE_URL,
	host: 'localhost:3000'
}

var mDb = {
	db: 'bank',
	host: 'mongodb://localhost/'
}

errors = {
	SOMETHING_WENT_WRONG: "Something went wrong. Please try again",
	EMPTY_FIELDS: "Please Enter all the Fields",
	USER_EXISTS: "User already exists with this Email",
	USER_PASSWORD_WRONG: "Phone number or Password Wrong",
	USER_DOES_NOT_EXISTS: "Unregistered Email",
	INVALID_OTP: "Invalid OTP"
}

success = {
	ACCOUNT_CREATED: "Account successfully created. Redirecting...",
	LOGED_IN: "successfully Loged In. Redirecting...",
	USER_FOUND: "User found",
	OTP_VERIFIED: "OTP Verified",
	OTP_SENT: "OTP Sent",
	REDIRECTING: "Redirecting...."
}

module.exports = {
	common: common,
	mDb: mDb,
	errors: errors,
	success: success
}