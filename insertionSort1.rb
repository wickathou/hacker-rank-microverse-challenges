def insertionSort1(n, arr)
  k = arr[n-1]
  arr[n-1] = arr[n-2]
  it_arr = arr.reverse
  for i in 0...n
    if it_arr[i+1]<=k
      it_arr[i]=k
      p it_arr.reverse
      break
    else
      it_arr[i] = it_arr[i+1]
      p it_arr.reverse
    end
  end
end