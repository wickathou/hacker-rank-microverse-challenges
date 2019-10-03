const problems = 3
const array = [4, 2, 6, 1, 10]

const lisa = (k, arr) => {
    let currentPage = 0
    let page = 1
    let special = 0
    let prevPage = 1

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr[i]+1; j++) {
            currentPage = Math.ceil(j / k)
                if (currentPage!==prevPage) {
                    page++
                }
                if (j===page) {
                    special++
                }
            prevPage = currentPage
        }
        page++
        prevPage = 1
    }

    console.log(page)
    return special
}

console.log(lisa(problems, array))