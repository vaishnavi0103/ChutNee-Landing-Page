import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ScrollablePage.css'; // All styles consolidated here

// --- Data Definitions ---

const offerItems = [
    { name: 'BREAKFAST', image: '/images/breakfast.png' },
    { name: 'STREET FOOD', image: '/images/streetfood.png' },
    { name: 'DESSERTS', image: '/images/desserts.png' },
    { name: 'CHAII', image: '/images/chaii.png' },
    { name: 'HOT DRINKS', image: '/images/hotdrinks.jpg' },
    { name: 'COLD DRINKS', image: '/images/colddrinks.jpg' },
];

const reelsData = [
    { id: 1, poster: '/images/reel-poster1.jpg', videoSrc: '/videos/reel1.mp4' }, 
    { id: 2, poster: '/images/reel-poster2.jpg', videoSrc: '/videos/reel2.mp4' },
    { id: 3, poster: '/images/reel-poster3.jpg', videoSrc: '/videos/reel3.mp4' },
    { id: 4, poster: '/images/reel-poster4.jpg', videoSrc: '/videos/reel4.mp4' },
];

const popularDishes = [
    { name: 'CHICKEN BURGER', image: '/images/burger.jpg' },
    { name: 'PANNI POORI', image: '/images/streetfood.png' },
    { name: 'CHOCOLATE CAKE', image: '/images/chocolate-cake.jpg' },
    { name: 'MANGO SHAKE', image: '/images/mango-shake.jpg' },
    { name: 'FRENCH TOAST', image: '/images/french-toast.png' },
    { name: 'FALAFEL WRAP', image: '/images/falafel-wrap.png' },
    { name: 'BEEF CURRY', image: '/images/beef-curry.png' },
];

const galleryImages = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
];

// --- Helper Components ---

function Header() {
    return (
        <header className="site-header">
            <h1 className="site-logo">CHUTNEE</h1> {/* Placeholder for Logo/Brand */}
            <nav className="header-nav">
                <a href="/">Menu</a> 
                <a href="/">About</a> 
                <a href="/">Contact</a>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <img src="/images/logo-small.png" alt="Chutnee Logo" className="footer-logo" />
            <nav className="footer-nav">
                <ul>
                    <li>OUR STORY</li>
                    <li>MENU</li>
                    <li>AFTERNOON TEA</li>
                    <li>EVENTS</li>
                    <li>CHUTNEE FAMILY</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <p>124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF</p>
            <p>02085711888</p>
            <div className="social-links">
                {/* Social media icons/links can go here */}
            </div>
            <p className="copyright">COPYRIGHT 2024 © ALL RIGHT RESERVED. DEVELOPED BY FOODX3.AI</p>
        </footer>
    );
}

function ReelItem({ poster }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Simple state toggle for the pause/play button look
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className={`reel-item-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsPlaying(false); }} // Pause cosmetic button on mouse leave
        >
            <img
                src={poster}
                alt="Reel Placeholder"
                className="reel-image"
            />
            
            {/* The play/pause button remains for the visual effect */}
            <button className="play-pause-button" onClick={togglePlay}>
                {isPlaying ? '⏸' : '▶'}
            </button>
        </div>
    );
}
// --- End ReelItem Modification ---


// --- Section Components (Rest of code remains the same as before) ---

function Section1() {
    return (
        <div className="section1-container">
            <div className="background-image-wrapper">
                <img src="/images/section1-bg.jpg" alt="Chutnee interior" className="background-image" />
            </div>
            <div className="overlay-content">
                <h1>WELCOME TO CHUTNEE</h1>
                <div className="buttons">
                    <button className="view-menu button-hover-effect">VIEW MENU</button>
                    <button className="book-table button-hover-effect">BOOK A TABLE</button>
                </div>
            </div>
            <button className="reservation-button button-hover-effect">RESERVATION</button>
        </div>
    );
}

function Section2() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="section2-container">
            <div className="text-content">
                <h2>WHERE TRADITION MEETS INNOVATION IN EVERY BITE.</h2>
                <p>
                    Founded by a passionate husband-and-wife duo, Chutnee is London's go-to for a bold and refreshing twist on South Asian street food...
                </p>
                <button className="view-about-us button-hover-effect">VIEW ABOUT US</button>
            </div>
            <div
                className="video-image-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src="/images/section2-video-placeholder.jpg"
                    alt="Food preparation"
                    className={`video-image ${isHovered ? 'hovered' : ''}`}
                />
                <div className="play-button">▶</div>
            </div>
        </div>
    );
}

function Section3() {
    return (
        <div className="section3-container">
            <h2>WHAT WE OFFER</h2>
            <div className="offer-grid">
                {offerItems.map((item, index) => (
                    <div key={index} className="offer-item">
                        <img src={item.image} alt={item.name} className="offer-image" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Section4() {
    return (
        <div className="section4-container">
            <div className="image-part">
                <img src="/images/section4-dish.jpg" alt="Chutnee dish" />
            </div>
            <div className="text-part">
                <h2>WHY CHOOSE CHUTNÉE</h2>
                <h3>Fresh Flavours. Authentic Vibes.</h3>
                <p>
                    Discover bold, South Asian-inspired cuisine in the heart of Southall. From indulgent halal breakfasts to refined fusion plates...
                </p>
                <div className="stats">
                    <div>
                        <h3>100%</h3>
                        <p>Locally Sourced Ingredients</p>
                    </div>
                    <div>
                        <h3>98%</h3>
                        <p>Friendly, Attentive Service</p>
                    </div>
                    <div>
                        <h3>99%</h3>
                        <p>Perfect for Social Gatherings</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Section5() {
    return (
        <div className="section5-container">
            <h2>BEST SELLERS</h2>
            <div className="bestsellers-display">
                <div className="arrow left-arrow">{'<'}</div>
                <div className="bestseller-item">
                    <img src="/images/burger.jpg" alt="Burger" />
                </div>
                <div className="bestseller-item">
                    <img src="/images/hotdrinks.jpg" alt="cold coffee" />
                    <p>COLD COFFEE</p>
                </div>
                <div className="bestseller-item">
                    <img src="/images/chocolate-cake.jpg" alt="Chocolate-Cake" />
                </div>
                <div className="arrow right-arrow">{'>'}</div>
            </div>
            <button className="view-menu button-hover-effect">VIEW MENU</button>
        </div>
    );
}

function Section6() {
    return (
        <div className="section6-container">
            <div className="background-image-wrapper">
                <img src="/images/section6-interior.jpg" alt="Restaurant interior" className="background-image" />
            </div>
            <div className="overlay-content">
                <h2>RESERVE YOUR TABLE AT CHUTNÉE</h2>
                <p>
                    Whether you're planning a cozy breakfast, a family dinner, or a stylish catch-up with friends — we've got the perfect seat waiting for you.
                </p>
                <button className="book-a-table button-hover-effect">BOOK A TABLE</button>
            </div>
        </div>
    );
}

function Section7() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="section7-container">
            <h2>MOST POPULAR DISHES</h2>
            <p>Get a taste of what everyone's talking about. These are the Chutnée favorites our guests keep coming back for:</p>
            <Slider {...settings} className="popular-dishes-slider">
                {popularDishes.map((dish, index) => (
                    <div key={index} className="dish-item">
                        <img src={dish.image} alt={dish.name} />
                        <p>{dish.name}</p>
                    </div>
                ))}
            </Slider>
            <button className="view-menu button-hover-effect">VIEW MENU</button>
        </div>
    );
}

function Section8() {
    return (
        <div className="section8-container">
            <h2>ABOUT US</h2>
            <h3>LOVE ABOUT US</h3>
            <div className="grid-reviews-images">
                <div className="review-card">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>ChutNee cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries...</p>
                    <p>Anu Ajit</p>
                </div>
                <div className="main-image">
                    <img src="/images/section8-gulabjamun.jpg" alt="Gulab Jamun" />
                </div>
                <div className="review-card">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>ChutNee Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries...</p>
                    <p>Anu Ajit</p>
                </div>
                <div className="bottom-left-image">
                    <img src="/images/section8-owners.jpg" alt="Chutnee owners" />
                </div>
                <div className="review-card">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>ChutNee Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries...</p>
                    <p>Anu Ajit</p>
                </div>
                <div className="bottom-right-image">
                    <img src="/images/section6-interior.jpg" alt="Chutnee interior detail" />
                </div>
            </div>
        </div>
    );
}

function Section9() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="section9-container">
            <h2>WATCH OUR REELS</h2>
            <p>Get a taste of what everyone's talking about. These are the Chutnée favorites our guests keep coming back for:</p>
            <Slider {...settings} className="reels-slider">
                {reelsData.map((reel) => (
                    <ReelItem key={reel.id} poster={reel.poster} />
                ))}
            </Slider>
        </div>
    );
}

function Section10() {
    const gallerySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="section10-container">
            <div className="share-experience-section">
                <h2>STAY CONNECTED & SHARE YOUR EXPERIENCE WITH US!</h2>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/tiktok.png" alt="TikTok" />
                        <p>TIKTOK</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.jpg" alt="Instagram" />
                        <p>IG</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/snapchat.png" alt="Snapchat" />
                        <p>SNAP</p>
                    </a>
                </div>
            </div>

            <div className="our-gallery-section">
                <h2>OUR GALLERY</h2>
                <Slider {...gallerySettings} className="gallery-slider">
                    {galleryImages.map((imgSrc, index) => (
                        <div key={index} className="gallery-item">
                            <img src={imgSrc} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

// --- Main App Component ---

function ScrollablePage() {
    return (
        <div className="ScrollablePage">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Footer />
        </div>
    );
}

export default ScrollablePage;