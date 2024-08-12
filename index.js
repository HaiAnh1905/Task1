const arr = [1,2,5,6,7,10]
// map()
// là phương thức được dùng để thao tác với các phần tử trên 1 mảng và trả về 1 giá trị thay đổi dựa trên mảng đó.
// demo: 
const arr1 = arr.map(items => items*2);
console.log(arr1);
// giải thích: hàm map() sẽ lấy từng phần tử có trong mảng arr rồi lấy phần tử đấy *2 và trả về cho giá trị arr1

// filter()
// hàm filter() được dùng để tạo ra 1 tập con của 1 mảng được truyền vào và chỉ những phần tử thõa mãn mới được đưa vào 1 tập con
// demo:
const arr2 = arr.filter(items => items % 2 == 0);
console.log(arr2);
// giải thích:  hàm filter sẽ lấy ra các phần tử chia hết cho 2 có trong arr và truyền vào mảng arr2

// reduce()
// là 1 phương thức đặc biệt được sử dụng để thực thi 1 hàm lên các phần tử của 1 mảng(từ trái qua phải) với 1 biến tích lũy để thu về 1 giá trị duy nhất
// cú pháp: array.reduce(callbackFunction(accumulator, currentValue, index, array) => { 
//     câu lệnh thực thi
// }, initialValue)
//  trong đó: accumulator là biến tích lũy của mảng, được trả về sau mỗi lần gọi hàm callBack
//            currentValue là biến hiện tại được xử lý của mảng
//            index là vị trí hiện tại của biến đang được xử lý của mảng
//            array là mảng hiện tại của hàm gọi reduce
// initialValue là giá thị tham chiếu đầu tiên (accumulator) của hàm callback trong lần gọi đầu tiên. Nếu giá trị  ko được cung cấp thì mặc định là 0 
// demo:
const result = arr.reduce((result, currentValue) => {
    return result + currentValue
})
console.log(result);
