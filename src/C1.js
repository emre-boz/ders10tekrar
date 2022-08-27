function C1(){
    // her interval çalıştığında yeni bir tane başlatırken diğerleri de çalışmaya devam ediyor
    setInterval(()=>{
        console.log("Zamanlayıcı çalıştı.");
    },4000)

    return(
<>
<p>C1 komponenti</p>
</>
    )
}

export default C1;