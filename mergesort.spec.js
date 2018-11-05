describe('Split Array function', function() {



    it('is able to split an array into two halves', function() {
      // your code here 
      let array = [6, 5, 4, 3, 2, 1, 0];
      expect( split(array) ).toEqual([[6, 5 ,4], [3, 2, 1, 0]]);
    });


    it('has a working merge function', function() {
      let firstArray = [1, 2, 3, 7];
      let secondArray = [4, 5, 6];
      expect( merge(firstArray, secondArray) ).toEqual([1, 2, 3, 4, 5, 6, 7]);

      secondArray.push(8);
      secondArray.push(9);

      expect( merge(firstArray, secondArray)).toEqual([1, 2 , 3, 4, 5, 6, 7, 8, 9]);
    });


    it('can perform a merge sort on a small array', function() {
      let array = [850, 10];
      expect ( mergeSort(array)).toEqual([10, 850]);
    });

    it('can perform a merge sort on a large array', function() {
      let array = [10, 0, 9, 1, 8, 2, 7, 3, 45, 6, 4, 5];
      expect ( mergeSort(array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45]);
    });
  });