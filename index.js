let arr = [1,2,5,6,7,10,15]

// map()
// là phương thức được dùng để thao tác với các phần tử trên 1 mảng và trả về 1 giá trị thay đổi dựa trên mảng đó.
// demo: 
const arr1 = arr.map(items => items*2);
console.log(arr1); // giá trị trả về [2,4,10,12,14,20,30]
// giải thích: hàm map() sẽ lấy từng phần tử có trong mảng arr rồi lấy phần tử đấy *2 và trả về cho giá trị arr1

// filter()
// hàm filter() được dùng để tạo ra 1 tập con của 1 mảng được truyền vào và chỉ những phần tử thõa mãn mới được đưa vào 1 tập con
// demo:
const arr2 = arr.filter(items => items % 2 == 0);
console.log(arr2); // giá trị trả về [2, 6, 10 ]
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
console.log(result); // giá trị trả về 46
// giải thích: reduce là một hàm với hai giá trị là result và currentValue
// bởi vì không truyền initialValue vào cuối của mảng nên giá trị ban đầu của result mặc định là 0(nếu initialValue là 1 thì giá trị ban đầu của result là 1, etc)
// tương tự vòng lặp for thì hàm reduce sẽ quay vòng qua từng giá trị của mảng
// mỗi lần thực hiện một vòng lặp thì result sẽ nhận giá trị bằng result + currentValue, và currentValue thay đổi thành giá trị tiếp theo trong mảng theo 
// chiều từ trái qua phải.
// khi không còn giá trị nào thì phương thức reduce() sẽ trả về tổng giá trị.

// slice()
// tác dụng của hàm này là cắt bỏ 1 phần của array và cần lưu ý là hàm slice() sẽ tạo ra 1 mảng mới thay vì thực hiện thay đổi trực tiến trên mảng được cho
// cấu trúc: array.slice(from, until)
// trong đó: from là vị trí index đầu tiên trỏ vào mảng
        //   until là vị trí index phần tử được cắt đến
// demo
const arr3 = arr.slice(3, 6)
console.log(arr3); // giá trị trả về [ 6, 7, 10 ]
// giải thích: mảng arr3 sẽ được trả về từ giá trị thứ 3 của mảng đến giá trị thứ 5 của mảng arr

//splice:
// tác dụng tương tử hàm slice(), tuy nhiên ngược lại vs slice(), splice sẽ thay đổi trực tiếp trên đối tượng được cho sẵn.
// cấu trúc: array.splice(index, number of elements)
// trong đó: index là chỉ số đầu tiên của mảng được trỏ đến
        //   number of elements(noe) là số lượng phần tử sẽ bị cắt đi(nếu đối số NOE ko được tryền vào thì hàm splice sẽ tự động loại bỏ tất cả các phần tử 
        //   từ phần tử index trong mảng)
// demo: 
arr.splice(1,3)
console.log(arr); // giá trị trả về [ 1, 7, 10, 15 ]
// arr = [1,2,5,6,7,10,15]
// giải thích: vì đối số index được truyền vào là 1, và noe được truyền vào là 3 nên hàm splice sẽ loại bỏ các phần tử 2, 5, 6
arr = [1,2,5,6,7,10,15]

//find():
// hàm find() sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thõa mãn và hàm kiểm tra trả
// về true. Khi đó hàm find sẽ trả về giá trị của phần tử thõa mãn và bỏ qua các phần tử còn lại
// cấu trúc: array.find(function)
// demo:
const arr4 = arr.find((items) => {
    return items < 6
})
console.log(arr4); // giá trị trả về 1
//  arr = [1,2,5,6,7,10,15]
// giải thích: bởi vì tại ngay tại giá trị đầu tiên của mảng đã thõa mãn điều kiện là nhỏ hơn 6 nên hàm kiểm tra trả về true từ đó hàm find() trả về giá trị
// thõa mãn và dừng việc tìm kiếm lại.(nếu không thõa mãn thì hàm sẽ trả về giá trị là undefined)

//findIndex():
// tương tự như hàm find(), nhưng thay vì trả về giá trị phần tử thõa mãn, hàm findIndex() sẽ trả về vị trí mà giá trị mà phần tử ấy thõa mãn
//demo:
const index1 = arr.findIndex((item) => {
    return item > 6
})
console.log(index1); // giá trị trả về 4
//  arr = [1,2,5,6,7,10,15]
// giải thích: bởi vì tại giá trị bằng 7 thõa mãn điều kiện > 6 nên hàm findIndex() sẽ trả về vị trí của nó tại 4

//forEach()
// là 1 hàm phương thức có sẵn trong mảng, đúng như tên gọi của nó, ta sẽ lặp qua từng phần tử có trong mảng và xử lý chúng theo thứ tự
// cú pháp: forEach(item, index, array)
// trong đó: item là giá trị của phần tử hiện tại trong mảng
        //   index là vị trí phần tử hiện tại của mảng
        //   array là mảng gốc nà chúng ta đang lặp qua
// demo:
const fruit = ['banana','apple','pineapple','orange','mango']
fruit.forEach((item) => {
    console.log(`I love ${item}`);
})
// trả về:D
// I love banana
// I love apple
// I love pineapple
// I love orange
// I love mango

// some()
// hàm some() có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback
// Chỉ cần hàm callback() trả về true thì hàm some sẽ trả về true. Ngược lại nếu duyệt hết mảng mà không có trả về true thì hàm some sẽ là false
// cú pháp: some(function)
//demo:
const score = [6,5,8,10,3];
const checkPassScore = (score) => {
    return score < 5
};
const myFunc = () => {
    if(score.some == true){
        console.log("Rớt");
    }
    else {console.log("Đỗ");
    }
}

//sort()
// hàm sort