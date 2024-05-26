// Bài 7: Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
// ];

// const maxSalary = (employees) => {
//   let person = employees[0]; 
//   for (let i = 1; i < employees.length; i++) { 
//     if (employees[i].salary > person.salary) {
//       person = employees[i];
//     }
//   }
//   return person;
// }
// console.log(maxSalary(employees)); 

// Bài 8: Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//   { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//   { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];
// const hardWorking = (employees) => {
//   let person = employees[0];
//   let maxEffectiveDays = person.workingDays-person.lateDays;
//   for (let i = 1; i < employees.length; i++) {
//     let effectiveDays = employees[i].workingDays - employees[i].lateDays;
//     if ( effectiveDays>maxEffectiveDays) {
//       person = employees[i];
//     }
//   }
//   return person;
// }
// console.log(hardWorking(employees));

// Bài 9: Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value
// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
//   { id: 4, name: "John", salary: 2200 },
// ];
// const mergeByName = (employees) => {
//   const grouped = {};
//   for (let i = 0; i < employees.length; i++) {
//     const employee = employees[i];
//     if (!grouped[employee.name]) { 
//       grouped[employee.name] = []; 
//     }
//     grouped[employee.name].push(employee); 
//   }
//   return grouped;
// }
// console.log(mergeByName(employees));

// Bài 10: Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên. 
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2900 },
//   { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//   { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];
// const efficiency = (employees) => {
//     let person = employees[0];
//     let maxEfficiency = person.workingDays/person.salary;
//     for (let i = 1; i < employees.length; i++) {
//       let efficiency1 = employees[i].workingDays/employees[i].salary;
//       if ( efficiency1>maxEfficiency) {
//         person = employees[i];
//       }
//     }
//     return person;
//   }
//   console.log(efficiency(employees));

  //  Bài 11: Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công 
  // làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc 
  // là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
// const employees = [
//   { id: 1, name: "John", workingDays: 20 },
//   { id: 2, name: "Jane", workingDays: 22 },
//   { id: 3, name: "Mark", workingDays: 20 },
//   { id: 4, name: "Sam", workingDays: 24 },
//   { id: 5, name: "Lucy", workingDays: 22 },
// ];
// const createHistogram = (employees) => {
//   histogram = {};
//   for (let i = 0; i<employees.length; i++) {
//     workingDays = employees[i].workingDays;
//     if (histogram[workingDays]) {
//       histogram[workingDays] ++;
//     } else {
//       histogram[workingDays] = 1;
//     }
//   }
//   return histogram;
// }
// console.log(createHistogram(employees));

//  Bài 12: Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về tên, email, 
// số công làm việc, số công đi làm muộn, và mức lương của nhân viên. Tạo một danh sách các đối 
// tượng mới trong đó mỗi đối tượng chứa tên nhân viên, email và thông tin tổng hợp về số công làm 
// việc và đi làm muộn dưới dạng một object con.
// const employees = [
//   { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//   { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//   { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];
// const newEmployees = (employees) => {
//   let listEmployees = [];
//   for (let i = 0; i<employees.length; i++) {
//     const employee = employees[i];
//     const newEmployee = {
//       name: employee.name,
//       email: employee.email,
//       workInfo: { 
//         workingDays: employee.workingDays, 
//         lateDays: employee.lateDays
//       }
//     }; 
//     listEmployees.push(newEmployee);
//   };
//   return listEmployees;
// }
// console.log(newEmployees(employees));