import { faImage, faTextWidth, faVolumeUp, faCube } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
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
            },
        ]
    },
    {
        id: 2,
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
            },
        ]
    },
    {
        id: 3,
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
            },
        ]
    },
    {
        id: 4,
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
            },
        ]
    },
];

export default data;
