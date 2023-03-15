let soNguyen = prompt("Mời bạn nhập số nguyên: ");
document.write("Các ước của số nguyên " + soNguyen + " là: ")
for(let i = 1; i<=soNguyen; i++){
    if(soNguyen % i === 0){
        document.write(i + ", ");
    }
}