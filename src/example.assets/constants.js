import flexible from './img/flexible.png';
import accessible from './img/accessible.png';
import educational from './img/educational.png';
import extensible from './img/extensible.png';
import python from './img/python.png';

export const info = {
  name: 'myAcademy',
  tagline: 'A highly flexible, interactive educational engine for high-school students',
  features: [
    {
      title: `Flexible`,
      icon: `fas fa-edit fa-3x`,
      image: flexible,
      description: `New topics and lessons can be added with ease as markdown files through our bespoke content management system.`
    },
    {
      title: `Educational`,
      icon: `fas fa-brain fa-3x`,
      image: educational,
      description: `Designed to be interactive to provide a fundamental understanding of Machine Learning while remaining approachable and fun.`
    },
    {
      title: `Python`,
      icon: `fab fa-python fa-3x`,
      image: python,
      description: `Use our online Python interpreter to experiment with Keras, NumPy and TensorFlow with the guidance of our lessons.`
    },
    {
      title: `Extensible`,
      icon: `fab fa-python fa-3x`,
      image: extensible,
      description: `Our engine makes it easy to build out from Machine Learning to explore other fields like Data Science or Data Visualisation.`
    },
    {
      title: `Accessible`,
      icon: `fab fa-accessible-icon fa-3x`,
      image: accessible,
      description: `Accessibility is paramount with our development process. mlAcademy is WCAG 2.0 compliant so that nobody is left out.`
    }
  ],
  links: {
    partner1: 'https://microsoft.com',
    partner2: 'https://ucl.ac.uk',
    docs: 'https://docs.mlacademy.ml'
  }
};
