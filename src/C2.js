function C2(props){
    return (
        <>
        <p>Ben C2 içinde bir paragrafım</p>
        <div>
            {props.children}
        </div>
        <p>
            {props.sn}
        </p>
        </>

    );
}

export default C2;