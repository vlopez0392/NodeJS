const {Worker, 
       isMainThread,  
       workerData, 
} = require('worker_threads');

if(isMainThread){
	console.log(`Main thread Process id is: ${process.pid}`)
	new Worker(__filename, 
				{
				workerData: [4,3,6,7]
				});
		new Worker(__filename, 
				{
				workerData: [1,9,0,2]
				});
}else{
	console.log(`Worker thread Process id is: ${process.pid}`)
    console.log(`Worker data ${workerData} sorted is ${workerData.sort()}`)
}