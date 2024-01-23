import sale from "../assets/images/sale.jpg"
function Sale(){
    return(
        <div className="sale-image">
        <img src={sale}></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
    </div>
    )
}

export default Sale;