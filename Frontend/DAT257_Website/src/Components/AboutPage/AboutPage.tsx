import "./AboutPage.css"

function AboutPage() {
  return (
    <>
    <div className="AboutCardContainer">
      <div className="AboutCard Left">
        <h3 className="AboutTitle"> Who we are </h3>
        <p>
        Welcome to HungerZero, where every act of kindness makes a significant impact. We are a dedicated team of individuals driven by the belief 
        that no one should suffer from hunger. Founded on the principles of compassion and solidarity, our mission is simple yet profound: to alleviate
        the pain of hunger and malnutrition in communities worldwide.
        </p>
      </div>

        <div className="AboutCard Right">
        <h3 className="AboutTitle"> What we do </h3>
        <p>
        At the heart of our work lies the unwavering commitment to provide sustenance to those in need. Through strategic partnerships, efficient distribution channels, 
        and sustainable initiatives, we strive to ensure that every donation reaches its intended recipients promptly and effectively. 
        However, our efforts extend beyond mere sustenance. We believe in empowering communities to break free from the cycle of poverty and hunger. 
        By investing in education, healthcare, and sustainable livelihoods, we aim to create a holistic framework for long-term change, enabling individuals and families 
        to build a better tomorrow.
        </p>
        </div>


        <div className="AboutCard Left">
        <h3 className="AboutTitle"> Why you should donate </h3>
        <p>
        Transparency and accountability are the cornerstones of our operations. We understand the trust placed in us by our donors, and we are committed to upholding the highest 
        standards of integrity in everything we do. Our financial records are meticulously maintained and regularly audited to ensure that every penny donated is used efficiently 
        and responsibly.

        But our impact goes beyond statistics and figures. It's measured in the smiles of children nourished, the hope rekindled in weary hearts, and the communities 
        transformed through the power of compassion. Together, we are not just feeding the hungry—we are feeding dreams, aspirations, and the promise of a brighter future 
        for generations to come.
        </p>
        </div>

      </div>
    </>

  );
}

export default AboutPage;
