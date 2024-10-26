const DEFAULT_PAGE_LIMIT = 0
const DEFAULT_PAGE_NUMBER = 1

function getPagination(query){
	const limit = Math.abs(query.limit) || DEFAULT_PAGE_NUMBER //Math.abs casts to a Number
	const page  = Math.abs(query.page)  || DEFAULT_PAGE_LIMIT

	const skip = (page-1)*limit; //Pages are 1-indexed 
	
	return {
		skip,
		limit
	}
}

module.exports = {getPagination}