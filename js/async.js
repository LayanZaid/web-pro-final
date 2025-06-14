function getData() {
  return new Promise((resolve, reject) => {
    resolve({counter: 10})
    // reject("An error")
  })
}

getData()
.then((data)=> displayData(data))
.catch(error=> console.log(error))