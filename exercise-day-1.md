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

0. Case 0
- Input: []
- Output: false

1. Case 1
- Input: ['1', '2', '3', '4', '5']
- Output: false

2. Case 2
- Input: ['1', 2, 3, 4, 5]
- Output: false

3. Case 3
- Input: [1, 1, 1, 1, 1]
- Output: false

4. Case 4
- Input: [5, 4, 3, 2, 1]
- Output: false

5. Case 5
- Input: [1, 2, 3, 4, 5]
- Output: true

6. Case 6
- Input: [5, 4, 3, 2, 1].sort((a, b) => a - b)
- Output: true
