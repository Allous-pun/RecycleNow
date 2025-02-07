<<<<<<< HEAD
import { faImage, faTextWidth, faVolumeUp, faCube } from '@fortawesome/free-solid-svg-icons';
=======
import { faRecycle, faSort, faDumpster, faSchool } from '@fortawesome/free-solid-svg-icons';
>>>>>>> main

const data = [
    {
        id: 1,
<<<<<<< HEAD
        heading: 'Image & Video Annotation',
        content: 'We offer high-quality image and video annotation services to support machine learning models and AI systems, ensuring accurate and efficient training data.',
        to: '/',
        icon: faImage, // FontAwesome icon for image annotation
        contents: [
            {
                heading: 'Precise Image Annotation',
                img: '/assets/individualService/image_video_1.png',
                content: 'Our team provides precise image annotations, including object detection, image segmentation, and labeling to train AI models for visual recognition tasks.'
            },
            {
                heading: 'Video Annotation for AI',
                img: '/assets/individualService/image_video_2.png',
                content: 'We annotate videos frame-by-frame to identify objects, actions, and interactions, enabling your AI models to understand and process video data effectively.'
=======
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
>>>>>>> main
            },
        ]
    },
    {
        id: 2,
<<<<<<< HEAD
        heading: 'Text Annotation',
        content: 'Our text annotation services help businesses and researchers process large volumes of text data, categorizing, labeling, and extracting valuable insights.',
        to: '/',
        icon: faTextWidth, // FontAwesome icon for text annotation
        contents: [
            {
                heading: 'Entity Recognition',
                img: '/assets/individualService/text_1.png',
                content: 'We provide entity recognition services to identify and label important entities within your text, such as names, dates, locations, and more.'
            },
            {
                heading: 'Text Classification',
                img: '/assets/individualService/text_2.png',
                content: 'Our team helps categorize large amounts of text into predefined categories, such as sentiment analysis or topic classification, for more efficient data processing.'
=======
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
>>>>>>> main
            },
        ]
    },
    {
        id: 3,
<<<<<<< HEAD
        heading: 'Audio Annotation',
        content: 'Our audio annotation services include transcribing, categorizing, and labeling audio files to support speech recognition, sentiment analysis, and other audio-based AI applications.',
        to: '/',
        icon: faVolumeUp, // FontAwesome icon for audio annotation
        contents: [
            {
                heading: 'Speech-to-Text Conversion',
                img: '/assets/individualService/audio_1.png',
                content: 'We offer accurate audio transcription services, converting spoken words into text for further analysis and integration into speech recognition systems.'
            },
            {
                heading: 'Audio Categorization',
                img: '/assets/individualService/audio_2.png',
                content: 'We categorize audio files based on content, such as identifying specific speakers, sounds, or emotions in audio data to train AI models for better performance.'
=======
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
>>>>>>> main
            },
        ]
    },
    {
        id: 4,
<<<<<<< HEAD
        heading: '3D Point Cloud Annotation',
        content: 'We provide high-quality 3D point cloud annotation services to support advanced machine learning and AI models in applications like autonomous driving and geospatial analysis.',
        to: '/',
        icon: faCube, // FontAwesome icon for 3D point cloud annotation
        contents: [
            {
                heading: 'Precise 3D Object Labeling',
                img: '/assets/individualService/pointcloud_1.png',
                content: 'We label 3D point clouds for accurate recognition of objects, such as vehicles, buildings, and roads, to improve machine learning models in autonomous systems.'
            },
            {
                heading: 'Geospatial Data Annotation',
                img: '/assets/individualService/pointcloud_2.png',
                content: 'Our 3D point cloud annotation services support geospatial data analysis, enhancing models used for mapping, construction, and urban planning.'
=======
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
>>>>>>> main
            },
        ]
    },
];

export default data;
