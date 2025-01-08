import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            vitae? Odit similique eum eaque vero quasi. Officiis ut eos odit,
            cupiditate sint inventore nemo facilis labore nobis voluptate
            veritatis facere. Soluta culpa perferendis quos veritatis,
            doloremque rem ipsum! Ipsum quisquam saepe illo commodi quam at
            architecto ex qui magnam voluptatum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            provident in sunt distinctio reprehenderit, at quidem deserunt
            minus. Possimus repellendus quasi quia alias tempore eveniet ex sit
            aut iste maiores!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quod aperiam pariatur illo cum iusto maiores eos ad
            placeat omnis, molestiae rem earum eveniet asperiores aliquam sint
            dolores, adipisci nostrum?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur repudiandae error numquam quisquam quibusdam facilis
            architecto ipsam, eum sit adipisci?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur repudiandae error numquam quisquam quibusdam facilis
            architecto ipsam, eum sit adipisci?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur repudiandae error numquam quisquam quibusdam facilis
            architecto ipsam, eum sit adipisci?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
