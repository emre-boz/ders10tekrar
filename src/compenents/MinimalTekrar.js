function MinimalTekrar(props){
    function mamudov(){
        console.log("mamudov");
    }

    return(
        <>
        <p>Merhaba benim yaşım: {props.yas}</p>
        <button onClick={()=>console.log("Yanni")}>Yanni</button>
        <button onClick={()=>mamudov()}>Mamudov</button>
      
        </>
    )

}

export default MinimalTekrar;