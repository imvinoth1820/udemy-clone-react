import p1 from "../assets/images/c3.jpg"
import p2 from "../assets/images/c2.jpg"
import p3 from "../assets/images/cc1.jpg"
import p4 from "../assets/images/c4.jpg"
import p5 from "../assets/images/c2.jpg"
import p6 from "../assets/images/c4.jpg"
import p7 from "../assets/images/cc1.jpg"
import p8 from "../assets/images/c3.jpg"





function Popular(){
    return(
        <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={p1}></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p2}></img>
                <h3>Web Development bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p3}></img>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p4}></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p5}></img>
                <h3>Web Development bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p6}></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={p7}></img>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={p8}></img>
                    <h3>Master UI/UX Designing with Figma</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

            </div>
        </div>
    )
}

export default Popular;