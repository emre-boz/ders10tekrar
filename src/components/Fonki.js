function Fonki(props){
    props.islem();
    let degisken="bu da dekiskenidir";
    function fonkilama(){
        
        return (
            <p>fonkilandiniz</p>
        )
    }
    return(
        <>
        <p>Fonki degisken={degisken} </p>
        {fonkilama()}
        <p>bu da moritanyalı adamdır:{props.moritanyaliAdam()}</p>
        {props.islem()}
        
        </>
    )

}

export default Fonki;