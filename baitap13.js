let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

// Câu 1: Thêm công việc mới
tasks.splice(tasks.length, 0, { name: "Làm bài tập về nhà", description: "Làm xong bài tập từ số 8 đến 13", completed: false });
console.log("Sau khi thêm công việc mới:");
console.log(tasks);

// Câu 2: Đánh dấu công việc hoàn thành
const completeWork = (tasks, taskNames) => {
    for (let i = 0; i < taskNames.length; i++) {
        let taskName = taskNames[i];
        for (let j = 0; j < tasks.length; j++) {
            if (tasks[j].name === taskName) {
                tasks[j].completed = true;
                break; 
            }
        }
    }
};
completeWork(tasks, ["Hoàn thành bài tập JavaScript", "Đi mua hàng", "Làm bài tập về nhà"]);
console.log("Sau khi đánh dấu công việc hoàn thành:");
console.log(tasks);

// Câu 3a: Sắp xếp công việc theo thứ tự tăng dần (A -> Z)
for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
        if (tasks[i].name.toLowerCase() > tasks[j].name.toLowerCase()) {
            let temp = tasks[i];
            tasks[i] = tasks[j];
            tasks[j] = temp;
        }
    }
}
console.log("Sau khi sắp xếp công việc theo thứ tự tăng dần:");
console.log(tasks);

// Cau 3b: Sắp xếp công việc theo thứ tự giảm dần (Z -> A)
for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
        if (tasks[i].name.toLowerCase() < tasks[j].name.toLowerCase()) {
            let temp = tasks[i];
            tasks[i] = tasks[j];
            tasks[j] = temp;
        }
    }
}
console.log("Sau khi sắp xếp công việc theo thứ tự giảm dần:");
console.log(tasks);
