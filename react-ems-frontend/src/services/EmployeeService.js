import axios from 'axios';

const EMPLOYEE_API_BASE_URL =  "http://localhost:8088/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeID){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeID);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();