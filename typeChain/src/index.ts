const hello=()=>"hi";

class Block{
    constructor(
        private data:string
    ){}
    static hello(){
        return "🖐"
    }
}

const time=new Date()
time.getDate();
console.log(`check`,time);
//call 시그니처 어렵다! 

type ArrList={
    <T>(arr: T[]):void
   }
function LastArr(arr):ArrList {
    return arr[arr.length-1]
}
const arr:ArrList=(arr)=>{
    
}




//5.3 Declaration Files (14:43) 처음부터 시청
//https://www.typescriptlang.org/play?#code/PTAEBsFMBdQQwFygHYFcC2AjSAnAvAIwDcAUCBDKJkgM7Q4CWyA5ngEQAWk44A9m6XJRYAYySZevKHGR56qSILDD4OHEjRZcAbQC6ebQQA0AJl1LQI3shpTIAOj7MAFHDUBKUmTDQAngAdIUAAFcDhfXDwAb29QOLicSDgAE2twXxQ4dEhaeiZmI1j4+GZIAH4ETWwcWIBfWKsbWH8wiJwAWTgAa0jnZCycukYWdyRQ8MiAPhjyYsToVBxkGbBi4v7sovj68nqG6zpQDhk4PBaJju7cZ04Ttk99ppQGKzPW3E6enBvkF-4H8i-Kz2OClQgABgsQN49g2kDwAHIuDxeAivORyI1Duc2ggVqBZvE4blhgVYoS4qDypUMNUCcAyoARcdAgBqBwCVY4AXVdAgABJwAnTQA-fnOQAkg4BUCeZgAlRwAGq4ABydAAGZALaroEAD6OABoHAAnjgB0O0CAEZq1YANVcAGQ2ABF73OSwLVoha1sTQGxkLx0HA2Da9hiwFjYDRHQB3BDjNrWj1rKkIAgmQoh9YDBBsH28X2ukPusCYg6wAAyvmQyAD73w+IpmWycezueTactFsAIOOABdHADiDCsVgB5xnXySDMwA8XYAACdAgA8awA37dz+zaGAAzZw43Ag0qgABk89A05ws8gAB4COD3DE3TaV7CBiRHocGNBIOgEIkUmkMtohvkjChabgnxI7DJ9No2NAAG5sJ8THBExI1ADtzDHc90EMfRiGPIRKDgAgEFQZAuj9ZALBAQBE8cAUdHmQNQASDsAFy74AIQANcdAQABnsADCHAAGFwBQ8e7PtAFU1wAPcdADlAB9RwALVcAJMJQEABwnABcawAObrbUBABaZwAbBeceB-AYUBG1AQBJ0cARrbAB1VwAYmtAQATlsAFtHABIx0jABdx-sdUYgd9MAZMbAAOa0AJx1QAHGsAF07AAY680PQnUTlMAEN63MAH07QEACBrCMAGEnQEAapnAAiewAPyYc8dABSm0BAAxGwAQnp1QAOQcAUGXYgnZw-ECXhxzIvAyvtKpcHufFihUTACDwJCAGo4N2WJuBoIJ8sKyBitKsr4zyFhqq2SkCHsaBeAAVX8QIcAAYTgTrnABasLUAGs7ABZFwAx0eSniaNAX9eAYZJQA1QBN5tANjAF2hhAjpO0BAAthwAR5tAQAMFsAFjrQA0wAHZticdUJEaAGGsI5uD4FaaviLE7EcXgXDYAAPe46hPWA4BmvBkQh1b6XgGaJum2bcEW5bPDiEBDMADU6dUAF56TMAHZbQEYutQEABprAB+aoKaNFA1ADTxwARUdAA17LrQdAAAa0BAA52+CfACIJA1wBqobiYkHxYVH0yeRWFvzC5ldGkscgdP5K1AHYwCYc8cHHOARAVgsACEVaNhB1eYCxU0sDNlwLdo9baR3g1WIlYzYdBioYM3U15QBUNcARkGn0AHAnAAhGwBazucQAYVcACA6TMAEqHQEAATXABVm9wnyatjAAZFwAM5fz48SCt3Bbft0AAGVW8mnAqXXAAVaYSGKbQel8N2huYXQEB7khU0AGvH0575l2VAEgRDCGgaFATNeBEOBwA73gcGYOANz7mJin8Rhfzgc9QDoA-SgQdvO+7vvonqNZ4k66BnGH0fSSfK+4AFCTx3APD+axoAcAYDQewd9D6QCHpAXw+hAEKFIOA82YCP6JAjr+SAP8kF-3yKAjBxRkjcBgEESB0DYGd1KIg5BWC1jv3AaUb+v93ajB7mfUhCQYCLGQGBKBMC4H0OHroJhxQWEf1Xkkb4JDeFCJoaI+EURpHMOnrLQAN6NuSbGwwAKl0NgZkFdkBpSKpzTqzQADK2AB92psedAAdS4AQc6JI5Q5NyUAgAkGsAALjt96A6iNIZeygAUPvWoADtHXHZXcaAQAuDWSWSqEsJXiWygHFjKeygAI8cADLjK8fbuxoPvLuYJkCQF9Jvbeu9ClHw3O7SYK0SD5MKVSewbCbjDxRl6KgkgoA2CacU0p5Sd57zocfdc75pDIDqeacZkBenP1KC0mANwhgoxmXMg+zSv43GxvwIwHZzRxCAA