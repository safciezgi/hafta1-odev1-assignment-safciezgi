function targetSum(arr, target) {
    var result = [];                 //sonucun store lanacağı variable.
    for (var i = 0; i < arr.length; i++) {      // ex. indexler => [4] [2] [6] [1] [3] [9] [0]
      var test = 0;                             //       (+)         \/  
      for (var j = 0; j < arr.length; j++) {    //                   6? target değer ile eşleşiyor mu diye indexleri sırayla topladığım iç içe bir döngü ile kontrol ediyorum. 
        if (i === j) {  //tek bir index kendisi ile toplanarak hedef sonucu veriyor ise o indexi geçiyoruz. 
          continue ;
        }
        test = arr[i] + arr[j];  //indexlerin toplamları geçici olarak teste eşitlenir ve target(hedef) değer ile kontrol edilir.
        if (test === target) {
          result.push([i, j]);  //eşleşen indexler return içerisinde store lanır.
        }
      }  
    }
    return result;  //eşleşen indexler return edilir.
  }
  
console.log(targetSum([4, 2, 6, 1, 3, 9, 0], 4));

/**************                Big O notation => O(n^2)                          ******************/