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
        content: 'We specialize in waste segregation, sorting organic, recyclable, and hazardous waste to ensure efficient recycling and disposal.',
        to: '/text-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Organic Waste Segregation',
                icon: image3,
                content: 'We segregate organic waste for composting, turning food scraps and plant matter into valuable organic fertilizer.'
            },
            {
                heading: 'Recyclable Waste Segregation',
                icon: image4,
                content: 'Recyclable materials such as paper, plastic, and metals are separated for recycling, reducing waste sent to landfills.'
            },
            {
                heading: 'Hazardous Waste Management',
                icon: image4,
                content: 'We handle hazardous waste safely, ensuring it is segregated and processed according to industry regulations.'
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
