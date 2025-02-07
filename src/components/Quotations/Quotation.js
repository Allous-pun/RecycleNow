import React, { useState } from 'react';
import './quotation.css'; // Import custom styles
import { Button, Modal, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import emailjs from 'emailjs-com';

const quotations = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'Get a fully customized mobile app tailored to your business needs.',
    priceRange: '$500 - $20,000',
  },
  {
    id: 2,
    title: 'Website Design & Development',
    description: 'Beautiful, responsive websites that drive conversions.',
    priceRange: '$400 - $15,000',
  },
  {
    id: 3,
    title: 'Data Analytics & Reporting',
    description: 'Leverage data for better decision making with analytics solutions.',
    priceRange: '$700 - $10,000',
  },
  {
    id: 4,
    title: 'Point of Sale (POS) System',
    description: 'Seamless POS systems to streamline sales and inventory management.',
    priceRange: '$200 - $1,000',
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Scalable cloud computing services for your business.',
    priceRange: '$4,000 - $12,000',
  },
  {
    id: 6,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions for specific business needs.',
    priceRange: '$1,000 - $15,000',
  },
  {
    id: 7,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms to scale your business online.',
    priceRange: '$600 - $10,000',
  },
  {
    id: 8,
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with advanced security solutions.',
    priceRange: '$2,000 - $10,000',
  },
  {
    id: 9,
    title: 'IT Consulting',
    description: 'Strategic IT consulting services to enhance your business operations.',
    priceRange: '$800 - $7,000',
  },
  {
    id: 10,
    title: 'AI & Machine Learning',
    description: 'Automate and innovate using AI and machine learning technologies.',
    priceRange: '$2,000 - $20,000',
  },
];

const Quotation = () => {
  const [open, setOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleOpen = (quote) => {
    setSelectedQuote(quote);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedQuote(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      ...formData,
      service: selectedQuote.title, // Include the service title
    }, 'YOUR_USER_ID')
      .then(() => {
        alert('Your message has been sent successfully!');
        handleClose();
      })
      .catch((error) => {
        console.error('Failed to send message: ', error);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="quotation-container">
      <h1>Our Services & Quotations</h1>
      <div className="quotation-grid">
        {quotations.map((quote) => (
          <div key={quote.id} className="quote-card">
            <div className="quote-header">
              <h2>{quote.title}</h2>
              <Button variant="outlined" startIcon={<InfoIcon />} onClick={() => handleOpen(quote)}>
                View More
              </Button>
            </div>
            <p>{quote.description}</p>
            <p><strong>Price Range: </strong>{quote.priceRange}</p>
          </div>
        ))}
      </div>

      {/* Modal for quotation form */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal-content">
          <h2>Request a Quotation for {selectedQuote?.title}</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Your Email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              name="phone"
              label="Your Phone Number"
              fullWidth
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              name="message"
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Quotation;
