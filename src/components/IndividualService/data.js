
// Import the required images
import image1 from '../../assets/home/r1.jpeg';
import image2 from '../../assets/home/r2.jpeg';
import image3 from '../../assets/home/r3.jpeg';
import image4 from '../../assets/home/r4.jpeg';
import image5 from '../../assets/home/r5.jpeg';
import image6 from '../../assets/home/r6.jpeg';

const data = [
    {
        id: 1,
        heading: 'Waste Collection & Disposal',
        content:"RecycleNow provides efficient waste collection and disposal services for various areas, ensuring safe handling and waste segregation. We use lined landfills, high-temperature incineration to reduce waste volume and generate energy, recycling of materials like paper, glass, plastics, and metals, and composting organic waste into nutrient-rich compost. These methods promote environmental protection and a cleaner, healthier community.",
        to: '/image-video-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Waste Collection',
                icon: image1,
                content: "RecycleNow provides efficient waste collection services for residential, commercial, industrial, and public areas. We use waste bins, garbage trucks, and specialized equipment to ensure safe and hygienic handling of waste. Our regular collection services help prevent waste accumulation, promoting cleanliness and public health."
            },
            {
                heading: 'Waste Disposal',
                icon: image2,
                content: " We manage landfill disposal with proper liners and drainage systems to prevent contamination. Our incineration services reduce waste volume and generate energy. We facilitate recycling of materials such as paper, glass, plastics, and metals. Additionally, we offer composting services for organic waste, turning it into nutrient-rich compost. These best practices help us promote environmental protection and a cleaner, healthier community."
            },
        ]
    },
    {
        id: 2,
        heading: 'Waste Segregation',
        content: 'We specialize in waste segregation by systematically sorting waste into organic, recyclable, and hazardous categories. This process enhances efficient recycling, reduces environmental pollution, and ensures safe disposal. Proper waste segregation conserves resources, minimizes landfill waste, and promotes a circular economy. By separating biodegradable waste for composting, extracting reusable materials for recycling, and safely handling hazardous waste, we contribute to a cleaner and more sustainable environment.',
        to: '/text-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Organic Waste Segregation',
                icon: image3,
                content: 'We segregate organic waste for composting, transforming food scraps, plant matter, and other biodegradable materials into nutrient-rich organic fertilizer. This process reduces landfill waste, lowers greenhouse gas emissions, and enriches soil health. Composting accelerates natural decomposition, promoting sustainable agriculture and reducing the need for chemical fertilizers. By properly managing organic waste, we help create a circular system where waste is repurposed into valuable resources for farming and gardening.',
            },
            {
                heading: 'Recyclable Waste Segregation',
                icon: image4,
                content: 'Recyclable materials such as paper, plastic, glass, and metals are carefully sorted to ensure they can be processed and reused effectively. Recycling reduces the volume of waste sent to landfills, conserves natural resources, and lowers energy consumption required for manufacturing new products. Proper waste segregation helps prevent contamination, ensuring materials are repurposed into new products like eco-friendly packaging, construction materials, and consumer goods. By recycling, we contribute to a cleaner environment and a more sustainable future.'
            },
            {
                heading: 'Hazardous Waste Management',
                icon: image4,
                content: 'We handle hazardous waste with strict safety protocols, ensuring it is properly segregated, stored, and processed according to industry regulations. Hazardous waste includes chemicals, medical waste, batteries, electronic waste, and toxic substances that require special treatment to prevent environmental contamination and health risks. Our approach involves secure containment, specialized disposal methods, and compliance with environmental laws to protect communities and ecosystems. Proper hazardous waste management reduces pollution, minimizes risks to human health, and supports a cleaner, safer environment.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Waste Recycling',
        content: 'We provide sustainable waste recycling services, turning waste materials into reusable resources through innovative methods. Our goal is to reduce waste and promote environmental conservation by transforming discarded materials into valuable products.',
        to: '/audio-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Plastic Recycling',
                icon: image5,
                content: 'We recycle plastic waste, converting it into new products and reducing plastic pollution in the environment. Our process involves collecting, sorting, and processing various types of plastics, ensuring they are repurposed into useful items like containers, packaging materials, and even clothing. By recycling plastic, we help reduce the demand for virgin materials and minimize the impact on our planet.'
            },
            {
                heading: 'Metal Recycling',
                icon: image6,
                content: 'Our metal recycling process helps conserve natural resources and reduces the energy required to produce new metal items. We collect and process scrap metals, such as aluminum, copper, and steel, and transform them into raw materials for manufacturing industries. This not only saves energy but also reduces greenhouse gas emissions and the need for mining new metals. By choosing metal recycling, you contribute to a more sustainable and eco-friendly future.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Mass Education',
        content: 'We believe that proper waste management starts with education. Our programs are designed to teach communities about responsible waste disposal, effective recycling methods, and sustainable composting practices. By equipping individuals with the right knowledge, we help reduce landfill waste, conserve natural resources, and protect the environment.',
        to: '/3d-point-cloud-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Waste Management Education',
                icon: image1,
                content: 'We are dedicated to educating communities on the importance of effective waste management to promote a cleaner and healthier environment. Our educational programs empower individuals with the knowledge and skills needed to practice proper waste disposal, recycling, and composting. By spreading awareness, we encourage people to adopt sustainable habits that reduce waste and conserve natural resources.',
            },
            {
                heading: 'Environmental Awareness Campaigns',
                icon: image2,
                content: 'Our environmental awareness campaigns are designed to educate, inspire, and empower individuals to embrace sustainable practices that protect our planet. Through engaging programs and outreach activities, we spread knowledge about environmental sustainability and promote eco-friendly behaviors in schools, communities, and workplaces.',
            },
        ]
    }
];

export default data;
