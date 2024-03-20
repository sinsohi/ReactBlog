import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams(); // 유저가 URL 파라미터에 입력한거 가져오려면 useParams()
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  })

   return(
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) +'.jpg'} width="100%" />
        {console.log(typeof(id))}
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
   )
}

export default Detail;