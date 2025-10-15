import React from 'react';
import Link from 'next/link';

// This component uses inline styles converted from the original HTML to maintain
// the exact look and feel as requested.
const JobListingPage = () => {
  return (
    <> 
     <div style={{ backgroundColor: '#ffffff', color: '#1f2937', minHeight: '100vh', paddingTop: '20px' }}>

      {/* ========================================================================= */}
      {/* 1. Job Listings Section */}
      {/* ========================================================================= */}
      <div style={{
        maxWidth: '1200px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {/* Original 4 Boxes */}
        {/* Email Marketing Assistant Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Email Marketing Assistant</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹21,000 – ₹30,000 / month</p>
          
          <Link href="/Job/email_marketing"   style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            View details
          </Link>
        </div>

        {/* Data Verification Assistant Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Data Verification Assistant</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹18,500 – ₹25,000 / month</p>
         <Link href="/Job/data_verification" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            View details
          </Link>
        </div>

        {/* Web Scraping Executive Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Web Scraping Executive</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹18,000 – ₹23,000 / month</p>
          <Link href="/WebScrap" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            View details
          </Link>
        </div>

        {/* Product Listing Executive Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Product Listing Executive</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹18,000 – ₹23,000 / month</p>
          <Link href="/Job/product_listing" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            View details
          </Link>
        </div>

        {/* New 6 Boxes */}
        {/* Social Media Executive Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Social Media Executive</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹21,500 / month</p>
          <Link href="/Job/social_media" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
          </Link>
        </div>

        {/* Automation Executive Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Automation Executive</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹17,000 / month</p>
           <Link href="/Job/automation" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
          </Link>
        </div>

        {/* Catalog Coordinator Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Catalog Coordinator</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹21,000 / month</p>
         <Link
          href="/Job/catalog"
          style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
        </Link>
        </div>

        {/* Client Onboarding Intern Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Client Onboarding Intern</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹21,000 / month</p>

          <Link
          href="/Job/client_onboard"
          style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
        </Link>
        </div>

        {/* Marketplace Assistant Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Marketplace Assistant</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹19,000 / month</p>
          <Link href="/Job/market_place" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
          </Link>
        </div>

        {/* Data Entry Executive Box */}
        <div style={{
          width: '30%',
          minWidth: '240px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            Actively hiring
          </div>
          <h3 style={{ margin: '5px 0', fontSize: '16px' }}>Data Entry Executive</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Elecalon Ecom (OPC) Pvt. Ltd.</p>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Remote</p>
          <p style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333', fontWeight: '500' }}>₹20,000 / month</p>
          <Link href="/Job/data_entry" style={{
            display: 'inline-block',
            background: '#2c3e50',
            color: 'white',
            padding: '8px 15px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            marginTop: '10px'
          }}>
            Apply Now
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. Feature Boxes Section */}
      {/* ========================================================================= */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          width: '200px'
        }}>
          <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>🏠 Remote Work</p>
        </div>
        <div style={{
          textAlign: 'center',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          width: '200px'
        }}>
          <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>💸 On-Time Salary</p>
        </div>
        <div style={{
          textAlign: 'center',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          width: '200px'
        }}>
          <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>📈 Career Growth</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. WFH FAQs Section (Get Hired Fast!) */}
      {/* ========================================================================= */}
      <div style={{
        maxWidth: '800px',
        margin: '30px auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{
          color: '#2c3e50',
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '10px',
          textAlign: 'center'
        }}>
          Work From Home Jobs - FAQs (Get Hired Fast!)
        </h2>
        
        {/* FAQ 1 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: '#f5f7fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '10px', fontSize: '18px' }}>❓</span>
            <span>How quickly can I start a work-from-home job with Elecalon?</span>
          </div>
          <div style={{
            padding: '15px',
            background: 'white',
            color: '#333',
            lineHeight: '1.6'
          }}>
            Successful applicants typically start within <strong>3-5 business days</strong> after application approval. We offer <strong>same-day onboarding</strong> for urgent positions!
          </div>
        </div>

        {/* FAQ 2 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: '#f5f7fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '10px', fontSize: '18px' }}>💰</span>
            <span>Which work-from-home jobs pay the highest salaries?</span>
          </div>
          <div style={{
            padding: '15px',
            background: 'white',
            color: '#333',
            lineHeight: '1.6'
          }}>
            Our top-paying remote roles include:<br />
            • <strong>Email Marketing Specialists</strong> (₹25k-35k/month)<br />
            • <strong>E-commerce Catalog Managers</strong> (₹22k-30k/month)<br />
            • <strong>Data Automation Experts</strong> (₹20k-28k/month)<br />
            <em style={{ color: '#e74c3c' }}>Bonus: Performance incentives can add ₹5k-10k monthly!</em>
          </div>
        </div>

        {/* FAQ 3 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: '#f5f7fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '10px', fontSize: '18px' }}>🎓</span>
            <span>Can I apply with no prior work-from-home experience?</span>
          </div>
          <div style={{
            padding: '15px',
            background: 'white',
            color: '#333',
            lineHeight: '1.6'
          }}>
            Absolutely! We hire for <strong>entry-level positions</strong> like:<br />
            • Data Entry Associates<br />
            • Product Listing Assistants<br />
            • Social Media Interns<br />
            All required training is provided <strong>free of cost</strong>.
          </div>
        </div>

        {/* FAQ 4 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            background: '#f5f7fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ marginRight: '10px', fontSize: '18px' }}>⏰</span>
            <span>Are there flexible timing options for remote work?</span>
          </div>
          <div style={{
            padding: '15px',
            background: 'white',
            color: '#333',
            lineHeight: '1.6'
          }}>
            Choose from:<br />
            • <strong>Fixed shifts</strong> (9AM-6PM or 2PM-11PM IST)<br />
            • <strong>Flexi-time</strong> (Complete 8 hours anytime in 24hrs)<br />
            • <strong>Task-based</strong> (Deadline-driven, no fixed hours)
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a
            href="/ApplyNow"
            style={{
              display: 'inline-block',
              background: '#e74c3c',
              color: 'white',
              padding: '12px 25px',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            🚀 Apply for Remote Jobs Now
          </a>
          <p style={{ color: '#666', marginTop: '10px' }}>100% Online Process | Daily Hiring</p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. General FAQs Section */}
      {/* ========================================================================= */}
      <div style={{
        maxWidth: '800px',
        margin: '30px auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{
          color: '#2c3e50',
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '10px'
        }}>
          Frequently Asked Questions
        </h2>
        
        {/* FAQ 1 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer'
          }}>
            Q: How can I apply for remote jobs at Elecalon Ecom?
          </div>
          <div style={{ padding: '15px', background: 'white', color: '#333' }}>
            Click &quot;Apply Now&quot; on any job listing or visit our Careers page at www.elecalon.in/careers to submit your application.
          </div>
        </div>

        {/* FAQ 2 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer'
          }}>
            Q: What is the salary payment frequency?
          </div>
          <div style={{ padding: '15px', background: 'white', color: '#333' }}>
            All salaries are paid monthly between the 1st-5th of each month via bank transfer or digital payment methods.
          </div>
        </div>

        {/* FAQ 3 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer'
          }}>
            Q: Do you provide training for these remote positions?
          </div>
          <div style={{ padding: '15px', background: 'white', color: '#333' }}>
            Yes! We provide 1-2 weeks of paid training for all new hires, conducted virtually through our onboarding portal.
          </div>
        </div>

        {/* FAQ 4 */}
        <div style={{
          marginBottom: '15px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '12px 15px',
            fontWeight: 'bold',
            color: '#2c3e50',
            cursor: 'pointer'
          }}>
            Q: What equipment do I need for remote work?
          </div>
          <div style={{ padding: '15px', background: 'white', color: '#333' }}>
            You&apos;ll need a laptop/PC with minimum 4GB RAM, stable internet connection (10+ Mbps), and a quiet workspace.
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default JobListingPage;
