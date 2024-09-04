class ApiError extends Error {
    constructor(
        statusCode, 
        message = 'Internal server error',
        errors = [],
        stack = '' 
    ){
        super(message);
        this.statusCode = statusCode >= 400;
        this.errors = errors;
        this.data = null;
        this.message = message;
        this.success = false;

        if(stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };