import React from "react";
import "./style.scss";

const ProjectOverview = () => {
  const sections = [
    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1657449121/%D8%AC%D8%AF%D9%8A%D8%AF_kxhwdu.png",
      description:
        "The homepage features a navigation bar with options for login, registration, and search, alongside a sidebar that displays all brands and categories. The second section introduces a set of slides that effectively communicate the website's concept.",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873385/Screenshot_2_flbcdn.png",
      description:
        "The fifth section presents the latest products, with pagination functionality allowing users to navigate through the available items.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656928670/eeeeeeeeeeeeeeeee_sbjbna.png",
      description:
        "The product page provides detailed information about each product, including an 'Add to Cart' button. Users can also submit ratings for the products.",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873385/Screenshot_4_zlgz0b.png",
      description:
        "The cart page displays all products added by the user, with options to increase product quantities or delete them. It also shows the total price and includes a button to empty the cart.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873385/Screenshot_6_ktcuqn.png",
      description:
        "Users can complete their purchase by selecting 'Pay with Card'.",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873386/Screenshot_10_dcpxyx.png",
      description:
        "The admin section features a unique sidebar and includes a graph that tracks the number of users, products, and other metrics.",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873387/Screenshot_16_wsdbbi.png",
      description:
        "The registration page enables users to create a new account.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/hudhud/image/upload/v1656873387/Screenshot_17_n7jvcc.png",
      description: "The login page allows users to access their accounts.",
    },
  ];

  return (
    <div className="project1-container">
      {sections.map(({ imageUrl, description }, index) => (
        <div className="section" key={index}>
          <img src={imageUrl} alt={`Screenshot ${index + 1}`} />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;
