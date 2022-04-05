export default class HttpException extends Error {
    success: boolean;
    statusCode?: number;
    message: string;
    error: string | null;

    constructor(statusCode: number, message: string, error?: string) {
        super(message);

        this.success = false
        this.statusCode = statusCode;
        this.message = message;
        this.error = error || null;
    }
}
