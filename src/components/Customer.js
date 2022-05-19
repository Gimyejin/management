import React from "react";

function Customer(props){
    const {id,image,name, birthday, gender,job} = props;
    return(
        <div>
            <CustomerProfile id={id} image={image} name={name} />
            <CustomerInfo birthday={birthday} gender={gender} job={job} />
        </div>
    );
}

//사용자의 name,id,image를 렌더링 하는 곳
function CustomerProfile(profile){
    const {id, image,name}=profile;
    return(
        <div>
            <img src={image} alt="profile"/>
            <h2>{name}({id})</h2>
        </div> 
    );
}
//나머지 정보 출력
function CustomerInfo(info){
    const{birthday, gender,job}=info;
    return(
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );
}
export default Customer;
