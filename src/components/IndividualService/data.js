
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
        content: 'We provide efficient waste collection and disposal services, ensuring safe and responsible management of waste for a cleaner environment.',
        to: '/image-video-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Waste Collection',
                icon: image1,
                content: 'We collect various waste types from residential, commercial, and industrial areas, ensuring proper segregation and disposal.'
            },
            {
                heading: 'Waste Disposal',
                icon: image2,
                content: 'Our responsible waste disposal methods include recycling, composting, and safe landfill management to minimize environmental impact.'            },
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
                content: 'We segregate organic waste for composting, transforming food scraps, plant matter, and other biodegradable materials into nutrient-rich organic fertilizer. This process reduces landfill waste, lowers greenhouse gas emissions, and enriches soil health. Composting accelerates natural decomposition, promoting sustainable agriculture and reducing the need for chemical fertilizers. By properly managing organic waste, we help create a circular system where waste is repurposed into valuable resources for farming and gardening.'
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
        content: 'We provide sustainable waste recycling services, turning waste materials into reusable resources through innovative methods.',
        to: '/audio-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Plastic Recycling',
                icon: image5,
                content: 'We recycle plastic waste, converting it into new products and reducing plastic pollution in the environment.'
            },
            {
                heading: 'Metal Recycling',
                icon: image6,
                content: 'Our metal recycling process helps conserve natural resources and reduces the energy required to produce new metal items.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Mass Education',
        content: 'We promote mass education on waste management and environmental sustainability through awareness programs and educational campaigns.',
        to: '/3d-point-cloud-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Waste Management Education',
                icon: image1,
                content: 'We educate communities about proper waste disposal, recycling, and composting practices to reduce waste and protect the environment.'
            },
            {
                heading: 'Environmental Awareness Campaigns',
                icon: image2,
                content: 'Our awareness campaigns spread knowledge on environmental sustainability, encouraging eco-friendly practices in schools and communities.'
            },
        ]
    }
];

export default data;
