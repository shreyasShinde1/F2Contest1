let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    let newArr = [];
    const professionEmployee = arr.filter((employee)=>{
        if(employee.profession === 'developer'){
            newArr.push(employee);
        }
    })
    console.log('Printing whoes Profession is Developer: ',newArr);
  }
  
  function addData() {
    //Write your code here, just console.log
    let appendObj =  {id:4,name:"susan",age:"20",profession:"intern"}
    let newArr = arr.push(appendObj)
    console.log('New Employee Data Added: ',arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr = []
    let remove = arr.filter((employee)=>{
        if(employee.profession !== 'admin'){
            newArr.push(employee);
        }
    })
    console.log('Removed Admin: ',newArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let concatArray = [
        {id:5,name:"shreyas",age:"23",profession:"developer"},
        {id:6,name:"ajay",age:"22",profession:"manager"},
        {id:7,name:"Akash",age:"23",profession:"admin"}
    ]
    let concat = arr.concat(concatArray);
    console.log('Concatenate New Array Into Orignal Array: ',concat);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }