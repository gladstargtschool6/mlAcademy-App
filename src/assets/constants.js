import flexible from './img/flexible.png';
import accessible from './img/accessible.png';
import educational from './img/educational.png';
import extensible from './img/extensible.png';
import python from './img/python.png';
import partner1 from './img/partner_1.svg';
import partner2 from './img/partner_2.svg';

export const info = {
  name: 'mlAcademy',
  tagline: 'Learn to code in Python through interactive Machine Learning labs.',
  features: [
    {
      title: `Integrated with Tensorflow`,
      icon: `fab fa-python fa-3x`,
      image: python,
      description: `Tensorflow is at the leading edge of Machine Learning computational libraries. Use our online Python interpreter to experiment with Keras, NumPy and TensorFlow with the guidance of our easy to follow lessons.`,
    },
    {
      title: `Educational`,
      icon: `fas fa-brain fa-3x`,
      image: educational,
      description: `Designed to be interactive to provide a fundamental understanding of Machine Learning while remaining approachable and fun.`,
    },
    {
      title: `Flexible`,
      icon: `fas fa-edit fa-3x`,
      image: flexible,
      description: `New topics and lessons can be added with ease as markdown files through our bespoke content management system.`,
    },
    {
      title: `Extensible`,
      icon: `fab fa-python fa-3x`,
      image: extensible,
      description: `Our engine makes it easy to build out from Machine Learning to explore other fields like Data Science or Data Visualisation.`,
    },
    {
      title: `Accessible`,
      icon: `fab fa-accessible-icon fa-3x`,
      image: accessible,
      description: `Accessibility is paramount with our development process. mlAcademy is WCAG 2.0 compliant so that nobody is left out.`,
    },
  ],
};

export const partners = {
  partner1: { url: 'https://ucl.ac.uk', image: partner1 },
  partner2: { url: 'https://microsoft.com', image: partner2 },
  docs: { url: 'https://docs.mlacademy.ml' },
};
