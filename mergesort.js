function mergeSort(array)
{
    if(array.length <= 1)
    {
        return array;
    }

    const splitArray = split(array);

    
    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
    

}



function split(wholeArray)
{
    if(wholeArray.length <= 1)
    {
        return wholeArray
    }

    const middleIndex = Math.floor(wholeArray.length / 2);
    const left = wholeArray.slice(0, middleIndex);
    const right = wholeArray.slice(middleIndex, wholeArray.length);

    console.log([left, right]);

    return [left, right];
}

function merge(firstArray, secondArray)
{
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < firstArray.length && rightIndex < secondArray.length)
    {
        if(firstArray[leftIndex] < secondArray[rightIndex])
        {
            result.push(firstArray[leftIndex]);
            leftIndex++;
        }
        else
        {
            result.push(secondArray[rightIndex]);
            rightIndex++;
        }
    }

    if(leftIndex < firstArray.length)
    {
        result = result.concat(firstArray.slice(leftIndex));
    }
    else if(rightIndex < secondArray.length)
    {
        result = result.concat(secondArray.slice(rightIndex));
    }

    console.log(result);

    return result;
}