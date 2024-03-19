function Card(props){
    return (
      <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id+1) + '.jpg'} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
    )
  }


  export default Card;