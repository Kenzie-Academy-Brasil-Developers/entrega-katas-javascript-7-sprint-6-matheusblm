function newForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
	    const currentValue = array[index]
	    callback(currentValue, index, array)
	}
     }

function newFill(array, valeu, begin, end){
	if(begin == null){
		begin = 0
	}
	if(end == null){
		end = array.length
	}
	for(let i = begin; i < end; i++){
		array[i] = valeu
	}
	return array
}

function newMap(array, callback){
	let result = []
	for(let index =0; index < array.length; index++){
		if(array[index] !== undefined){
			let apply = callback(array[index], index, array)
			result.push(apply)
		}
	}
	return result
}

function newSome(array, callback){
	for(let index =0; index < array.length; index++){
		let apply = callback(array[index], index, array)
			if(apply === true){
				return true
			}
		}
	return false
}

function newFind(array, callback){
	for(let index =0; index < array.length; index++){
		let apply = callback(array[index], index, array)
			if(apply === true){
				return array[index]
			}
		}
	return undefined
}

function newFindIndex(array, callback){
	for(let index =0; index < array.length; index++){
		if(array[index] !== null){
			let apply = callback(array[index], index, array)
				if(apply === true){
					return index
				}
		}
	}
	return -1
}

function newEvery(array, callback){
	let earray = array
	for(let index =0; index < earray.length; index++){
		if(earray[index] !== null){
			let apply = callback(earray[index], index, array)
				if(apply === false){
					return false
				}
		}
	}
	return true
}


function newFilter(array, callback){
	let result = []
	for(let index =0; index < array.length; index++){
		if(array[index] !== null){
			let apply = callback(array[index], index, array)
				if(apply === true){
					result.push(array[index])
				}
		}
	}
	return result
}

function newConcat(...arrN){
	let result = []
	for(let index = 0; index < arrN.length; index++){
		for(let j = 0; j < arrN[index].length; j++){
			result.push(arrN[index][j])
		}
	}
	return result
}

function newIncludes(array, element, begin){
	if(begin == null){
		begin = 0
	}
	for(let index = begin; index < array.length; index++){
			if(element === array[index]){
				return true
			}
		}
	return false
}


function newIndexOf(array, element, begin){
	if(begin == null){
		begin = 0
	}
	if(begin < 0){
		begin = array.length - 1
	}

	for(let index = begin; index < array.length; index++){
			if(element === array[index]){
				return index
			}
	}
	return -1
}

function newJoin(array, separador){
	let result = ""
	let test = "oi"
	if(separador == null){
		separador = ""
	}
	if(typeof separador !== typeof test){
		separador.toString()
	}
	for(let index = 0; index < array.length; index++){
		result += separador + array[index]
	}

	return array === "" ? "" : result
}

function newReduce(array, callback, acc){
	if(acc == null){
		acc = 0
	}
	let result = acc
	for(let index = 0; index < array.length; index++){
		if(array[index] !== null){
		result += callback(acc, array[index],index, array)
		}
	}
	return result
}

function newSlice (array, begin, end){
	let result = []
	if(begin == null){
		begin = 0
	}
	if(end == null){
		end = array.length - 1
	}
	if(begin < 0){
		begin = begin + array.length 
		end = array.length
	}

	for(let index = begin ;index < end; index++){
		result.push(array[index])
	}
	return result 
}


// testes 
let array = [1,2,3]
let array1 = [2,2,2] 
let array2 = [4,5,6] 
function bigThanTwo(n){
	return n > 2
}
function equalTwo(n){
	return n === 2
}
function bigThanZero(n){
	return n > 0
}
function bigThanOne(n){
	return n > 1
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
newFill(array1, 4)
newFill(array2, 4, 0, 2)
newFind(array,bigThanOne)
newFindIndex(array, equalTwo)
newEvery(array, bigThanZero)
newEvery(array, bigThanTwo)
newFilter(array, bigThanOne)
newIncludes(array, 2)
newIncludes(array, 2,2)
newIncludes(array, 2,-1)
newIndexOf(array, 3)
newIndexOf(array, 1, 0)
newJoin(["oi","tudo","bem"], " ")
newConcat(array, [1,1,1], ["test", "teste"])
newSlice(array, 0, 3)
newSlice(array, 0, -2)
newMap(array, function(num){
	return num * 2
})
newSome(array, function(num){
	return num > 2
})
newReduce(array, reducer)


