function BenazirButton(props){
    function benazir(){
        console.log("benazir")
        return (
            "<p>fonkilandiniz</p>"
        );
    }


    return (
        <>
        <h3>Benazirin klikleri</h3>
        <button onClick={()=>benazir()}>Benazir</button>
        <button onClick={()=>props.yazanzi()}>yazanzir</button>
        </>
    )
}

export default BenazirButton;