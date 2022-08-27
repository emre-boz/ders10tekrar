function ObjelerdeInecekVar(props){
    return(
    <>
    <p>Değişkenin değeri={props.degiskenPropu}</p>
    <p>obje dışarıdan değeri={props.objeDisardanPropu?.game}</p>
    <p>obje içerden değeri={props.objeIcerdenPropu?.ad}</p>
    </>
    );
}

export default ObjelerdeInecekVar;