const menu = ({id, title, category, price, img, desc}) => {
    return (
        <section>
    <img src={img} alt=""  className="image"/>
    <h2 className="title">{title}</h2>
    <h4 className="category">{category}</h4>
   <h3 className="price">{price}</h3>
   <p className="desc">{desc}</p>
   </section>
     );
   
}
 
export default menu;