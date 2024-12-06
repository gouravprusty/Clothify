import './CSS/About.css';

export default function About() {
    return(
        <div className="about-page">
            <div className="container">
                <div className="about__inner">
                    <h1 className='page-heading'>About</h1>
                    <div className="about-row">
                        <div className="about-col column1">
                            <h2>Our Story</h2>
                            <p>Welcome to Clothify, your one-stop destination for stylish and affordable clothing. Founded with a passion for fashion and a commitment to quality, we aim to make every shopping experience enjoyable and seamless. Whether you're looking for trendy outfits, timeless classics, or wardrobe essentials, we've got something for everyone.</p>
                        </div>
                        <div className="about-col">
                            <img src="/assets/images/pexels-mikhail.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="about-row row-reverse">
                        <div className="about-col column1">
                            <h2>Our Mission</h2>
                            <p>At Clothify, our mission is simple: to provide high-quality clothing that suits your style and fits your budget. We believe that fashion should be accessible to everyone, and we work tirelessly to bring you the best designs, materials, and prices. Customer satisfaction is at the heart of everything we do.</p>
                        </div>
                        <div className="about-col">
                            <img src="/assets/images/pexels-olly.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="about-row">
                        <div className="about-col column1">
                            <h2>Why Choose Us?</h2>
                            <p>With a curated selection of clothing for men, women, and kids, Clothify is more than just a store – it’s a community. We prioritize sustainability, customer service, and innovation to deliver an unparalleled shopping experience. Join thousands of happy customers who trust us for their fashion needs.</p>
                        </div>
                        <div className="about-col">
                            <img src="/assets/images/happy-customer.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
