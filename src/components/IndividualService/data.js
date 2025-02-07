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
        heading: 'Image & Video Annotation',
        content: 'We provide high-quality image and video annotation services to support machine learning models and AI systems, ensuring accurate and efficient training data.',
        to: '/image-video-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Precise Image Annotation',
                icon: image1,
                content: 'Our team provides precise image annotations, including object detection, image segmentation, and labeling to train AI models for visual recognition tasks.'
            },
            {
                heading: 'Video Annotation for AI',
                icon: image2,
                content: 'We annotate videos frame-by-frame to identify objects, actions, and interactions, enabling your AI models to understand and process video data effectively.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Text Annotation',
        content: 'Our text annotation services help businesses and researchers process large volumes of text data, categorizing, labeling, and extracting valuable insights.',
        to: '/text-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Entity Recognition',
                icon: image3,
                content: 'We provide entity recognition services to identify and label important entities within your text, such as names, dates, locations, and more.'
            },
            {
                heading: 'Text Classification',
                icon: image4,
                content: 'Our team helps categorize large amounts of text into predefined categories, such as sentiment analysis or topic classification, for more efficient data processing.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Audio Annotation',
        content: 'Our audio annotation services include transcribing, categorizing, and labeling audio files to support speech recognition, sentiment analysis, and other audio-based AI applications.',
        to: '/audio-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Speech-to-Text Conversion',
                icon: image5,
                content: 'We offer accurate audio transcription services, converting spoken words into text for further analysis and integration into speech recognition systems.'
            },
            {
                heading: 'Audio Categorization',
                icon: image6,
                content: 'We categorize audio files based on content, such as identifying specific speakers, sounds, or emotions in audio data to train AI models for better performance.'
            },
        ]
    },
    {
        id: 4,
        heading: '3D Point Cloud Annotation',
        content: 'We provide high-quality 3D point cloud annotation services to support advanced machine learning and AI models in applications like autonomous driving and geospatial analysis.',
        to: '/3d-point-cloud-annotation',  // URL path for this service
        contents: [
            {
                heading: 'Precise 3D Object Labeling',
                icon: image1,
                content: 'We label 3D point clouds for accurate recognition of objects, such as vehicles, buildings, and roads, to improve machine learning models in autonomous systems.'
            },
            {
                heading: 'Geospatial Data Annotation',
                icon: image2,
                content: 'Our 3D point cloud annotation services support geospatial data analysis, enhancing models used for mapping, construction, and urban planning.'
            },
        ]
    }
];

export default data;
