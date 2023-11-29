class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof ErrorHandler) {
    // Xử lý lỗi đã được xác định trước đó
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === "CastError" && err.kind === "ObjectId") {
    // Xử lý lỗi CastError khi không tìm thấy đối tượng
    statusCode = 404;
    message = "Not Found";
  } // Thêm các điều kiện xử lý lỗi khác ở đây (nếu cần)

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
