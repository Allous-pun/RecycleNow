import { faRecycle, faSort, faDumpster, faSchool } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Waste Collection & Disposal',
        content: 'We provide efficient waste collection and disposal services, ensuring safe and responsible management of waste for a cleaner environment.',
        to: '/',
        icon: faDumpster, // Updated to use faDumpster for Waste Collection & Disposal
        contents: [
            {
                heading: 'Waste Collection',
                img: '/assets/individualService/image_video_1.png',
                content: 'We collect various waste types from residential, commercial, and industrial areas, ensuring proper segregation and disposal.'
            },
            {
                heading: 'Waste Disposal',
                img: '/assets/individualService/image_video_2.png',
                content: 'Our responsible waste disposal methods include recycling, composting, and safe landfill management to minimize environmental impact.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Waste Segregation',
        content: 'We specialize in waste segregation, sorting organic, recyclable, and hazardous waste to ensure efficient recycling and disposal.',
        to: '/',
        icon: faSort, // Updated to match Waste Segregation
        contents: [
            {
                heading: 'Organic Waste Segregation',
                img: '/assets/individualService/text_1.png',
                content: 'We segregate organic waste for composting, turning food scraps and plant matter into valuable organic fertilizer.'
            },
            {
                heading: 'Recyclable Waste Segregation',
                img: '/assets/individualService/text_2.png',
                content: 'Recyclable materials such as paper, plastic, and metals are separated for recycling, reducing waste sent to landfills.'
            },
            {
                heading: 'Hazardous Waste Management',
                img: '/assets/individualService/text_3.png',
                content: 'We handle hazardous waste safely, ensuring it is segregated and processed according to industry regulations.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Waste Recycling',
        content: 'We provide sustainable waste recycling services, turning waste materials into reusable resources through innovative methods.',
        to: '/',
        icon: faRecycle, // Updated to match Waste Recycling
        contents: [
            {
                heading: 'Plastic Recycling',
                img: '/assets/individualService/audio_1.png',
                content: 'We recycle plastic waste, converting it into new products and reducing plastic pollution in the environment.'
            },
            {
                heading: 'Metal Recycling',
                img: '/assets/individualService/audio_2.png',
                content: 'Our metal recycling process helps conserve natural resources and reduces the energy required to produce new metal items.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Mass Education',
        content: 'We promote mass education on waste management and environmental sustainability through awareness programs and educational campaigns.',
        to: '/',
        icon: faSchool, // Updated to match Mass Education
        contents: [
            {
                heading: 'Waste Management Education',
                img: '/assets/individualService/pointcloud_1.png',
                content: 'We educate communities about proper waste disposal, recycling, and composting practices to reduce waste and protect the environment.'
            },
            {
                heading: 'Environmental Awareness Campaigns',
                img: '/assets/individualService/pointcloud_2.png',
                content: 'Our awareness campaigns spread knowledge on environmental sustainability, encouraging eco-friendly practices in schools and communities.'
            },
        ]
    },
];

export default data;