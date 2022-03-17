function readBooksPromise (time, book) {
  console.log("saya mulai membaca " + book.name )
  return new Promise( function (resolve, reject){
    setTimeout(function(){
      let sisaWaktu = time - book.timeSpent
      if(sisaWaktu >= 0 ){
          console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
          resolve(sisaWaktu)
      } else {
          console.log("saya sudah tidak punya waktu untuk baca "+ book.name)
          reject(sisaWaktu)
      }
    }, book.timeSpent)
  })
}
 
 var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function execute(time, index){
  readBooksPromise(time, books[index]).then(function(sisaWaktu){
    
     if (sisaWaktu !== 1000)
       execute(sisaWaktu, index+1)
     
   }).catch(function(err){
     console.log(err)
   })
 }
 
 execute(10000, 0)
