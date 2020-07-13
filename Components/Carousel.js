export default function Carousel() {

    let slideIndex = 1;
    showSlides(slideIndex);

    //Thumbnail image controls

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classname = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }
    return (
        <div id='carousel'>

            <div className='panel'>
                <img className='panelpic' src='http://www.designbolts.com/wp-content/uploads/2014/01/Superman-Flat-Design.png' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h7>Superman</h7>
            </div>

            <div className='panel'>
                <img className='panelpic' src='http://www.designbolts.com/wp-content/uploads/2014/01/Batman-Flat-Design.png' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h7>Batman</h7>
            </div>

            <div className='panel'>
                <img className='panelpic' src='http://www.designbolts.com/wp-content/uploads/2014/01/Liz-Sherman-Flat-Design.png' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
                <h7>Liz Sherman</h7>
            </div>
            <div className='control'>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
            <script>speed = 600</script>
        </div>

    )
}