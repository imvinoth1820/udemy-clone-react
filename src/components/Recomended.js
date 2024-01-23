
import c1 from "../assets/images/cc1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"




function Recomended(){
    return(
        <div className="recomended">
        <h1 className="recomended__title"> Recomended for you</h1>
        <p>Pick the best fit</p>
        <div className="recomended__container">
            <div className="course-card">
                <img src={c1}></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c2}></img>
                <h3>Web Development bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c3}></img>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c4}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>




        </div>
    </div>
    )
}

export default Recomended;