import axios from "axios";

const HOTEL_EMPLOYEE_API_URL = "http://localhost:8080/api/employees";

class HotelEmployeeService {
  enterNewEmployee(employee) {
    return axios.post(HOTEL_EMPLOYEE_API_URL, employee);
  }

  validatePassword(data) {
    return axios.post(HOTEL_EMPLOYEE_API_URL + "/validate", data);
  }
}

export default new HotelEmployeeService();
