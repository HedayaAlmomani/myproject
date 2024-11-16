import React from 'react';
import "./style.scss"
const Section = ({ imgSrc, description }) => (
  <div className="section">
    <img src={imgSrc} alt="project screenshot" />
    <p>{description}</p>
  </div>
);

const Project2 = () => {
  const sections = [
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877394/Screenshot_18_svin2k.png',
      description: 'The main page contains the navbar, which contains a set of categories so that the user can easily access the desired category. It also contains a cart, login and register.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877393/Screenshot_1_eyhma5.png',
      description: 'The second part of the home page contains another set of categories that make it easier for the user to access the product. When a category is clicked, the products of that category appear.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877393/Screenshot_2_i1wmhk.png',
      description: 'The third part of the home page contains the latest products available on the site and by clicking on the product, it moves to a page containing all the details of this product.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877393/Screenshot_6_ly7ntm.png',
      description: 'By clicking on the categories in the navbar, it will take you to the page containing the products of that category.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877393/Screenshot_8_qjtfgb.png',
      description: 'The card contains the products added by the user, he can delete and add to the order.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877393/Screenshot_9_uce8ix.png',
      description: 'My orders contains user orders and the total price.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877392/Screenshot_5_lgd40t.png',
      description: 'Register page.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/hudhud/image/upload/v1656877392/Screenshot_4_hfaxvb.png',
      description: 'Login page.',
    },
  ];

  return (
    <div className='project2-container'>
      {sections.map((section, index) => (
        <Section key={index} imgSrc={section.imgSrc} description={section.description} />
      ))}
    </div>
  );
};

export default Project2;
