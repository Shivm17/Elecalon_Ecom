import React from 'react';
import RazorpayButton from '../components/Razorpay';

// The entire CSS from the original <style> block is placed here
const styles = `
   
    body {
        background-color: #f8fafc;
        color: #334155;
        line-height: 1.6;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    /* Hero Section */
    .hero {
        background: linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.9)), url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80') no-repeat center/cover;
        color: white;
        padding: 100px 0;
        text-align: center;
    }
    .hero-content {
        max-width: 800px;
        margin: 0 auto;
    }
    .hero h1 {
        font-size: 48px;
        margin-bottom: 20px;
    }
    .hero p {
        font-size: 20px;
        margin-bottom: 30px;
        opacity: 0.9;
    }
    .btn {
        display: inline-block;
        background: #f59e0b;
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
    }
    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(245, 158, 11, 0.4);
        background: #fbbf24;
    }
    /* Services Section */
    .services {
        padding: 80px 0;
        background: white;
    }
    .section-title {
        text-align: center;
        margin-bottom: 60px;
    }
    .section-title h2 {
        font-size: 36px;
        color: #1e3a8a;
        margin-bottom: 15px;
    }
    .section-title p {
        font-size: 18px;
        color: #64748b;
        max-width: 700px;
        margin: 0 auto;
    }
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }
    .service-card {
        background: #f8fafc;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }
    .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
    }
    .service-card i {
        font-size: 48px;
        color: #2563eb;
        margin-bottom: 20px;
    }
    .service-card h3 {
        font-size: 22px;
        margin-bottom: 15px;
        color: #1e3a8a;
    }
    /* Pricing Section */
    .pricing {
        padding: 80px 0;
        background: #f1f5f9;
    }
    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 50px;
    }
    .pricing-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
    }
    .pricing-card.popular {
        transform: scale(1.05);
        border: 3px solid #f59e0b;
        z-index: 2;
    }
    .pricing-card.popular .pricing-header {
        background: #f59e0b;
    }
    .popular-tag {
        position: absolute;
        top: 15px;
        right: -30px;
        background: #f59e0b;
        color: white;
        padding: 5px 30px;
        font-size: 14px;
        font-weight: 600;
        transform: rotate(45deg);
    }
    .pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    }
    .pricing-card.popular:hover {
        transform: scale(1.05) translateY(-5px);
    }
    .pricing-header {
        background: #2563eb;
        color: white;
        padding: 25px;
        text-align: center;
    }
    .pricing-header h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }
    .price {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .price span {
        font-size: 16px;
        font-weight: 500;
    }
    .pricing-body {
        padding: 30px;
    }
    .features {
        list-style: none;
        margin-bottom: 30px;
    }
    .features li {
        padding: 10px 0;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .features li i {
        color: #10b981;
    }
    .pricing-footer {
        padding: 0 30px 30px;
        text-align: center;
    }
    .btn-outline {
        display: inline-block;
        border: 2px solid #2563eb;
        color: #2563eb;
        padding: 12px 25px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    .btn-outline:hover {
        background: #2563eb;
        color: white;
    }
    .razorpay-btn {
        width: 100%;
        margin-top: 15px;
        min-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Why Choose Us */
    .why-us {
        padding: 80px 0;
        background: white;
    }
    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 50px;
    }
    .benefit-card {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }
    .benefit-icon {
        background: #dbeafe;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .benefit-icon i {
        font-size: 24px;
        color: #2563eb;
    }
    .benefit-content h3 {
        margin-bottom: 10px;
        color: #1e3a8a;
    }
    /* CTA Section */
    .cta {
        padding: 100px 0;
        background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
        color: white;
        text-align: center;
    }
    .cta h2 {
        font-size: 36px;
        margin-bottom: 20px;
    }
    .cta p {
        font-size: 20px;
        margin-bottom: 40px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.9;
    }
    /* Footer */
    footer {
        background: #0f172a;
        color: white;
        padding: 60px 0 30px;
    }
    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 40px;
    }
    .footer-column h3 {
        font-size: 20px;
        margin-bottom: 20px;
        color: #93c5fd;
    }
    .footer-column ul {
        list-style: none;
    }
    .footer-column ul li {
        margin-bottom: 12px;
    }
    .footer-column a {
        color: #cbd5e1;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
    }
    .footer-column a:hover {
        color: #60a5fa;
        transform: translateX(5px);
    }
    .social-links {
        display: flex;
        gap: 15px;
        margin-top: 20px;
    }
    .social-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #1e40af;
        border-radius: 50%;
        color: white;
        transition: all 0.3s ease;
    }
    .social-links a:hover {
        background: #2563eb;
        transform: translateY(-3px);
    }
    .copyright {
        text-align: center;
        padding-top: 30px;
        border-top: 1px solid #334155;
        color: #94a3b8;
        font-size: 14px;
    }
    /* Responsive Design */
    @media (max-width: 1024px) {
        .pricing-card.popular {
            transform: scale(1);
        }
        .pricing-card.popular:hover {
            transform: translateY(-5px);
        }
    }
    @media (max-width: 768px) {
       
        .hero h1 {
            font-size: 36px;
        }
        .hero p {
            font-size: 18px;
        }
        .pricing-grid {
            grid-template-columns: 1fr;
        }
        .pricing-card.popular {
            order: -1;
        }
        .popular-tag {
            right: -35px;
            font-size: 12px;
            padding: 5px 25px;
        }
    }
`;

const WebScrapingServicePage = () => {
    // NOTE: In a real Next.js app, you would use next/head for meta tags and external links.
    // However, to keep this as a single, self-contained JSX output that mirrors the original
    // HTML structure exactly, the <link> and <style> tags are included in the component body.
    return (
        <React.Fragment>
            {/* 1. External Font Awesome Link (required for icons) */}
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
            />
            
            {/* 2. Embedded Styles */}
            <style>{styles}</style>

            {/* 3. Reconstructed Header (based on available CSS classes) */}
        
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Professional Web Scraping Services for Businesses</h1>
                    <p>Transform unstructured web data into actionable business intelligence with our reliable scraping solutions</p>
                    <a href="#pricing" className="btn">View Our Plans</a>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Web Scraping Services</h2>
                        <p>We provide comprehensive data extraction solutions tailored to your business needs</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <i className="fas fa-shopping-cart"></i>
                            <h3>E-commerce Data Extraction</h3>
                            <p>Product details, prices, reviews, and inventory data from all major e-commerce platforms</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-newspaper"></i>
                            <h3>News & Content Monitoring</h3>
                            <p>Extract articles, blog posts, and news from any website with regular updates</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-chart-line"></i>
                            <h3>Financial Data Aggregation</h3>
                            <p>Stock prices, market trends, financial reports, and economic indicators</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-building"></i>
                            <h3>Real Estate Listings</h3>
                            <p>Property details, prices, locations, and agent information from real estate portals</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-briefcase"></i>
                            <h3>Job Postings Data</h3>
                            <p>Extract job listings, requirements, salaries, and company information</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-search"></i>
                            <h3>Custom Scraping Solutions</h3>
                            <p>Need something specific? We build custom scrapers for unique requirements</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing" id="pricing">
                <div className="container">
                    <div className="section-title">
                        <h2>Transparent Pricing</h2>
                        <p>Flexible plans designed to meet your business data needs</p>
                    </div>
                    <div className="pricing-grid">
                        {/* Trial Plan */}
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Trial Plan</h3>
                                <div className="price">₹999<span>/one-time</span></div>
                                <p>Perfect for testing our services</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="features">
                                    <li><i className="fas fa-check"></i> Up to 1,000 records</li>
                                    <li><i className="fas fa-check"></i> 1 Data Source</li>
                                    <li><i className="fas fa-check"></i> Basic Data Cleaning</li>
                                    <li><i className="fas fa-check"></i> CSV Output</li>
                                    <li><i className="fas fa-check"></i> Email Support</li>
                                    <li><i className="fas fa-check"></i> 7-day delivery</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <div className="razorpay-btn">
                                     <RazorpayButton paymentButtonId="pl_RJqNvANBTKjsrc" />
                                </div>
                            </div>
                        </div>

                        {/* Starter Plan */}
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Starter Plan</h3>
                                <div className="price">₹14,999<span>/month</span></div>
                                <p>Ideal for small businesses</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="features">
                                    <li><i className="fas fa-check"></i> Up to 10,000 records/month</li>
                                    <li><i className="fas fa-check"></i> 3 Data Sources</li>
                                    <li><i className="fas fa-check"></i> Basic Data Cleaning</li>
                                    <li><i className="fas fa-check"></i> CSV/Excel Output</li>
                                    <li><i className="fas fa-check"></i> Weekly Updates</li>
                                    <li><i className="fas fa-check"></i> Email Support</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <div className="razorpay-btn">
                                      <RazorpayButton paymentButtonId="pl_RJqNvANBTKjsrc" />
                                </div>
                            </div>
                        </div>

                        {/* Business Plan */}
                        <div className="pricing-card popular">
                            <div className="popular-tag">POPULAR</div>
                            <div className="pricing-header">
                                <h3>Business Plan</h3>
                                <div className="price">₹29,999<span>/month</span></div>
                                <p>Our most popular package</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="features">
                                    <li><i className="fas fa-check"></i> Up to 50,000 records/month</li>
                                    <li><i className="fas fa-check"></i> 10 Data Sources</li>
                                    <li><i className="fas fa-check"></i> Advanced Data Cleaning</li>
                                    <li><i className="fas fa-check"></i> Multiple Output Formats</li>
                                    <li><i className="fas fa-check"></i> Daily Updates</li>
                                    <li><i className="fas fa-check"></i> Priority Support</li>
                                    <li><i className="fas fa-check"></i> API Access (Optional)</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <div className="razorpay-btn">
                                    <RazorpayButton paymentButtonId="pl_RJqNvANBTKjsrc" />
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Enterprise Plan</h3>
                                <div className="price">₹59,999<span>/month</span></div>
                                <p>For large-scale data needs</p>
                            </div>
                            <div className="pricing-body">
                                <ul className="features">
                                    <li><i className="fas fa-check"></i> Unlimited records</li>
                                    <li><i className="fas fa-check"></i> Unlimited Data Sources</li>
                                    <li><i className="fas fa-check"></i> Custom Data Processing</li>
                                    <li><i className="fas fa-check"></i> Real-time Data Updates</li>
                                    <li><i className="fas fa-check"></i> Dedicated Account Manager</li>
                                    <li><i className="fas fa-check"></i> 24/7 Support</li>
                                    <li><i className="fas fa-check"></i> Full API Integration</li>
                                </ul>
                            </div>
                            <div className="pricing-footer">
                                <div className="razorpay-btn">
                                     <RazorpayButton paymentButtonId="pl_RJqNvANBTKjsrc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us" id="why-us">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Elecalon?</h2>
                        <p>We deliver high-quality web data extraction services with precision and reliability</p>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>High Accuracy Data</h3>
                                <p>Our advanced algorithms ensure data extraction with over 99% accuracy.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>Fast Delivery</h3>
                                <p>Get your data quickly with our optimized scraping infrastructure.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>Completely Legal</h3>
                                <p>We strictly adhere to robots.txt and terms of service of websites.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>Data Cleaning</h3>
                                <p>We don't just extract data, we clean and structure it for immediate use.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>Dedicated Support</h3>
                                <p>Our team is always available to address your queries and requirements.</p>
                            </div>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="benefit-content">
                                <h3>Secure & Confidential</h3>
                                <p>Your data projects are handled with utmost confidentiality and security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta" id="contact">
                <div className="container">
                    <h2>Ready to harness the power of web data?</h2>
                    <p>Contact us today to discuss your data needs and get a custom quote</p>
                    <a href="#pricing" className="btn">Get Started Now</a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>Elecalon</h3>
                            <p>Professional web scraping and data extraction services for businesses of all sizes.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="footer-column">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">E-commerce Data Extraction</a></li>
                                <li><a href="#">News & Content Monitoring</a></li>
                                <li><a href="#">Financial Data Aggregation</a></li>
                                <li><a href="#">Real Estate Listings</a></li>
                                <li><a href="#">Job Postings Data</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contact Info</h3>
                            <ul>
                                <li><i className="fas fa-envelope"></i> info@elecalon.com</li>
                                <li><i className="fas fa-phone"></i> +91 9876543210</li>
                                <li><i className="fas fa-map-marker-alt"></i> Mumbai, India</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2023 Elecalon Ecom OPC Private Limited. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default WebScrapingServicePage;
