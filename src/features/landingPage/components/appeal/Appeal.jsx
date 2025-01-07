import "./appeal.scss";



const Appeal = (props)=>{
    
    return (
        <div className="appeal">
            {
                props.appealItemContent.map((data,index)=>{
                    return (
                        <div className="appealItem">
                            <span className={data.icon}></span>
                            <div className="appealItemContent">
                                <span>{data.title}</span>
                                <p>{data.brief}</p>
                                <a href={data.link}>Learn More</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Appeal;