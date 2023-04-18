## UNIT TEST - Exercise Day 1

### CÁC BƯỚC ĐỂ VIẾT UNIT TEST

1. Phân tích, liệt kê các case có thể xảy ra
2. Đưa ra input parameter và expected output cho từng case
3. Viết test
4. Chạy test
5. Đánh giá và thẩm định kết quả sau khi chạy test. Ví dụ bao nhiêu % test case pass là được, độ phủ....


### CÁC THÀNH PHÂN CƠ BẢN CỦA 1 UNIT TEST

Các thành phần cơ bản của 1 unit test là : Test suit, Block test, Test case, Action, Assert


### TEST CASE ĐỂ KIỂM TRA MẢNG TĂNG DẦN

| Input    | Output |
| -------- | ------- |
| 'abc'  | false    |
| 123 | false     |
| null    | false    |
| undefine    | false    |
| {}    | false    |
| []    | false    |
| [1]    | false    |
| ['1', 2]    | false    |
| [null, 2]    | false    |
| [undefined, 2]    | false    |
| [[], 1, 2, 3]    | false    |
| [2, 1]    | false    |
| [1.5, 2, 1]    | false    |
| [1, 2, 3]    | true    |
| [1, 1.5, 2]    | true    |
