function SUCCESS(response, statusCode, message, data) {
  response.status(statusCode).json({isError: false, message: message, data: data});
}

function ERROR(response, statusCode, message) {
  response.status(statusCode).json({isError: true, message: message});
}

module.exports = {
  SUCCESS,
  ERROR
};