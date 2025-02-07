import React from 'react';
import './pricing.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      planName: 'Test  Plan',
      price: '$10 / project',
      description: 'Perfect for smaller projects with essential features.',
      features: [
        'Image & Video Annotation (Up to 10,000 labels)',
        'Text Classification (Up to 5,000 documents)',
        'Basic Quality Assurance with Single-Level Review',
        'Standard Turnaround Time (7-10 business days)',
        'Data Annotation Tool Access',
        'Access to Annotation Progress Dashboard',
        'Free Initial Dataset Consultation',
        'Email Support',
      ],
      isDefault: false,
    },
    {
      id: 2,
      planName: 'Basic Plan',
      price: '$1999 / project',
      description: 'Perfect for smaller projects with essential features.',
      features: [
        'Image & Video Annotation (Up to 10,000 labels)',
        'Text Classification (Up to 5,000 documents)',
        'Basic Quality Assurance with Single-Level Review',
        'Standard Turnaround Time (7-10 business days)',
        'Data Annotation Tool Access',
        'Access to Annotation Progress Dashboard',
        'Free Initial Dataset Consultation',
        'Email Support',
      ],
      isDefault: false,
    },
    {
      id: 3,
      planName: 'Pro Plan',
      price: '$3799 / project',
      description: 'Advanced features for larger and more complex projects.',
      features: [
        'Everything in the Basic Plan, plus',
        'Image & Video Annotation (Up to 50,000 labels)',
        'Text Classification (Up to 20,000 documents)',
        'Audio Transcription (Up to 500 hours)',
        'Enhanced Quality Assurance with Multi-Level Review',
        'Faster Turnaround Time (3-5 business days)',
        'Dedicated Project Manager',
        'Priority Email & Phone Support',
      ],
      isDefault: true,  // Pro Plan is the default plan
    },
    {
      id: 4,
      planName: 'Enterprise Plan',
      price: '$5499 / project',
      description: 'All-inclusive, scalable solutions with premium support.',
      features: [
        'Everything in the Pro Plan, plus',
        'Unlimited Labels and Document Classification',
        '3D Point Cloud Annotation (Ideal for autonomous vehicle projects)',
        'Custom Workflow Design and Integration Support',
        'Real-Time Progress Reporting',
        '24/7 Premium Support',
        'On-Demand Annotation Team for Scalability',
        'Data Security Compliance (Advanced encryption and access controls)',
      ],
      isDefault: false,
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header text-center">
        <h2>Choose Your Plan</h2>
        <p>Select the best plan for your project needs.</p>
      </div>

      <div className="column">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`col-lg-12 mb-4 ${plan.isDefault ? 'default-plan' : ''}`}>
            <div className={`card pricing-card ${plan.isDefault ? 'default-card' : ''}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${plan.isDefault ? 'default-title' : ''}`}>{plan.planName}</h5>
                <p className="card-text">{plan.description}</p>
                <h4 className="price">{plan.price}</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className={plan.isDefault ? 'tick' : 'cross'}>✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={{
                    pathname: '/checkout',
                    state: {
                      planName: plan.planName,
                      price: plan.price,
                    },
                  }}
                  className={`pricing-link ${plan.isDefault ? 'default-plan-link' : 'border-link'} mt-2`}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
