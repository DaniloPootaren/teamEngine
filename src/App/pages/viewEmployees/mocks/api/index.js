
import data from "../data/records.json";

export const loadMoreEmp = (pageNumber, pageSize) => {

    const empData = data.slice((pageNumber - 1) * pageSize, pageSize * pageNumber)
    const hasMoreData = pageNumber < (data.length / pageSize)

    return {
        pageNumber: pageNumber,
        hasMore: hasMoreData,
        data: empData
    }

}