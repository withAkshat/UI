function Page4() {

    const expanded = function(){

        const textEl = document.querySelector(".text");
        const btn = document.querySelector("button");

        btn.addEventListener("click",function(e){
            e.preventDefault();
            console.log("clicked");
            
                textEl.classList.add("expanded");
                // console.log(textEl.classList);
                
        })
    }

    return <div className="article1">
        <div className="desc">
            <h5>ABOUT</h5>

            <div className="content">
                <h2>WHERE FASHION MEETS FREEDOM</h2>
                <p className="text expanded">We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer presenting customers with exclusive collections from indpendent designers. With a commitment to fostering a community of creativity and innovation,
                    we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity. we cutate each colleciton with a keen eye for unique designs that inspire confidence and self-expression.
                </p>
                <button onClick={()=>expanded()}>Read more</button>
            </div>
        </div>
        <div className="img">
            <img src="public/detail-img.png" alt="" />
        </div>
    </div>
}

export default Page4;