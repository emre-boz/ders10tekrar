function C1(props) {
   
  return (
    <>
      <p>Merhaba ben component 1</p>
      <p>Benim mesaj özelliğimin değeri: {props.mesaj}</p>
      <p>Benim mesaj özelliğimin değeri JSON: {JSON.stringify(props.mesaj)}</p>
    </>
  );
}

export default C1;
