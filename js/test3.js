function print() {
    // Write your code here such that a string "Resolved" is Printed to console after 2 seconds.
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("done")
        },2000)
    })
}
    print().then(res => console.log(res))


/*--------------------------------------------- */


function getData(){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const data = { id: 1, name: 'John Doe' };
                resolve(data);
              }, 2000);
        })
}
getData().then(res=>console.log(res))

/*--------------------------------------------- */