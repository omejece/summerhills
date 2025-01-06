import "./progressbar.scss";


const Progressbar = (props)=>{

    return (
        <div className="progressbar">
            <div 
               className="percentage"
               style={{
                  width: `${props.percentage}%`
               }}
            ></div>
        </div>
    );
}

export default Progressbar;


