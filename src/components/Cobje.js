function Cobje(props) {
    return (
      <>
        <p>Merhaba ben Cobje</p>
        <p>Benim mesaj özelliğimin değeri: {props.mesaj}</p>
        <p>Benim mesaj özelliğimin değeri JSON: {JSON.stringify(props.susaj?.ad)}</p>
      </>
    );
  }
  
  export default Cobje;